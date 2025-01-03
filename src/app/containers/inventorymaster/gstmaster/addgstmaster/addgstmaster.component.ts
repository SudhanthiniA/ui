import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, InventoryMasterService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addgstmaster',
  templateUrl: './addgstmaster.component.html',
  styleUrls: ['./addgstmaster.component.scss']
})
export class AddgstmasterComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  gstList: Array<any> = [];
  gstObj: any = {
    code: '',
    name: '',
    description: '',
    isActive: true
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
    this.gstObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
  }

  setData(id) {
    this.inventoryMasterService.getGstById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.gstObj = responceData.data;
    });
  }

  addgst(gstForm) {
    this.formSubmitted = true;
    const postParam = {
      code: this.gstObj.code,
      name: this.gstObj.name,
      description: this.gstObj.description,
      isActive: this.gstObj.isActive,
      id: this.editId,
    };
    if (this.editId) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.editId;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }

    if (gstForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.inventoryMasterService.putGst(postParam) : this.inventoryMasterService.addGst(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['inventory/gstmaster/list']);
              } else {
                this.alert.showError(responceData.userDisplayMesg, 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  navigateGstList() {
    this.router.navigate(['inventory/gstmaster/list']);
  }
}
