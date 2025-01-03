import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Mf9Service, AlertService } from '@app/services';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';

@Component({
  selector: 'app-viewmf9',
  templateUrl: './viewmf9.component.html',
  styleUrls: ['./viewmf9.component.scss']
})
export class Viewmf9Component implements OnInit {
  mf9FormGroup: FormGroup;
  viewId: any;
  mf9Data: any;
  molasismode: string;
  sugarmillname = 'Triveni Engineering & Industries Ltd';
  sugarmilladdress = 'Sugarmill Unit,Milak Narayanpur,P.O Dadiyal Tehsil,Tanda Badi,Dist-Rampur,UP-244925';
  generalmanager = 'Mr.Bhupender Singh';
  workflowobj: any;
  addedit: any;
  formSubmitted = false;
  userName: any;
  level: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private mf9Service: Mf9Service,
    private formBuilder: FormBuilder,
    private WorkflowcofigService: WorkflowcofigService,
    private alert: AlertService
  ) {
  }

  ngOnInit() {
    this.userName = localStorage.getItem('USER_NAME');
    this.buildPrescriptionFormGrp();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      } else {
        this.setdatapreiview();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
    if (this.userName == 'TransportOfficer') {
      this.level = 'Level 2'
    }
    else {
      this.level = 'Level 3'
    }

  }

  setData(id) {
    if (id) {
      this.mf9Service.getMf9ById(id).subscribe((responceData: any) => {
        this.mf9Data = responceData.data;
        this.mf9FormGroup.patchValue({
          sugarmillname: 'Triveni Engineering & Industries Ltd',
          sugarmilladdress: 'Sugarmill Unit,Milak Narayanpur,P.O Dadiyal Tehsil,Tanda Badi,Dist-Rampur,UP-244925',
          generalmanager: 'Mr.Bhupender Singh',
          lastyear: '2019-2020,',
          thisyear: '2020-2021',
          lastyearstartdate: '09-11-2019',
          lastyearenddate: '28-04-2020',
          // thisyearstartdate: this.datepipe.transform(this.mf9Data.thisYearStartDate, 'yyyy-MM-dd'),
          // thisyearenddate: this.datepipe.transform(this.mf9Data.thisYearEndDate, 'yyyy-MM-dd'),
          thisyearstartdate: this.mf9Data.thisYearStartDate,
          thisyearenddate: this.mf9Data.thisYearEndDate,
          lastyeardays: '172',
          thisyeardays: responceData.data.thisYearDays,
          lastyearcanesupply: '8119639.14',
          thisyearcanesupply: responceData.data.thisYearCanesupply,
          lastyearmolassesqtls: '481604.50',
          thisyearmolassesqtls: responceData.data.thisYearMolassesQtls,
          lastyearpermolassescane: '5.93%',
          thisyearpermolassescane: responceData.data.thisYearPerMolassesCane,
          frombroadgauge: responceData.data.fromBroadGauge,
          frommetergauge: responceData.data.fromMeterGauge,
          tochemical: 481604.20,
          suppliestoother: 0,
          closingbalance: 0,
          molassesloadingmode: responceData.data.molassesLoadingMode === 'Manual' ? 'false' : 'true',
          wastage: 0,
          stockindetails: responceData.data.mf9StockDetail,
          isShowButtons: responceData.data.isShowButtons,
        });
        this.WorkflowcofigService.getworkflowbydesignation('SUGAR_MILL', 'SUGARMILL_MF9PRODUCTION').subscribe((resp: any) => {
          this.workflowobj = resp.content;
        });
      })
    } else {
      this.setdatapreiview();
    }

  }

  buildPrescriptionFormGrp() {
    this.mf9FormGroup = this.formBuilder.group({
      sugarmillname: 'Triveni Engineering & Industries Ltd',
      sugarmilladdress: 'Sugarmill Unit,Milak Narayanpur,P.O Dadiyal Tehsil,Tanda Badi,Dist-Rampur,UP-244925',
      generalmanager: 'Mr.Bhupender Singh',
      lastyear: '2019-2020,',
      thisyear: '2020-2021',
      lastyearstartdate: '09-11-2019',
      lastyearenddate: '28-04-2020',
      thisyearstartdate: '',
      thisyearenddate: '',
      lastyeardays: '172',
      thisyeardays: '',
      lastyearcanesupply: '8119639.14',
      thisyearcanesupply: '',
      lastyearmolassesqtls: '481604.50',
      thisyearmolassesqtls: '',
      lastyearpermolassescane: '5.93%',
      thisyearpermolassescane: '',
      frombroadgauge: '',
      frommetergauge: '',
      tochemical: 481604.20,
      suppliestoother: 0,
      closingbalance: 0,
      mechanical: '',
      manual: '',
      wastage: 0,
      stockindetails: this.formBuilder.array([
        this.addFormGroupTable()
      ])
    });
  }
  setdatapreiview() {
    const responceData: any = JSON.parse(sessionStorage.getItem('formdata'));
    console.log('FORMDATA', responceData)

    this.mf9FormGroup.patchValue({
      sugarmillname: 'Triveni Engineering & Industries Ltd',
      sugarmilladdress: 'Sugarmill Unit,Milak Narayanpur,P.O Dadiyal Tehsil,Tanda Badi,Dist-Rampur,UP-244925',
      generalmanager: 'Mr.Bhupender Singh',
      lastyear: responceData.lastYear,
      thisyear: responceData.thisYear,
      lastyearstartdate: responceData.lastYearStartDate,
      lastyearenddate: responceData.lastYearEndDate,
      thisyearstartdate: responceData.thisYearStartDate,
      thisyearenddate: responceData.thisYearEndDate,
      lastyeardays: responceData.lastYearDays,
      thisyeardays: responceData.thisYearDays,
      lastyearcanesupply: responceData.lastYearCanesupply,
      thisyearcanesupply: responceData.thisYearCanesupply,
      lastyearmolassesqtls: responceData.lastYearMolassesQtls,
      thisyearmolassesqtls: responceData.thisYearMolassesQtls,
      lastyearpermolassescane: responceData.lastYearPerMolassesCane,
      thisyearpermolassescane: responceData.thisYearPerMolassesCane,
      frombroadgauge: responceData.fromBroadGauge,
      frommetergauge: responceData.fromMeterGauge,
      tochemical: responceData.toChemical,
      suppliestoother: responceData.suppliesToOther,
      closingbalance: responceData.closingBalance,
      molassesloadingmode: this.molasismode,
      wastage: 0,
      stockindetails: responceData.mf9StockDetail,
    });
  }
  addFormGroupTable(data?: any): FormGroup {
    return this.formBuilder.group({
      tankType: data && data.tankType || '',
      coveredNoOfTank: data && data.coveredNoOfTank || '',
      coveredCapacity: data && data.coveredCapacity || '',
      uncoveredNoOfTank: data && data.uncoveredNoOfTank || '',
      uncoveredCapacity: data && data.uncoveredCapacity || '',
    });
  }
  public addEmptyCtrl(): void {
    (this.mf9FormGroup.get('stockindetails') as FormArray).push(this.addFormGroupTable());
  }
  public getPresFormLength(): number {
    return (this.mf9FormGroup.get('stockindetails') as FormArray).length;
  }
  addNewRow(rowId) {
    this.addEmptyCtrl();
  }
  public removeSelectedRow(idx: number) {
    (this.mf9FormGroup.get('stockindetails') as FormArray).removeAt(idx);
  }
  preview(form) {
    sessionStorage.setItem('formdata', form);
    this.router.navigate(['/supplychainmanagement/sugarmills/mf9/preview']);
  }
  
}
