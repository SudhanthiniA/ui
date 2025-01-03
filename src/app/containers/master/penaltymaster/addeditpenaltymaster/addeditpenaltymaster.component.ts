import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import { PenalityService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addeditpenaltymaster',
  templateUrl: './addeditpenaltymaster.component.html',
  styleUrls: ['./addeditpenaltymaster.component.scss']
})
export class AddeditpenaltymasterComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;
  penaltyList: Array<any> = [];
  penaltyObj: any = {
    code: '',
    name: '',
    dueDateName: '',
    isActive: true
  };
  date: any;
  duedatelist =
    [{ id: 1, name: 'Up to 30 days' }, { id: 2, name: 'Up to 3 months' },
    { id: 1, name: 'Up to 6 months' }, { id: 1, name: 'Up to one year' }];

  editId: any;
  formSubmitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private penalityService: PenalityService,
    private modalService: NgbModal,
    private alert: AlertService) {

  }

  ngOnInit() {
    this.penaltyObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.getByid(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';

  }

  getByid(id) {
    this.penalityService.getPenalityById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.penaltyObj = responceData.data;
    });
  }
  addPenalty(penaltyForm) {
    this.formSubmitted = false;
    if (penaltyForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.penaltyObj.code,
        name: this.penaltyObj.name,
        dueDateName: this.penaltyObj.dueDateName,
        isActive: this.penaltyObj.isActive,
      };
      if (this.editId) {
        postParam['id'] = this.editId;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.penalityService.updatePenality(postParam) : this.penalityService.addPenality(postParam))

            .subscribe((responceData: any) => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['/master/penaltymaster/list']);
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
  navigatepenaltyList() {
    this.router.navigate(['/master/penaltymaster/list']);
  }

}
