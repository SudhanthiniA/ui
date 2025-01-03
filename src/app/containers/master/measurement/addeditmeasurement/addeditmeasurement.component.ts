import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ApiService} from '@app/services';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import { MeasurementService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

    

@Component({
  selector: 'app-addeditmeasurement',
  templateUrl: './addeditmeasurement.component.html',
  styleUrls: ['./addeditmeasurement.component.scss']
})
export class AddeditmeasurementComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  measurementObj: any = {
    code: '',
    desc: '',
    isActive: true
  };
  date: any;

  editId: any;
  formSubmitted = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private measurementService: MeasurementService,
    private apiservice: ApiService,
    private datePipe: DatePipe,
    private alert: AlertService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.measurementObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addmeasurement(measurementForm) {
    this.formSubmitted = false;
    if (measurementForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.measurementObj.code,
        desc: this.measurementObj.desc,
        isActive: this.measurementObj.isActive,
        id: this.editId
      };
      if (this.editId) {
        postParam['id'] = this.editId;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
      if (respData) {
        ((this.editId) ? this.measurementService.updateMeasurement(postParam) : this.measurementService.addMeasurement(postParam))
        .subscribe((responceData: any) => {
          if (responceData.status == 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
            this.router.navigate(['/master/measurement/list']);
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

  setData(id) {
    this.measurementService.getMeasurementById(id).subscribe((responceData: any) => {
      this.measurementObj = responceData.data;
    });
  }

}
