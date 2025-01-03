import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiUrls } from '@appEnv/apiurls';
import { AlertService, InventoryMasterService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addstoremaster',
  templateUrl: './addstoremaster.component.html',
  styleUrls: ['./addstoremaster.component.scss']
})
export class AddstoremasterComponent implements OnInit {
  addedit: any;
  name: any;
  storeList: Array<any> = [];
  curDate = new Date();
  storeObj = {
    code: '',
    name: '',
    description: '',
    isActive: true,
    created_by: '',
    created_on: '',
    modifed_by: '',
    modified_on: ''
  };
  editId: any;
  formSubmitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private inventoryMasterService: InventoryMasterService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
  }
  setData(id) {
    const url = apiUrls.getStoreByid + '?id=' + id;
    this.inventoryMasterService.getstoreById(id).subscribe((responceData: any) => {
      this.storeObj = responceData.data;
    });
  }
  addStore(storeForm) {
    this.formSubmitted = true;
    const postParam = {
      id: this.editId,
      code: this.storeObj.code,
      name: this.storeObj.name,
      description: this.storeObj.description,
      isActive: this.storeObj.isActive,
    };
    if (this.editId) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.editId;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
    if (storeForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.inventoryMasterService.updateStore(postParam) : this.inventoryMasterService.addStore(postParam))
            .subscribe((resp: any) => {
              if (resp.status === 's') {
                this.alert.showSuccess(resp.userDisplayMesg, 'Success');
                this.router.navigate(['inventory/storemaster/list']);
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

  navigateStoreList() {
    this.router.navigate(['inventory/storemaster/list']);
  }
}
