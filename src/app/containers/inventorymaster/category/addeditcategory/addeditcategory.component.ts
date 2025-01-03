import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, InventoryMasterService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addeditcategory',
  templateUrl: './addeditcategory.component.html',
  styleUrls: ['./addeditcategory.component.scss']
})
export class AddeditcategoryComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  categoryList: Array<any> = [];
  categoryObj: any = {
    code: '',
    name: '',
    description: '',
    isActive: true
  };
  date: any;
  editId: any;
  formSubmitted = false;

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router,
    private inventoryMasterService: InventoryMasterService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.categoryObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  setData(id) {
    this.inventoryMasterService.getCategoryById(id)
      .subscribe((resp: any) => {
        this.categoryObj = resp.data;
        console.log(this.categoryObj)
      });
  }

  addcategory(categoryForm) {
    this.formSubmitted = true;
    const postParam = {
      code: this.categoryObj.code,
      name: this.categoryObj.name,
      description: this.categoryObj.description,
      isActive: this.categoryObj.isActive
    };

    if (this.editId) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.editId;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
    if (categoryForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.inventoryMasterService.putCategory(postParam) : this.inventoryMasterService.addCategory(postParam))
            .subscribe((resp: any) => {
              if (resp.status == 's') {
                this.alert.showSuccess(resp.userDisplayMesg, 'Success');
                this.router.navigate(['/inventory/category/list']);
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
}

