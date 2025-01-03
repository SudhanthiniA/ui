import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { InventoryMasterService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-addeditsubproduct',
  templateUrl: './addeditsubproduct.component.html',
  styleUrls: ['./addeditsubproduct.component.scss']
})
export class AddeditsubproductComponent implements OnInit {
  addedit: any;
  name: any;
  productList: any;
  subProductList: any;
  categoryList: any;
  subcategoryList: any;
  curDate = new Date();
  subProductObj: any = {};
  formSubmitted = false;
  editId: any;
  categoryDropDownSettings: IDropdownSettings;
  searchValue = null;
  categoryRequired = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private alert: AlertService,
    private inventoryMasterService: InventoryMasterService
  ) { }

  ngOnInit() {
    this.subProductObj.isActive = true;
    this.subProductObj.categoryId = '',
    this.subProductObj.subCategoryId = '',
    this.subProductObj.productId = '',
    this.getCategory(null);
    this.getSubCategory();
    this.getProduct();
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    console.log(this.addedit);
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
        console.log(this.editId);
      }
    });
    this.categoryDropDownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }

  setData(id) {
    this.inventoryMasterService.getSubProductById(id)
      .subscribe((resp: any) => {
        this.subProductObj = resp.data;
        this.subProductObj.categoryObj = resp.data.categoryId ? [{ id: resp.data.categoryId.id, name: resp.data.categoryId.name }] : null;
        this.subProductObj.subCategoryId = resp.data.subCategoryId ? resp.data.subCategoryId.id : null;
        this.subProductObj.productId = resp.data.productId ? resp.data.productId.id : null;
        this.categoryRequired = true;
      });
  }

  onItemSelect(item: any) {
    this.categoryRequired = true;
  }

  onItemDeselect(item: any) {
    this.categoryRequired = false;
  }

  onFilterChange(item: any) {
    if (item.length > 2) {
      this.searchValue = item;
      this.getCategory(this.searchValue);
    } else {
      this.searchValue = null;
      this.getCategory(this.searchValue);
    }
  }

  onDropDownClose() {
    if (this.searchValue !== null) {
      this.searchValue = null;
      this.getCategory(this.searchValue);
    }
  }

  getCategory(categoryName) {
    const requestParam = {
      filters: { name: name, isActive: true },
      pageNo: 0, paginationSize: 10
    };
    this.inventoryMasterService.searchCategory(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.categoryList = resp.data.contents;
        }
      });
  }

  getSubCategory() {
    this.inventoryMasterService.getSubCategory()
      .subscribe((resp: any) => {
        this.subcategoryList = resp.data;
      });
  }

  getProduct() {
    this.inventoryMasterService.getProduct()
      .subscribe((resp: any) => {
        this.productList = resp.data;
      });
  }

  getProductChange(product) {
    if (product !== '') {
      console.log(this.categoryList);
      this.inventoryMasterService.getProduct()
        .subscribe((resp: any) => {
          this.productList = resp.data;
        });
    } else {
      this.categoryList = [];
    }
  }

  addSubProduct(subProductForm) {
    this.formSubmitted = false;
    if (subProductForm.valid === false || this.categoryRequired === false) {
      this.formSubmitted = true;
    } else {
    const postParam = {
      code: this.subProductObj.code,
      name: this.subProductObj.name,
      categoryId: this.subProductObj.categoryObj ? this.subProductObj.categoryObj[0].id : null,
      subCategoryId: this.subProductObj.subCategoryId,
      productId: this.subProductObj.productId,
      description: this.subProductObj.description,
      isActive: this.subProductObj.isActive
    };
    if (this.editId) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.editId;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.inventoryMasterService.putSubProduct(postParam) : this.inventoryMasterService.addSubProduct(postParam))
            .subscribe((resp: any) => {
              if (resp.status == 's') {
                this.alert.showSuccess(resp.userDisplayMesg, 'Success');
                this.router.navigate(['/inventory/subproduct/list']);
              } else {
                this.alert.showError(resp.userDisplayMesg, 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  navigatesubProductList() {
    this.router.navigate(['inventory/subproduct/list']);
  }

  getSubCategoryOnLoad(subcategory) {
    if (subcategory !== '') {
      console.log(this.categoryList);
      this.inventoryMasterService.getSubCategory()
        .subscribe((resp: any) => {
          this.subcategoryList = resp.data;
        });
    } else {
      this.categoryList = [];
    }
  }

  getSubCategoryChange(subcategory) {
    if (subcategory !== '') {
      console.log(this.categoryList);
      this.inventoryMasterService.getSubCategory()
        .subscribe((resp: any) => {
          this.subcategoryList = resp.data;
          this.subProductObj.subcategory = '';
          this.subProductObj.product = '';
        });
    } else {
      this.categoryList = [];
    }
  }
}

