import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, InventoryMasterService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-addeditsubcategory',
  templateUrl: './addeditsubcategory.component.html',
  styleUrls: ['./addeditsubcategory.component.scss']
})
export class AddeditsubcategoryComponent implements OnInit {
  addedit: any;
  name: any;
  curDate = new Date();
  categoryList: any;
  subCategoryList: Array<any> = [];
  subCategoryObj: any = {};
  editId: any;
  formSubmitted = false;
  categoryDropDownSettings: IDropdownSettings;
  searchValue = null;
  categoryRequired = false;

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router,
    private inventoryMasterService: InventoryMasterService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.getCategory(null);
    this.subCategoryObj.isActive = true;
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
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) {
    this.inventoryMasterService.getSubCategoryById(id)
      .subscribe((resp: any) => {
        this.subCategoryObj = resp.data;
        this.subCategoryObj.categoryObj = resp.data.category ? [{ id: resp.data.category.id, name: resp.data.category.name }] : null;
        this.categoryRequired = true;
        console.log(this.subCategoryObj.categoryObj, '======sample=====');
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

  addSubCategory(subcategoryForm) {
    this.formSubmitted = false;
    if (subcategoryForm.valid === false || this.categoryRequired === false) {
      this.formSubmitted = true;
    } else {
    const postParam = {
      code: this.subCategoryObj.code,
      name: this.subCategoryObj.name,
      description: this.subCategoryObj.description,
      categoryId: this.subCategoryObj.categoryObj ? this.subCategoryObj.categoryObj[0].id : null,
      isActive: this.subCategoryObj.isActive,
      id: this.editId
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
            ( (this.editId) ? this.inventoryMasterService.putSubCategory(postParam) : 
              this.inventoryMasterService.addSubCategory(postParam))
            .subscribe((resp: any) => {
              if (resp.status == 's') {
                this.alert.showSuccess(resp.userDisplayMesg, 'Success');
                this.router.navigate(['/inventory/subcategory/list']);
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

  navigateSubCategoryList() {
    this.router.navigate(['inventory/subcategory/list']);
  }
}
