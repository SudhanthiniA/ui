import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Mf9Service } from '@app/services';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-viewmf9fortnight',
  templateUrl: './viewmf9fortnight.component.html',
  styleUrls: ['./viewmf9fortnight.component.scss']
})
export class Viewmf9fortnightComponent implements OnInit {
  mf9FormGroup: FormGroup;
  sugarmillname = 'Triveni Engineering & Industries Ltd';
  sugarmilladdress =  'Sugarmill Unit,Milak Narayanpur,P.O Dadiyal Tehsil,Tanda Badi,Dist-Rampur,UP-244925';
  generalmanager =  'Mr.Bhupender Singh'
  viewId: any;
  mf9Data: any;
  workflowobj: any;
  addedit: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mf9Service: Mf9Service,
    private formBuilder: FormBuilder,
    private WorkflowcofigService: WorkflowcofigService,
  ) {
  }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }
  setData(id) {
    this.mf9Service.getMf9FortnightById(id).subscribe((responceData: any) => {
      this.mf9Data = responceData.data;
      console.log(this.mf9Data, '9090909090909090909')
      // this.mf9FormGroup.patchValue({
      //   thisyearstartdate: this.datepipe.transform(responceData.data.thisYearStartDate, 'dd-MM-yyyy'),
      //   thisyearenddate: this.datepipe.transform(responceData.data.thisYearEndDate, 'dd-MM-yyyy'),
      //   lastyeardays: responceData.data.lastYearDays,
      //   thisyeardays: responceData.data.thisYearDays,
      //   lastyearcanesupply: '8119639.14',
      //   thisyearcanesupply: responceData.data.thisYearCanesupply,
      //   lastyearmolassesqtls: '481604.50',
      //   thisyearmolassesqtls: responceData.data.thisYearMolassesQtls,
      //   lastyearpermolassescane: '5.93%',
      //   thisyearpermolassescane: responceData.data.thisYearPerMolassesCane,
      //   frombroadgauge: responceData.data.fromBroadGauge,
      //   frommetergauge: responceData.data.fromMeterGauge,
      //   tochemical: 481604.20,
      //   suppliestoother: 0,
      //   closingbalance: 0,
      //   molassesloadingmode: responceData.data.molassesLoadingMode === 'Manual' ? 'false' : 'true',
      //   wastage: 0,
      //   stockindetails : responceData.data.mf9StockDetail,
      // });
      this.WorkflowcofigService.getworkflowbydesignation('SUGAR_MILL', 'SUGARMILL_MF9PRODUCTION').subscribe((resp: any) => {
        this.workflowobj = resp.content;
      });
    })
  }

  buildPrescriptionFormGrp() {
    this.mf9FormGroup = this.formBuilder.group({
      sugarmillname: 'Triveni Engineering & Industries Ltd',
      sugarmilladdress: 'Sugarmill Unit,Milak Narayanpur,P.O Dadiyal Tehsil,Tanda Badi,Dist-Rampur,UP-244925',
      generalmanager: 'Mr.Bhupender Singh',
      lastyear: '',
      thisyear: '',
      lastyearstartdate: '',
      lastyearenddate: '',
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

  backtoEdit(){
    let id=this.mf9Data.id
    if(this.mf9Data){
      this.router.navigate(['/supplychainmanagement/sugarmills/mf9fortnight/list'])
    }else if(id){
      this.router.navigate(['/supplychainmanagement/sugarmills/mf9fortnight/edit/'+id])
    }
    else{
      this.router.navigate(['/supplychainmanagement/sugarmills/mf9fortnight/add'])
    }
  }
}
