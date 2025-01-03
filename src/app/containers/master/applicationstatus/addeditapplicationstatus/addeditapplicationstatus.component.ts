import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { ApplicantStatusService, PatternService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addeditapplicationstatus',
  templateUrl: './addeditapplicationstatus.component.html',
  styleUrls: ['./addeditapplicationstatus.component.scss']
})

export class AddeditapplicationstatusComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  applicantstatusObj: any = {
    name: '',
    code: '',
    isActive: true
  };
  date: any;
  editId: any;
  formSubmitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private modalService: NgbModal,
    public patternService: PatternService,
    private applicantStatusService: ApplicantStatusService
  ) { }

  ngOnInit() {
    this.applicantstatusObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) {
    this.applicantStatusService.getApplicantStatusById(id)
      .subscribe((resp: any) => {
        this.applicantstatusObj = resp.data;
      });
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addapplicantstatus(applicantstatusForm) {
    this.formSubmitted = true;
    const postParam = {
      code: this.applicantstatusObj.code,
      name: this.applicantstatusObj.name,
      isActive: this.applicantstatusObj.isActive,
      id: this.editId
    };
    if (this.editId) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.editId;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
    if (applicantstatusForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.applicantStatusService.putApplicantStatus(postParam) : this.applicantStatusService.addApplicantStatus(postParam))
            .subscribe((resp: any) => {
              if (resp.status == 's') {
                this.alert.showSuccess(resp.userDisplayMesg, 'Success');
                this.router.navigate(['/master/applicationstatus/list']);
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