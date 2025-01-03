import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { ModeOfTransferService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-add-edit-transfer-mode',
  templateUrl: './add-edit-transfer-mode.component.html',
  styleUrls: ['./add-edit-transfer-mode.component.scss']
})
export class AddEditTransferModeComponent implements OnInit {

  transfermodeObject: any = {};
  licencetypeData: any;
  licencenameData: any;
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transferService: ModeOfTransferService,
    private alert: AlertService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.transfermodeObject.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getProductTypeById(params.id);
        this.transfermodeObject.id = params.id;
        this.addedit = 'Edit';
      }
    });
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addtransfermode(transfermodeForm) {
    this.formSubmitted = false;
    if (transfermodeForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.transfermodeObject.code,
        name: this.transfermodeObject.name,
        percentage: this.transfermodeObject.percentage,
        modifiedBy: 'Admin',
       // id: this.transfermodeObject.id,
       isActive: this.transfermodeObject.isActive
      };
      if (this.transfermodeObject.id) {
        postParam['id'] = this.transfermodeObject.id;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
    ((this.transfermodeObject.id) ? this.transferService.updateTransferMode(postParam) : this.transferService.addTransferMode(postParam))
      .subscribe((responceData: any) => {
          if (responceData.status == 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
            this.router.navigate(['/master/transfer-mode/list']);
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

  getProductTypeById(id) {
    this.transferService.getTransferById(id).subscribe((responceData: any) => {
      this.transfermodeObject = responceData.data;
    });
  }

}
