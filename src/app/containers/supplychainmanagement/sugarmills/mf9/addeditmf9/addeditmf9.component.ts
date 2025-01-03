import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, Mf9Service, PreviewService, MasterapiService } from '@app/services';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';


@Component({
  selector: 'app-addeditmf9',
  templateUrl: './addeditmf9.component.html',
  styleUrls: ['./addeditmf9.component.scss']
})
export class Addeditmf9Component implements OnInit {
  mf9FormGroup: FormGroup; 
  editId: any = null;
  tanks: any;
  data = 'Enter MF9 Details';
  formSubmitted: boolean;
  previousdata: any;
  sugarMillName = 'Triveni Engineering & Industries Ltd';
  sugarMillAddress = 'Sugarmill Unit,Milak Narayanpur,P.O Dadiyal Tehsil,Tanda Badi,Dist-Rampur,UP-244925';
  generalManager = 'Ashish';
  workflowobj: any;
  rejectid: any;
  mf9data: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private mf9Service: Mf9Service,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private previews: PreviewService,
    private alert: AlertService,
    private masterapiService: MasterapiService,
    private WorkflowcofigService: WorkflowcofigService
  ) { }

  ngOnInit() {
    this.workflow();
    this.buildPrescriptionFormGrp();
    this.gettank();
    this.getmf9details();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else if (this.previews.setData) {
        this.mf9FormGroup.patchValue(this.previews.setData);
      }
    });

    const toChemical = this.mf9FormGroup.get('toChemical').value;
    const suppliesToOther = this.mf9FormGroup.get('suppliesToOther').value;
    const toDistellery = this.mf9FormGroup.get('toDistellery').value;
    this.mf9FormGroup.get('closingBalance').setValue( toChemical + suppliesToOther + toDistellery );
  }

  workflow() {
    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer)
     if(iscustomer==="false"){
      this.WorkflowcofigService.getworkflowbydesignation('SUGAR_MILL', 'SUGARMILL_MF9PRODUCTION').subscribe((resp: any) => {
        this.workflowobj = resp.content
        if (this.workflowobj && this.workflowobj.isEditable == true) {
          this.mf9FormGroup.controls['thisYearCanesupply'].disable();
          this.mf9FormGroup.controls['molassesLoadingMode'].disable();
          this.mf9FormGroup.controls['foreCastPercentageCaneSyrup'].disable();
          this.mf9FormGroup.controls['foreCastQtyCHeavy'].disable();
          this.mf9FormGroup.controls['foreCastPercentageCHeavy'].disable();
          this.mf9FormGroup.controls['foreCastQtyBHeavy'].disable();
          this.mf9FormGroup.controls['foreCastPercentageBHeavy'].disable();
          this.mf9FormGroup.controls['foreCastQtyCaneJuice'].disable();
          this.mf9FormGroup.controls['foreCastPercentageCaneJuice'].disable();
          this.mf9FormGroup.controls['foreCastQtyCaneSyrup'].disable();
          }
      });
    }
  }

  setData(id) {

    this.mf9Service.getMf9ById(id).subscribe((responceData: any) => {
    this.mf9data = responceData.data,
      this.sugarMillName = 
          (responceData.data &&
          responceData.data.sugarMillReg &&
          responceData.data.sugarMillReg.sugarMillName)
         || this.sugarMillName;
      this.sugarMillAddress = responceData.data &&
        responceData.data.sugarMillReg &&
        responceData.data.sugarMillReg.headOfficeAddress || this.sugarMillAddress;
      this.generalManager = 'Ashish';
      this.mf9FormGroup.patchValue({
        mplassesType: responceData.data.mplassesType,
        sugarMillName: responceData.data.sugarMillName,
        sugarMillAddress: responceData.data.sugarMillAddress,
        generalManager: responceData.data.generalManager,
        lastYear: responceData.data.lastYear,
        thisYear: responceData.data.thisYear,
        lastYearStartDate: this.datepipe.transform(responceData.data.lastYearStartDate, 'yyyy-MM-dd'),
        lastYearEndDate: this.datepipe.transform(responceData.data.lastYearEndDate, 'yyyy-MM-dd'),
        thisYearStartDate: this.datepipe.transform(responceData.data.thisYearStartDate, 'yyyy-MM-dd'),
        thisYearEndDate: this.datepipe.transform(responceData.data.thisYearEndDate, 'yyyy-MM-dd'),
        lastYearDays: responceData.data.lastYearDays,
        thisYearDays: responceData.data.thisYearDays,
        lastYearCanesupply: responceData.data.lastYearCanesupply,
        thisYearCanesupply: responceData.data.thisYearCanesupply,
        lastYearMolassesQtls: responceData.data.lastYearMolassesQtls,
        thisYearMolassesQtls: responceData.data.thisYearMolassesQtls,
        lastYearPerMolassesCane: responceData.data.lastYearPerMolassesCane,
        thisYearPerMolassesCane: responceData.data.thisYearPerMolassesCane,
        frompipeline: responceData.data.fromBroadGauge,
        fromtankers: responceData.data.fromMeterGauge,
        mplassestype: responceData.data.mplassestype,
        foreCastQtyCHeavy: responceData.data.foreCastQtyCHeavy,
        foreCastQtyBHeavy: responceData.data.foreCastQtyBHeavy,
        foreCastQtyCaneJuice: responceData.data.foreCastQtyCaneJuice,
        foreCastQtyCaneSyrup: responceData.data.foreCastQtyCaneSyrup,
        foreCastPercentageCHeavy: responceData.data.foreCastPercentageCHeavy,
        foreCastPercentageBHeavy: responceData.data.foreCastPercentageBHeavy,
        foreCastPercentageCaneSyrup: responceData.data.foreCastPercentageCaneSyrup,
        foreCastPercentageCaneJuice: responceData.data.foreCastPercentageCaneJuice,
        toChemical: responceData.data.toChemical,
        suppliesToOther: responceData.data.suppliesToOther,
        closingBalance: responceData.data.closingBalance,
        molassesLoadingMode: responceData.data.molassesLoadingMode === 'Manual' ? 'false' : 'true',
        wastage: 0,
      });
      responceData.data.mf9StockDetail.forEach((element: any, idx: number) => {
        (this.mf9FormGroup.get('mf9StockDetail') as FormArray).removeAt(idx);
        (this.mf9FormGroup.get('mf9StockDetail') as FormArray).push(this.addFormGroupTable(element));
        this.addEmptyCtrl();
      });
    });
  }
  gettank() {
    this.masterapiService.get('tankType/getAllTankType').then((responceData: any) => {
      this.tanks = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  buildPrescriptionFormGrp() {
    this.mf9FormGroup = this.formBuilder.group({
      lastYear: '2019-2020',
      thisYear: '2020-2021',
      lastYearStartDate: '2020-11-01',
      lastYearEndDate: '2020-10-31',
      thisYearStartDate: ['2020-11-01', Validators.required],
      thisYearEndDate: ['', Validators.required],
      lastYearDays: '365',
      foreCastPercentageCHeavy: ['', Validators.required],
      foreCastPercentageBHeavy: ['', Validators.required],
      foreCastPercentageCaneSyrup: ['', Validators.required],
      foreCastPercentageCaneJuice: ['', Validators.required],
      thisYearDays: ['365', Validators.required],
      caneCrushed: '8119639.14',
      thisYearCanesupply: ['', Validators.required],
      frompipeline: [''],
      fromtankers: [''],
      fromBroadGauge: 0,
      fromMeterGauge: 0,
      actualUnResMolasses: '',
      producedUnResMolasses: '',
      actualResMolasses: '',
      producedResMolasses: '',
      toChemical: 481604.20,
      toDistellery: 12453.90,
      suppliesToOther: 10.0,
      closingBalance: 0,
      foreCastQtyCHeavy: ['', Validators.required],
      foreCastQtyBHeavy: ['', Validators.required],
      foreCastQtyCaneJuice: ['', Validators.required],
      foreCastQtyCaneSyrup: ['', Validators.required],
      molassesLoadingMode: ['true', Validators.required],
      lastYearPercentageBHeavy: '',
      lastYearPercentageCHeavy: '',
      lastYearPercentageCaneJuice: '',
      lastYearPercentageCaneSyrup: '',
      lastYearQtyBHeavy: '',
      lastYearQtyCHeavy: '',
      lastYearQtyCaneJuice: '',
      lastYearQtyCaneSyrup: '',
      mf9Forecast: 'YEARLY',
      updatedBy: 'Sunil',
      wastage: '',
      updatedOn: new Date(),
      mf9StockDetail: this.formBuilder.array([ ])
    });
  }

  addFormGroupTable(data?: any): FormGroup {
    return this.formBuilder.group({
      tankTypeId: data && data.tankType || '',
      tankname: data && data.tankname || '',
      coveredNoOfTank: data && data.coveredNoOfTank || 0,
      coveredCapacity: data && data.coveredCapacity || 0,
      uncoveredNoOfTank: data && data.uncoveredNoOfTank || 0,
      uncoveredCapacity: data && data.uncoveredCapacity || 0,
    });
  }

  public addEmptyCtrl(): void {
    (this.mf9FormGroup.get('mf9StockDetail') as FormArray).push(this.addFormGroupTable());
  }

  public getPresFormLength(): number {
    return (this.mf9FormGroup.get('mf9StockDetail') as FormArray).length;
  }

  addNewRow(rowId) {
    this.addEmptyCtrl();
  }

  public removeSelectedRow(idx: number) {
    (this.mf9FormGroup.get('mf9StockDetail') as FormArray).removeAt(idx);
  }

  preview(form) {
    this.formSubmitted = false;
    if (this.mf9FormGroup.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      this.previews.setData = form;
      this.router.navigate(['/supplychainmanagement/sugarmills/mf9/preview']);
    }
  }

  addstock(form, status) {
    this.formSubmitted = false;
    if (this.mf9FormGroup.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result);
      modalRef.result.then(respData => {
        if (respData) {

          const postingdata = form.value;
          let eventt;
          if (status == 'SUBMITTED' || status == 'DRAFT') {
            if ((this.mf9data && this.mf9data.status) == 'SENDBACK') {
              eventt = 'SENDBACK'
            } else {
              eventt = "INITIATE"
            }
          } else if (status == 'APPROVED') {
            eventt = "APPROVED"
          } else if (status == 'SENDBACK') {
            eventt = "SENDBACK"
          } else {
            eventt = "REJECTED"
          }
          postingdata[`lastYearStartDate`] = this.datepipe.transform(this.mf9FormGroup.get('lastYearStartDate').value, 'yyyy-MM-dd');
          postingdata[`status`] = status;
          postingdata[`level`] = (this.workflowobj && this.workflowobj.level) ? this.workflowobj.level : 'Level 1';
          postingdata[`sentBackLevels`] = (this.workflowobj && this.workflowobj.sendback) ? this.workflowobj.sendback : '';
          postingdata[`event`] = eventt;
          postingdata[`isDigitalSignature`] = true

          if (this.editId) {
            let storedata = [];
            const stockdetails = postingdata.mf9StockDetail;
            storedata = stockdetails.filter((e) => {
              return e.tankTypeId !== '';
            });
            // postingdata[`mf9StockDetail`] = storedata;
            delete postingdata.mf9StockDetail;
            postingdata[`id`] = this.editId;
            postingdata[`applicationNumber`] = this.mf9data.applicationNumber
            postingdata.molassesLoadingMode == 'true' ?
              postingdata.molassesLoadingMode = 'Mechanical' : postingdata.molassesLoadingMode = 'Manual';
            // postingdata[`status`] = status;
            this.mf9Service.addMf9(postingdata).subscribe((responseData: any) => {
              this.handleResponse(responseData);
            });
          } else {
            let storedata = [];
            const stockdetails = postingdata.mf9StockDetail;
            // storedata = stockdetails.filter((e) => {
            //   return e.tankTypeId !== '';
            // });
            // postingdata[`mf9StockDetail`] = storedata;
            delete postingdata.mf9StockDetail;
            postingdata.molassesLoadingMode == 'true' ?
              postingdata.molassesLoadingMode = 'Mechanical' : postingdata.molassesLoadingMode = 'Manual';
            
            console.log(postingdata.lastYearStartDate);
            this.mf9Service.addMf9(postingdata).subscribe((responceData: any) => {
              this.handleResponse(responceData);
            });
          }
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }
  handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/sugarmills/mf9/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }
  getvalue(form) {
    if (form.get('thisYearCanesupply').value && form.get('thisYearMolassesQtls').value) {
      form.get('thisYearPerMolassesCane').setValue(form.get('thisYearMolassesQtls').value * 100 / form.get('thisYearCanesupply').value);
    } else {
      form.get('thisYearPerMolassesCane').setValue(0);
    }
  }

  getmf9details() {
    this.mf9Service.getmf9details().subscribe((resp: any) => {
      if (resp.status = 's') {
        this.previousdata = resp.data;
        // this.previousdata.lastYearEndDate = "2020-10-31",
        // this.previousdata.thisYearStartDate = "2020-11-01",
        // this.previousdata.lastYearEndDate = "2021-10-31",
        this.mf9FormGroup.patchValue({
          lastYear: this.previousdata.lastYear,
          // thisYearStartDate: this.previousdata.thisYearStartDate,
          thisYearEndDate: this.previousdata.thisYearEndDate,
          caneCrushed: this.previousdata && this.previousdata.caneCrushed ? this.previousdata.caneCrushed : 0,
          lastYearDays: this.previousdata && this.previousdata.lastYearDays ? this.previousdata.lastYearDays : 0,
          lastYearEndDate: this.previousdata.lastYearEndDate,
          lastYearPercentageBHeavy: this.previousdata && this.previousdata.lastYearPercentageBHeavy ? 
            this.previousdata.lastYearPercentageBHeavy : 0,
          lastYearPercentageCHeavy: this.previousdata && this.previousdata.lastYearPercentageCHeavy  ? 
            this.previousdata.lastYearPercentageCHeavy : 0,
          lastYearPercentageCaneJuice: this.previousdata && this.previousdata.lastYearPercentageCaneJuice ? 
            this.previousdata.lastYearPercentageCaneJuice : 0,
          lastYearPercentageCaneSyrup: this.previousdata && this.previousdata.lastYearPercentageCaneSyrup ? 
            this.previousdata.lastYearPercentageCaneSyrup : 0,
          lastYearQtyBHeavy: this.previousdata && this.previousdata.lastYearQtyBHeavy ? this.previousdata.lastYearQtyBHeavy : 0,
          lastYearQtyCHeavy: this.previousdata && this.previousdata.lastYearQtyCHeavy ? this.previousdata.lastYearQtyCHeavy : 0,
          lastYearQtyCaneJuice: this.previousdata && this.previousdata.lastYearQtyCaneJuice ? this.previousdata.lastYearQtyCaneJuice : 0,
          lastYearQtyCaneSyrup: this.previousdata && this.previousdata.lastYearQtyCaneSyrup ? this.previousdata.lastYearQtyCaneSyrup : 0,
          lastYearStartDate: this.datepipe.transform(this.previousdata.lastYearStartDate, 'yyyy-MM-dd'),
          actualUnResMolasses: this.previousdata && this.previousdata.actualUnResMolasses ? this.previousdata.actualUnResMolasses : 0,
          producedUnResMolasses: this.previousdata && this.previousdata.producedUnResMolasses ? this.previousdata.producedUnResMolasses : 0,
          actualResMolasses: this.previousdata && this.previousdata.actualResMolasses ? this.previousdata.actualResMolasses : 0,
          producedResMolasses: this.previousdata && this.previousdata.producedResMolasses ? this.previousdata.producedResMolasses : 0,
          toChemical: this.previousdata && this.previousdata.toChemical ? this.previousdata.toChemical : 0,
          toDistellery: this.previousdata && this.previousdata.toDistilleries ? this.previousdata.toDistilleries : 0,
          suppliesToOther: this.previousdata && this.previousdata.suppliesToOther ? this.previousdata.suppliesToOther : 0,
          closingBalance: this.previousdata && this.previousdata.closingBalance ? this.previousdata.closingBalance : 0,
          wastage: this.previousdata && this.previousdata.wastage ? this.previousdata.wastage : 0,
          frompipeline: (this.previousdata && this.previousdata.previousDispDetails && 
            this.previousdata.previousDispDetails.transportMode == 6) ? this.previousdata.previousDispDetails.qty : 0,
          fromtankers: (this.previousdata && this.previousdata.previousDispDetails && 
            this.previousdata.previousDispDetails.transportMode == 7) ? this.previousdata.previousDispDetails.qty : 0,
        });

        this.previousdata.stockTankTypeList.forEach((x: any) => {
       let data;
       if (x.converTypeName == 'Covered') {
           data = {
            tankType: x && x.tankTypeId || '',
            tankname: x && x.tankTypeName || '',
            coveredNoOfTank: x && x.noOfTanks || '',
            coveredCapacity: x && x.capacity || '',
            uncoveredNoOfTank:  '',
            uncoveredCapacity:  '',
          };
           (this.mf9FormGroup.get('mf9StockDetail') as FormArray).push(this.addFormGroupTable(data));
         } else {
          const findobj: any = (this.mf9FormGroup.get('mf9StockDetail') as FormArray).controls.find((element: any) => {
            return element.value.tankTypeId == x.tankTypeId;
            });

          if (findobj) {
             findobj.get('uncoveredNoOfTank').setValue(x.noOfTanks);
             findobj.get('uncoveredCapacity').setValue(x.capacity);
           } else {
             data = {
               tankType: x && x.tankTypeId || '',
               tankname: x && x.tankTypeName || '',
               coveredNoOfTank: '',
               coveredCapacity: '',
               uncoveredNoOfTank:  x && x.noOfTanks || '',
               uncoveredCapacity:  x && x.capacity || '',
             };
             (this.mf9FormGroup.get('mf9StockDetail') as FormArray).push(this.addFormGroupTable(data));
           }
         }

        });
        console.log(this.previousdata, 'previous data', this.mf9FormGroup);
      }
    });
  }
}

