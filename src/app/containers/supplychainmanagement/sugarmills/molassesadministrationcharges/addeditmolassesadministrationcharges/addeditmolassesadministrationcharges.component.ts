import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, MolassesAdminService, PreviewService, CommonService } from '@app/services';

@Component({
  selector: 'app-addeditmolassesadministrationcharges',
  templateUrl: './addeditmolassesadministrationcharges.component.html',
  styleUrls: ['./addeditmolassesadministrationcharges.component.scss']
})
export class AddeditmolassesadministrationchargesComponent implements OnInit {
  molassesadministrationchargesObj: any = {
    reqdate: '',
    openingBalance: '',
    deposit: '',
    total: '',
    consumedDay: '',
    consumedToDate: '',
    balance: '',
    dispatchedDayQtls: '',
    dispatchedToDateQtls: '',
    remarks: '',
    status: '1'
  };
  addedit: any;
  editId: any;
  formSubmitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private alert: AlertService,
    private molassesAdminService: MolassesAdminService,
    private preview: PreviewService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getAdminValues();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else if (this.preview.setData) {
        this.molassesadministrationchargesObj = this.preview.setData;
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  getAdminValues() {
    this.molassesAdminService.getAdminValues().subscribe((responceData: any) => {
      this.molassesadministrationchargesObj.openingBalance = responceData.data ? responceData.data.openingBalance : null;
      this.molassesadministrationchargesObj.consumedDay = responceData.data ? responceData.data.consumedDay : null;
      this.molassesadministrationchargesObj.consumedToDate = responceData.data ? responceData.data.consumedToDate : null;
      this.molassesadministrationchargesObj.balance = responceData.data ? responceData.data.balance : null;
      this.molassesadministrationchargesObj.dispatchedDayQtls = responceData.data ? responceData.data.dispatchedDayQtls : null;
      this.molassesadministrationchargesObj.dispatchedToDateQtls = responceData.data ? responceData.data.dispatchedToDateQtls : null
    })
  }

  setData(id) {
    this.molassesAdminService.getMolassesAdminById(id).subscribe((responceData: any) => {
      this.molassesadministrationchargesObj = responceData.data;
      this.molassesadministrationchargesObj.requestDate =
        this.datepipe.transform(this.molassesadministrationchargesObj.requestDate, 'yyyy-MM-dd , h:mm:ss');
    })
  }

  saveData(form, method) {
    console.log('for date', form)
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
      return false;
    }
    if (this.editId) {
      this.molassesadministrationchargesObj[`id`] = this.editId;
      this.molassesadministrationchargesObj[`method`] = method
      this.molassesadministrationchargesObj[`modifiedBy`] = 'Admin';
    } else {
      this.molassesadministrationchargesObj[`method`] = method;
      this.molassesadministrationchargesObj[`createdBy`] = 'Admin';
      this.molassesadministrationchargesObj.reqdate = this.datepipe.transform(this.molassesadministrationchargesObj.reqdate, 'yyyy-MM-dd,h:mm:ss');
      console.log('dateeee',this.molassesadministrationchargesObj)
    }

    (
      (this.editId) ? this.molassesAdminService.updateMolassesAdmin(this.molassesadministrationchargesObj) : 
      this.molassesAdminService.addMolassesAdmin(this.molassesadministrationchargesObj)
    ).subscribe((responceData: any) => {
      this.handleResponse(responceData)
    });
  }

  handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/sugarmills/molassesadministrationcharges/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }

  previewData(form) {
    this.preview.setData = form.value;
    this.router.navigate(['/supplychainmanagement/sugarmills/molassesadministrationcharges/preview']);
  }

  calTotals() {
    const { openingBalance = 0, deposit = 0 } = this.molassesadministrationchargesObj;
    this.molassesadministrationchargesObj.total = parseInt(openingBalance) + parseInt(deposit)
  }

  calBalance() {
    const { consumedDay = 0, consumedToDate = 0 } = this.molassesadministrationchargesObj;
    this.molassesadministrationchargesObj.balance = parseInt(consumedDay) - parseInt(consumedToDate);
  }

  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }
}
