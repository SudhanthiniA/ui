import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '@app/services';
import { Pd8Service, MasterapiService, StockInService, DistileryService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addpd8-form',
  templateUrl: './addpd8-form.component.html',
  styleUrls: ['./addpd8-form.component.scss']
})
export class Addpd8FormComponent implements OnInit {

  pd8Form: FormGroup;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  formSubmitted = false;
  editId: any;
  curDate = new Date();
  pd8Obj: any;
  tankGradeList: any = [];
  tankList: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private modelservice: NgbModal,
    private pd8service: Pd8Service,
    private masterapiservice: MasterapiService,
    private stockinservice: StockInService,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.buildpd8FormGrp();
    this.getAllTankGrades();
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd8ById(params.id);
        this.editId = params.id;
      } else {
        this.getPd8ById();
      }
    });
  }

  getAllTankGrades() {
    this.masterapiservice.get('molassesType/getAllMolassesType').then((responceData: any) => {
      if (responceData.status === 's') {
        this.tankGradeList = responceData.data;
      }
    });
  }

  molassesTypes(id) {
    this.stockinservice.gettanksbyid(id).subscribe((resp: any) => {
      // alert('msg');
      if (resp.status === 's') {
        console.log(resp.data);
        if (resp.data) {
          this.tankList = resp.data.registeredTankByGradeList;
        } else {
          this.tankList = [];
        }
      }
    });
  }

  buildpd8FormGrp() {
    this.pd8Form = this.formBuilder.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      tankId: ['', Validators.required],
      initialCount: ['', Validators.required],
      finalCount: ['', Validators.required],
      molassesUsed: ['', Validators.required],
      washPrepared: ['', Validators.required],
      initialSpGravity: ['', Validators.required],
      finalSpGravity: ['', Validators.required],
      washDistillery: ['', Validators.required],
      gradeId: ['', Validators.required],
      remarks: ['', Validators.required],
      temperature: ['', Validators.required],
      washNumber: ['', Validators.required],
      openbalance: ['']
    });
  }

  getTankDetails(id) {
    this.distileryService.getcurrentStockBytankid(id).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.pd8Form.patchValue({
          openbalance: responceData.data.openingBalance,
        });
        // this.addEmptyCtrl();
      } else {
        this.alert.showError(responceData.userDisplayMesg, 'error');
      }
    });
  }

  saveData(form, status) {
    this.formSubmitted = false;
    if (form.valid === false && status === 'SUBMITTED') {
      this.formSubmitted = true;
    } else {
      const modalRef = this.modelservice.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          if (this.editId) {
            const postParam = {
              id: parseInt(this.editId),
              from: this.pd8Form.value.from,
              to: this.pd8Form.value.to,
              tankId: parseInt(this.pd8Form.value.tankId),
              initialCount: this.pd8Form.value.initialCount,
              molassesStockTransferId: 208,
              finalCount: this.pd8Form.value.finalCount,
              molassesUsed: this.pd8Form.value.molassesUsed,
              washPrepared: this.pd8Form.value.washPrepared,
              initialSpGravity: this.pd8Form.value.initialSpGravity,
              finalSpGravity: this.pd8Form.value.finalSpGravity,
              washDistillery: this.pd8Form.value.washDistillery,
              remarks: this.pd8Form.value.remarks,
              temperature: this.pd8Form.value.temperature,
              washNumber: this.pd8Form.value.washNumber,
              gradeId: parseInt(this.pd8Form.value.gradeId),
              status
            };
            this.pd8service.updatepd8data(postParam).subscribe(responceData => {
              this.handleResponse(responceData);
            });
          } else {
            const postParam = {
              from: this.pd8Form.value.from,
              to: this.pd8Form.value.to,
              tankId: parseInt(this.pd8Form.value.tankId),
              initialCount: this.pd8Form.value.initialCount,
              finalCount: this.pd8Form.value.finalCount,
              molassesStockTransferId: 208,
              molassesUsed: this.pd8Form.value.molassesUsed,
              washPrepared: this.pd8Form.value.washPrepared,
              initialSpGravity: this.pd8Form.value.initialSpGravity,
              finalSpGravity: this.pd8Form.value.finalSpGravity,
              temperature: this.pd8Form.value.temperature,
              washNumber: this.pd8Form.value.washNumber,
              gradeId: parseInt(this.pd8Form.value.gradeId),
              washDistillery: this.pd8Form.value.washDistillery,
              remarks: this.pd8Form.value.remarks,
              status
            };
            this.pd8service.addpd8data(postParam).subscribe((responseData: any) => {
              this.handleResponse(responseData);
            });
          }
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  handleResponse(responceData: any) {
    if (responceData.status === 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/distillery/pd8-form/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }

  getPd8ById(id?) {
    if (id) {
      this.pd8service.getpd8byid(id).subscribe(responceData => {
        this.pd8Obj = responceData.data;
        // let dateofstockin = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
        this.pd8Form.patchValue({
          from: this.datePipe.transform(this.pd8Obj.from, 'yyyy-MM-ddThh:mm'),
          to: this.datePipe.transform(this.pd8Obj.to, 'yyyy-MM-ddThh:mm'),
          tankId: this.pd8Obj.tankId,
          molassesStockTransferId: this.pd8Obj.molassesStockTransferId,
          initialCount: this.pd8Obj.initialCount,
          finalCount: this.pd8Obj.finalCount,
          molassesUsed: this.pd8Obj.molassesUsed,
          washPrepared: this.pd8Obj.washPrepared,
          initialSpGravity: this.pd8Obj.initialSpGravity,
          finalSpGravity: this.pd8Obj.finalSpGravity,
          washDistillery: this.pd8Obj.washDistillery,
          temperature: this.pd8Obj.temperature,
          washNumber: this.pd8Obj.washNumber,
          gradeId: this.pd8Obj.gradeId,
          remarks: this.pd8Obj.remarks,

        });
        this.molassesTypes(this.pd8Obj.gradeId);
        this.getTankDetails(this.pd8Obj.tankId);
      });
    }
  }

  checkingvalue(pres) {
    if (pres > this.pd8Form.get('openbalance').value) {
      this.alert.showError('Please Enter less than or equal of Opening Blalance', 'error');
      (this.pd8Form.get('molassesUsed').reset());
    }
  }

  previewPd8b(form) {
    sessionStorage.setItem('pd8formobj', JSON.stringify(this.pd8Form.value));
    this.router.navigate(['/supplychainmanagement/distillery/pd8-form/preview']);
  }

}
