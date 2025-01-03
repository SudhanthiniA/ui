import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, SheeraNidhiService, PreviewService, CommonService } from '@app/services';

@Component({
  selector: 'app-addregester',
  templateUrl: './addregester.component.html',
  styleUrls: ['./addregester.component.scss']
})
export class AddregesterComponent implements OnInit {
  tankreqObj: any = {
    date: '',
    dispatchGradeAHeavyQtls: '',
    dispatchGradeBHeavyQtls: '',
    dispatchGradeCHeavyQtls: '',
    totalDispatchMolassesQtls: '',
    rateGradeAHeavyQtls: '',
    rateGradeBHeavyQtls: '',
    rateGradeCHeavyQtls: '',
    dueGradeAHeavyQtls: '',
    dueGradeBHeavyQtls: '',
    dueGradeCHeavyQtls: '',
    totaldue: '',
    progressiveDepositsOnDate: '',
    totalProgressiveDeposits: '',
    accountNumber: '',
    totalamount: '',
    balanceInAccount: '',
    releaseEcOrder: '',
    withdrawl: '',
    remarks: '',
  };
  editId: any;
  formSubmitted = false;
  addedit: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private sheeraNidhiService: SheeraNidhiService,
    private alert: AlertService,
    private preview: PreviewService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else if (this.preview.setData) {
        this.tankreqObj = this.preview.setData;
      }
    });
  }
  setData(id) {
    this.sheeraNidhiService.getMolassesRegisterById(id).subscribe((responceData: any) => {
      this.tankreqObj = responceData.data;
      this.tankreqObj.date = this.datepipe.transform(this.tankreqObj.date, 'yyyy-MM-dd');
      this.tankreqObj.totalDispatchMolassesQtls = this.tankreqObj.dispatchGradeAHeavyQtls +
      this.tankreqObj.dispatchGradeBHeavyQtls + this.tankreqObj.dispatchGradeCHeavyQtls;
      this.tankreqObj.totaldue = this.tankreqObj.dueGradeAHeavyQtls + this.tankreqObj.dueGradeBHeavyQtls +
      this.tankreqObj.dueGradeCHeavyQtls;
      this.tankreqObj.totalProgressiveDeposits = this.tankreqObj.totalDispatchMolassesQtls + this.tankreqObj.totaldue;
      this.tankreqObj.totalamount = this.tankreqObj.totalprogress + this.tankreqObj.progressiveDepositsOnDate;
    })
  }

  saveregistration(form, method) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
      return false;
    }
    if (this.editId) {
      this.tankreqObj[`modifiedBy`] = 'Admin';
      this.tankreqObj[`method`] = method;
      this.tankreqObj[`status`] = 1;
      this.tankreqObj[`id`] = this.editId;
    } else {
      this.tankreqObj[`createdBy`] = 'Admin';
      this.tankreqObj[`method`] = method;
      this.tankreqObj[`status`] = 1;
    }

    (
      (this.editId) ? this.sheeraNidhiService.updateMolassesRegister(this.tankreqObj) :
        this.sheeraNidhiService.addMolassesRegister(this.tankreqObj)
    ).subscribe((responceData: any) => {
      this.handleResponse(responceData)
    })
  }
  handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/sugarmills/molassesfundreg/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }
  caltotal() {
    this.tankreqObj.totalDispatchMolassesQtls = this.tankreqObj.dispatchGradeBHeavyQtls + this.tankreqObj.dispatchGradeCHeavyQtls;
  }

  caltotals() {
    const {
      dueGradeBHeavyQtls = 0,
      dueGradeCHeavyQtls = 0,
      totaldue = 0,
      totalDispatchMolassesQtls = 0
    } = this.tankreqObj;
    this.tankreqObj.totaldue = dueGradeBHeavyQtls + dueGradeCHeavyQtls;
    this.tankreqObj.totalProgressiveDeposits = totaldue + totalDispatchMolassesQtls;
  }

  calculatetotals() {
    const { totalProgressiveDeposits = 0, progressiveDepositsOnDate = 0 } = this.tankreqObj;
    this.tankreqObj.totalamount = parseInt(totalProgressiveDeposits) + parseInt(progressiveDepositsOnDate);
  }

  Preview(formdata) {
    console.log(formdata.value)
    this.preview.setData = formdata.value
    this.router.navigate(['/supplychainmanagement/sugarmills/molassesfundreg/preview']);
  }

  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }
}
