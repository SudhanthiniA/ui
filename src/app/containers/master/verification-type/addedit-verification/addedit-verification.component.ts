import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VerificationTypeService, PatternService, AlertService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addedit-verification',
  templateUrl: './addedit-verification.component.html',
  styleUrls: ['./addedit-verification.component.scss']
})
export class AddeditVerificationComponent implements OnInit {
  verificationObject: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private verificationService: VerificationTypeService,
    private modalService: NgbModal,
    public patternService: PatternService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.verificationObject.isActive = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.getVerificationById(params.Id);
        this.verificationObject.Id = params.Id;
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

  addverification(verificationForm) {
    this.formSubmitted = true;
    const postParam = {
      code: this.verificationObject.code,
      name: this.verificationObject.name,
      frequencyDays: this.verificationObject.frequencyDays,
      id: this.verificationObject.id,
      isActive: this.verificationObject.isActive,
    };
    if (this.verificationObject.id) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.verificationObject.id;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
    if (verificationForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.verificationObject.id) ? this.verificationService.putVerificationType(postParam) : this.verificationService.addVerificationType(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['/master/verification-type/list']);
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

  getVerificationById(id) {
    this.verificationService.getVerificationTypeById(id).subscribe((responceData: any) => {
      this.verificationObject = responceData.data;
    });
  }


}
