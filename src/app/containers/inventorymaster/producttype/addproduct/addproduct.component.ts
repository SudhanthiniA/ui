import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { InventoryMasterService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  addedit: any;
  name: any;
  curDate = new Date();
  productList: Array<any> = [];
  categoryList: any;
  subcategoryList: any;
  productObj: any = {};
  editId: any;
  formSubmitted = false;
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
    this.getCategory(null);
    this.getSubCategory();
    this.productObj.isActive = true;
    this.productObj.categoryId = '';
    this.productObj.subCategoryId = '';
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
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
    this.inventoryMasterService.getProductById(id)
      .subscribe((resp: any) => {
        this.productObj = resp.data;
        this.productObj.categoryObj = resp.data.categoryId ? [{ id: resp.data.categoryId.id, name: resp.data.categoryId.name }] : null;
        this.productObj.subCategoryId = resp.data.subCategoryId ? resp.data.subCategoryId.id : null;
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

  addProduct(productForm) {
    this.formSubmitted = false;
    if (productForm.valid === false || this.categoryRequired === false) {
      this.formSubmitted = true;
    } else {
    const postParam = {
      code: this.productObj.code,
      name: this.productObj.name,
      categoryId: this.productObj.categoryObj ? this.productObj.categoryObj[0].id : null,
      subCategoryId: this.productObj.subCategoryId,
      description: this.productObj.description,
      isActive: this.productObj.isActive
    };
    if (this.editId) {
      postParam['id'] = this.editId;
    } else {
    }
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.inventoryMasterService.putProduct(postParam) : this.inventoryMasterService.addProduct(postParam))
            .subscribe((resp: any) => {
              if (resp.status == 's') {
                this.alert.showSuccess(resp.userDisplayMesg, 'Success');
                this.router.navigate(['/inventory/product/list']);
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

  navigateProductList() {
    this.router.navigate(['inventory/product/list']);
  }
}
