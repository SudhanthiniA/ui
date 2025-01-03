import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { InventoryMasterService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-adduom',
  templateUrl: './adduom.component.html',
  styleUrls: ['./adduom.component.scss']
})
export class AdduomComponent implements OnInit {
  addedit: any;
  name: any;
  curDate = new Date();
  uomList: Array<any> = [];
  uomObj = {
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
    private alert: AlertService,
    private modalService: NgbModal,
    private inventoryMasterService: InventoryMasterService
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
    this.inventoryMasterService.getUomById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.uomObj = responceData.data;
    });
  }

  addUom(uomForm) {
    this.formSubmitted = true;
    const postParam = {
      id: this.editId,
      code: this.uomObj.code,
      name: this.uomObj.name,
      description: this.uomObj.description,
      isActive: this.uomObj.isActive,
    };
    if (this.editId) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.editId;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }

    if (uomForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.inventoryMasterService.putUom(postParam) : this.inventoryMasterService.addUom(postParam))
            .subscribe((resp: any) => {
              if (resp.status == "s") {
                this.alert.showSuccess(resp.userDisplayMesg, 'Success');
                this.router.navigate(['inventory/uom/list']);
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

  addUomList() {
    this.router.navigate(['inventory/uom/list']);
  }
}
