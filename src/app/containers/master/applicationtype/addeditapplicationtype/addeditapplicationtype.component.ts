import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { ApplicantTypeService, PatternService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addeditapplicationtype',
  templateUrl: './addeditapplicationtype.component.html',
  styleUrls: ['./addeditapplicationtype.component.scss']
})
export class AddeditapplicationtypeComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  applicanttypeObj: any = {
    code: '',
    type: '',
    isActive: true
  };
  editId: any;
  formSubmitted = false;
  date: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private modalService: NgbModal,
    private applicanttypeService: ApplicantTypeService,
    public patternService: PatternService
  ) { }

  ngOnInit() {
    this.applicanttypeObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) {
    this.applicanttypeService.getApplicantTypeById(id)
      .subscribe((resp: any) => {
        this.applicanttypeObj = resp.data;
      });
  }

  removeFirstSpace(e) {
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addapplicanttype(applicanttypeForm) {
    this.formSubmitted = true;
    const postParam = {
      code: this.applicanttypeObj.code,
      type: this.applicanttypeObj.type,
      isActive: this.applicanttypeObj.isActive,
      id: this.editId
    };
    if (this.editId) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.editId;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
    if (applicanttypeForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.applicanttypeService.putApplicantType(postParam) : this.applicanttypeService.addApplicantType(postParam))
            .subscribe((resp: any) => {
              if (resp.status == 's') {
                this.alert.showSuccess(resp.userDisplayMesg, 'Success');
                this.router.navigate(['/master/applicationtype/list']);
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
