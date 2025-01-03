import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, Mf9Service, ProductTypeService, PreviewService } from '@app/services';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MasterapiService } from '@app/services';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';
import * as moment from 'moment'
@Component({
  selector: 'app-addeditmf9fortnight',
  templateUrl: './addeditmf9fortnight.component.html',
  styleUrls: ['./addeditmf9fortnight.component.scss']
})
export class Addeditmf9fortnightComponent implements OnInit {

  mf9FormGroup: FormGroup;
  editId: any = null;
  tanks: any;
  data = 'Enter MF9 Details';
  formSubmitted: boolean;
  producttypeData: any;
  previousdata: any;
  sugarMillName = "Triveni Engineering & Industries Ltd";
  sugarMillAddress = "Sugarmill Unit,Milak Narayanpur,P.O Dadiyal Tehsil,Tanda Badi,Dist-Rampur,UP-244925";
  generalManager = 'Ashish';
  tankGradeList: any;
  minDate: any;
  workflowobj: any;
  mf9data: any;
  rejectid: any;
  isMolassesType = false;
  isCaneSyrup = false;
  isCaneJuice = false;
  isCHeavy = false;
  isBHeavy = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private datepipe: DatePipe,
    private Mf9Service: Mf9Service,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private previews: PreviewService,
    private masterapiService: MasterapiService,
    private productService: ProductTypeService,
    private WorkflowcofigService: WorkflowcofigService
  ) {
  }

  ngOnInit() {
    this.workflow();
    this.getAllMolassesType();
    this.buildPrescriptionFormGrp();
    this.gettank();   
    this.getLicensee();
    this.getmf9details();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
      else if (this.previews.setData) {
        this.mf9FormGroup.patchValue(this.previews.setData);
        this.mf9FormGroup.get('fortnightStartDate').setValue(this.previews.setData.fortnightStartDate);
        //  (this.mf9FormGroup.get('mf9StockDetail') as FormArray).push(this.addFormGroupTable(this.previews.setData.mf9StockDetail));
        this.previews.setData.mf9StockDetail.forEach((ele) => {
          (this.mf9FormGroup.get('mf9StockDetail') as FormArray).push(this.addFormGroupTable(ele));
        })
        this.masterapiService.get('molassesType/getAllMolassesType').then((responceData: any) => {
          if (responceData.status === 's') {
            this.tankGradeList = responceData.data;
          }
        });
        this.mf9FormGroup.patchValue({
          molassesLoadingMode: this.previews.setData.molassesLoadingMode === 'Manual' ? 'false' : 'true',

        })

      }
    });
    this.mf9FormGroup.get('closingBalance').setValue(this.mf9FormGroup.get('toChemical').value + this.mf9FormGroup.get('suppliesToOther').value + this.mf9FormGroup.get('toDistilleries').value)
  }

  workflow() {
    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer)
    if (iscustomer === "false") {
      this.WorkflowcofigService.getworkflowbydesignation('SUGAR_MILL', 'SUGARMILL_MF9PRODUCTION').subscribe((resp: any) => {
        this.workflowobj = resp.content
        if (this.workflowobj && this.workflowobj.isEditable == true) {
          this.mf9FormGroup.controls['fortnightStartDate'].disable();
          this.mf9FormGroup.controls['fortnightEndDate'].disable();
          this.mf9FormGroup.controls['thisYearCanesupply'].disable();
          this.mf9FormGroup.controls['productTypeId'].disable();
          this.mf9FormGroup.controls['molassesId'].disable();
          this.mf9FormGroup.controls['foreCastQtyCHeavy'].disable();
          this.mf9FormGroup.controls['foreCastPercentageCHeavy'].disable();
          this.mf9FormGroup.controls['foreCastQtyBHeavy'].disable();
          this.mf9FormGroup.controls['foreCastPercentageBHeavy'].disable();
          this.mf9FormGroup.controls['foreCastQtyCaneJuice'].disable();
          this.mf9FormGroup.controls['foreCastQtyCaneSyrup'].disable();
          this.mf9FormGroup.controls['foreCastPercentageCaneSyrup'].disable();
        }
      });
    }
  }

  setData(id) {
    this.Mf9Service.getMf9FortnightById(id).subscribe((responceData: any) => {
      this.mf9data = responceData.data
      this.mf9FormGroup.patchValue({
        mplassesType: responceData.data.mplassesType,
        sugarMillName: responceData.data.sugarMillName,
        sugarMillAddress: responceData.data.sugarMillAddress,
        generalManager: responceData.data.generalManager,
        lastYear: responceData.data.lastYear,
        thisYear: responceData.data.thisYear,
        lastYearStartDate: this.datepipe.transform(responceData.data.lastYearStartDate, 'yyyy-MM-dd'),
        lastYearEndDate: this.datepipe.transform(responceData.data.lastYearEndDate, 'yyyy-MM-dd'),
        fortnightStartDate: this.datepipe.transform(responceData.data.fortnightStartDate, 'yyyy-MM-dd'),
        fortnightEndDate: this.datepipe.transform(responceData.data.fortnightEndDate, 'yyyy-MM-dd'),
        lastYearDays: responceData.data.lastYearDays,
        thisYearDays: responceData.data.thisYearDays,
        lastYearCanesupply: responceData.data.lastYearCanesupply,
        thisYearCanesupply: responceData.data.thisYearCanesupply,
        lastYearMolassesQtls: responceData.data.lastYearMolassesQtls,
        thisYearMolassesQtls: responceData.data.thisYearMolassesQtls,
        // lastYearPerMolassesCane: responceData.data.lastYearPerMolassesCane,
        thisYearPerMolassesCane: responceData.data.thisYearPerMolassesCane,
        fromBroadGauge: responceData.data.fromBroadGauge,
        fromMeterGauge: responceData.data.fromMeterGauge,
        mplassestype: responceData.data.mplassestype,
        toChemical: responceData.data.toChemical,
        productTypeId: responceData.data.productTypeId || responceData.data.productType,
        molassesId: responceData.data.molassesId,
        suppliesToOther: responceData.data.suppliesToOther,
        closingBalance: responceData.data.closingBalance,
        molassesLoadingMode: responceData.data.molassesLoadingMode === 'Manual' ? 'false' : 'true',
        wastage: 0,
        foreCastQtyCHeavy: responceData.data.foreCastQtyCHeavy,
        foreCastQtyBHeavy: responceData.data.foreCastQtyBHeavy,
        foreCastQtyCaneJuice: responceData.data.foreCastQtyCaneJuice,
        foreCastQtyCaneSyrup: responceData.data.foreCastQtyCaneSyrup,
        foreCastPercentageBHeavy: responceData.data.foreCastPercentageBHeavy,
        foreCastPercentageCHeavy: responceData.data.foreCastPercentageCHeavy,
        foreCastPercentageCaneJuice: responceData.data.foreCastPercentageCaneJuice,
        foreCastPercentageCaneSyrup: responceData.data.foreCastPercentageCaneSyrup,
      });
      // this.tanksgrdesss(this.mf9FormGroup.get('productTypeId').value)
      this.molassesTypes(this.mf9FormGroup.get('molassesId').value)
      // this.getMolassesType(this.mf9FormGroup.get('molassesId').value)
      responceData.data.stockTankTypeList.forEach((element: any, idx: number) => {
        (this.mf9FormGroup.get('mf9StockDetail') as FormArray).removeAt(idx);
        (this.mf9FormGroup.get('mf9StockDetail') as FormArray).push(this.addFormGroupTable(element));
        // this.addEmptyCtrl();
      });
    })
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
      lastYear: '2018-2019',
      thisYear: '',
      lastYearStartDate: '2020-11-01',
      lastYearEndDate: '2020-10-31',
      fortnightStartDate: ['', Validators.required],
      fortnightEndDate: ['', Validators.required],
      lastYearDays: '365',
      thisYearDays: ['365', Validators.required],
      lastYearCanesupply: '8119639.14',
      thisYearCanesupply: [''],
      productTypeId: ['', Validators.required],
      lastYearMolassesQtls: '481604.50',
      thisYearMolassesQtls: [''],
      // lastYearPerMolassesCane: '5.93%',
      thisYearPerMolassesCane: [''],
      frompipeline: [''],
      fromtankers: [''],
      fromBroadGauge: ['', Validators.required],
      fromMeterGauge: ['', Validators.required],
      actualUnResMolasses: '',
      producedUnResMolasses: '',
      actualResMolasses: '',
      producedResMolasses: '',
      toChemical: 481604.20,
      toDistilleries: 12453.90,
      suppliesToOther: 10.0,
      closingBalance: 0,
      molassesLoadingMode: ['true', Validators.required],
      foreCastQtyCHeavy: [''],
      foreCastQtyBHeavy: [''],
      foreCastQtyCaneJuice: [''],
      foreCastQtyCaneSyrup: [''],
      foreCastPercentageBHeavy: [''],
      foreCastPercentageCHeavy: [''],
      foreCastPercentageCaneJuice: [''],
      foreCastPercentageCaneSyrup: [''],
      // lastYearPercentageCaneJuice: [''],
      "lastYearPercentageBHeavy": '',
      "lastYearPercentageCHeavy": '',
      "lastYearPercentageCaneJuice": '',
      "lastYearPercentageCaneSyrup": '',
      "lastYearQtyBHeavy": '',
      "lastYearQtyCHeavy": '',
      "lastYearQtyCaneJuice": '',
      "lastYearQtyCaneSyrup": '',
      // percentsyrup: [''],
      molassesId: '',
      gradeCode: '',
      gradeValue: '',
      productTypeCode: '',
      productTypeValue: '',
      mf9Forecast: 'FORTNIGHT',
      modifiedBy: 0,
      wastage: '',
      modifiedDate: new Date(),
      createdDate: new Date(),
      createdBy: 0,
      mf9StockDetail: this.formBuilder.array([
      ])
    });
  }

  addFormGroupTable(data?: any): FormGroup {
    return this.formBuilder.group({
      tankTypeId: data && data.tankType || data && data.tankTypeId || 0,
      tankname: data && data.tankname || data && data.tankTypeName || data && data.tankname || 0,
      coveredNoOfTank: data && data.coveredNoOfTank || data && data.noOfTanks || 0,
      coveredCapacity: data && data.coveredCapacity || data && data.capacity || 0,
      uncoveredNoOfTank: data && data.uncoveredNoOfTank || data && data.tankTypeId || 0,
      uncoveredCapacity: data && data.uncoveredCapacity || data && data.uncoveredCapacity || 0,
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

      this.previews.setData.molassesLoadingMode == 'true' ?
        this.previews.setData.molassesLoadingMode = 'Mechanical' : this.previews.setData.molassesLoadingMode = 'Manual';

      console.log('preview ===>', form)

      this.router.navigate(['/supplychainmanagement/sugarmills/mf9fortnight/preview']);
    }
  }

  addstock(form, status) {
    console.log(form)
    this.formSubmitted = false;
    if (this.mf9FormGroup.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      const modalRef = this.modalService.open(CommonPopupComponent);
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
          postingdata[`status`] = status;
          // postingdata[`level`] = (this.workflowobj && this.workflowobj.level) ? this.workflowobj.level : 'Level 1';
          // postingdata[`sentBackLevels`] = (this.workflowobj && this.workflowobj.sendback) ? this.workflowobj.sendback : '';
          // postingdata[`event`] = eventt;
          // postingdata[`isDigitalSignature`] = true;
          delete postingdata.frompipeline;
          delete postingdata.fromtankers;
          delete postingdata.lastYearMolassesQtls;
          // delete postingdata.caneCrushed;
          delete postingdata.molassesId;
          delete postingdata.productTypeId;
          delete postingdata.thisYearDays;
          delete postingdata.thisYearMolassesQtls;
          delete postingdata.thisYearPerMolassesCane;

          if (this.editId) {
            let storedata = [];
            const stockdetails = postingdata.mf9StockDetail;
            storedata = stockdetails.filter((e) => {
              return e.tankTypeId !== '';
            });
            // postingdata[`mf9StockDetail`] = storedata;
            delete postingdata.mf9StockDetail;
            postingdata[`id`] = +(this.editId);
            postingdata[`applicationNumber`] = this.mf9data.applicationNumber
            postingdata.molassesLoadingMode == 'true' ?
              postingdata.molassesLoadingMode = 'Mechanical' : postingdata.molassesLoadingMode = 'Manual';
            // postingdata[`status`] = status;
            this.Mf9Service.addMf9FortNight(postingdata).subscribe((responseData: any) => {
              this.handleResponse(responseData)
            })
          } else {
            let storedata = [];
            const stockdetails = postingdata.mf9StockDetail;
            storedata = stockdetails.filter((e) => {
              return e.tankTypeId !== '';
            });
            // postingdata[`mf9StockDetail`] = storedata;
            delete postingdata.mf9StockDetail;
            postingdata.molassesLoadingMode == 'true' ?
              postingdata.molassesLoadingMode = 'Mechanical' : postingdata.molassesLoadingMode = 'Manual';

            console.log(postingdata);
            this.Mf9Service.addMf9FortNight(postingdata).subscribe((responceData: any) => {
              this.handleResponse(responceData)
            })
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
      this.router.navigate(['/supplychainmanagement/sugarmills/mf9fortnight/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }
  getvalue(form) {
    if (form.get('thisYearCanesupply').value && form.get('thisYearMolassesQtls').value) {
      form.get('thisYearPerMolassesCane').setValue(form.get('thisYearMolassesQtls').value * 100 / form.get('thisYearCanesupply').value)
    } else {
      form.get('thisYearPerMolassesCane').setValue(0)
    }
  }

  getAllMolassesType(){
    this.masterapiService.get('molassesType/getAllMolassesType').then((responceData: any) => {
      if (responceData.status === 's') {
        this.tankGradeList = responceData.data;
      }
    });
  }

  molassesTypes(event, events?: any) {
    this.getAllMolassesType();
    this.tanksgrdesss(this.mf9FormGroup.get('productTypeId').value)
    this.getMolassesType(this.mf9FormGroup.get('molassesId').value)

    this.Mf9Service.gettanktypes(event, events).subscribe((resp: any) => {
      (this.mf9FormGroup.get('mf9StockDetail') as FormArray).clear()
      resp.data.forEach((x: any) => {
        let data
        if (x.converTypeName == 'Covered') {
          data = {
            tankType: x && x.tankTypeId || '',
            tankname: x && x.tankTypeName || '',
            coveredNoOfTank: x && x.noOfTanks || '',
            coveredCapacity: x && x.capacity || '',
            uncoveredNoOfTank: '',
            uncoveredCapacity: '',
          };
          (this.mf9FormGroup.get('mf9StockDetail') as FormArray).push(this.addFormGroupTable(data));
        } else {
          const findobj: any = (this.mf9FormGroup.get('mf9StockDetail') as FormArray).controls.find((element: any) => {
            return element.value.tankTypeId == x.tankTypeId
          });

          if (findobj) {
            findobj.get('uncoveredNoOfTank').setValue(x.noOfTanks)
            findobj.get('uncoveredCapacity').setValue(x.capacity)
          } else {
            data = {
              tankType: x && x.tankTypeId || '',
              tankname: x && x.tankTypeName || '',
              coveredNoOfTank: '',
              coveredCapacity: '',
              uncoveredNoOfTank: x && x.noOfTanks || '',
              uncoveredCapacity: x && x.capacity || '',
            };
            (this.mf9FormGroup.get('mf9StockDetail') as FormArray).push(this.addFormGroupTable(data));
          }
        }

      })
    })

  }

  tanksgrdesss(Id) {
    const productObj = this.producttypeData.find((x: any) => { return x.id == Id });
    if (productObj.name == 'Molasses') {
      this.isMolassesType = true;
      this.isCaneJuice = false;
      this.isCaneSyrup = false;
    } else if (productObj.name == 'Cane Syrup') {
      this.isMolassesType = false;
      this.isCaneJuice = false;
      this.isCaneSyrup = true;
    } else {
      this.isMolassesType = false;
      this.isCaneJuice = true;
      this.isCaneSyrup = false;
    }
  }

  getMolassesType(Id) {
    const molassesObj = this.tankGradeList.find((x: any) => { return x.id == Id });
    this.mf9FormGroup.patchValue({
      gradeCode: molassesObj.code,
      gradeValue: molassesObj.name
    })
    const productId = this.mf9FormGroup.get('productTypeId').value
    const productObj = this.producttypeData.find((x: any) => { return x.id == productId });
    this.mf9FormGroup.patchValue({
      productTypeCode: productObj.productCode,
      productTypeValue: productObj.name
    })
    if (productObj.name == 'Molasses') {
      if (molassesObj.name == 'C-Heavy') {
        this.isCHeavy = true;
        this.isBHeavy = false;
      } else {
        this.isCHeavy = false;
        this.isBHeavy = true;
      }
    } else {
      this.isCHeavy = false;
      this.isBHeavy = false;
    }
  }

  getLicensee() {
    this.productService.allProducts().subscribe((responceData: any) => {
      this.producttypeData = responceData.data;
    });
  }

  getmf9details() {
    this.Mf9Service.getmf9Forecastdetails().subscribe((resp: any) => {
      if (resp.status = 's') {
        this.previousdata = resp.data;
        console.log("preee", this.previousdata);

        console.log(moment(this.previousdata.previousDispDetails.fortnightStartDate).format('yyyy-MM-DD'))
        this.minDate = moment(this.previousdata.previousDispDetails.fortnightStartDate).format('yyyy-MM-DD')
        this.mf9FormGroup.patchValue({
          "lastYear": this.previousdata.lastYear,
          "thisYear": this.previousdata.thisYear,
          thisYearStartDate: this.previousdata.thisYearStartDate,
          thisYearEndDate: this.previousdata.thisYearEndDate,
          "lastYearCanesupply": this.previousdata && this.previousdata.caneCrushed ? this.previousdata.caneCrushed : 0,
          "lastYearDays": this.previousdata && this.previousdata.lastYearDays ? this.previousdata.lastYearDays : 0,
          "lastYearEndDate": this.previousdata.lastYearEndDate,
          "lastYearPercentageBHeavy": this.previousdata && this.previousdata.lastYearPercentageBHeavy ? this.previousdata.lastYearPercentageBHeavy : 0,
          "lastYearPercentageCHeavy": this.previousdata && this.previousdata.lastYearPercentageCHeavy ? this.previousdata.lastYearPercentageCHeavy : 0,
          "lastYearPercentageCaneJuice": this.previousdata && this.previousdata.lastYearPercentageCaneJuice ? this.previousdata.lastYearPercentageCaneJuice : 0,
          "lastYearPercentageCaneSyrup": this.previousdata && this.previousdata.lastYearPercentageCaneSyrup ? this.previousdata.lastYearPercentageCaneSyrup : 0,
          "lastYearQtyBHeavy": this.previousdata && this.previousdata.lastYearQtyBHeavy ? this.previousdata.lastYearQtyBHeavy : 0,
          "lastYearQtyCHeavy": this.previousdata && this.previousdata.lastYearQtyCHeavy ? this.previousdata.lastYearQtyCHeavy : 0,
          "lastYearQtyCaneJuice": this.previousdata && this.previousdata.lastYearQtyCaneJuice ? this.previousdata.lastYearQtyCaneJuice : 0,
          "lastYearQtyCaneSyrup": this.previousdata && this.previousdata.lastYearQtyCaneSyrup ? this.previousdata.lastYearQtyCaneSyrup : 0,
          "lastYearStartDate": this.datepipe.transform(this.previousdata.lastYearStartDate, 'yyyy-MM-dd'),
          actualUnResMolasses: this.previousdata && this.previousdata.actualUnResMolasses ? this.previousdata.actualUnResMolasses : 0,
          producedUnResMolasses: this.previousdata && this.previousdata.producedUnResMolasses ? this.previousdata.producedUnResMolasses : 0,
          actualResMolasses: this.previousdata && this.previousdata.actualResMolasses ? this.previousdata.actualResMolasses : 0,
          producedResMolasses: this.previousdata && this.previousdata.producedResMolasses ? this.previousdata.producedResMolasses : 0,
          toChemical: this.previousdata && this.previousdata.toChemical ? this.previousdata.toChemical : 0,
          toDistilleries: this.previousdata && this.previousdata.toDistilleries ? this.previousdata.toDistilleries : 0,
          suppliesToOther: this.previousdata && this.previousdata.suppliesToOther ? this.previousdata.suppliesToOther : 0,
          closingBalance: this.previousdata && this.previousdata.closingBalance ? this.previousdata.closingBalance : 0,
          wastage: this.previousdata && this.previousdata.wastage ? this.previousdata.wastage : 0,
          fromBroadGauge: (this.previousdata && this.previousdata.previousDispDetails && this.previousdata.previousDispDetails.transportMode == 6) ? this.previousdata.previousDispDetails.qty : 0,
          fromMeterGauge: (this.previousdata && this.previousdata.previousDispDetails && this.previousdata.previousDispDetails.transportMode == 7) ? this.previousdata.previousDispDetails.qty : 0,
          // fortnightStartDate: (this.previousdata &&this.previousdata.previousDispDetails && this.previousdata.previousDispDetails.fortnightStartDate) ?moment(this.previousdata.previousDispDetails.fortnightStartDate).format('yyyy-MM-DD'):new Date()
        })
        // this.previousdata.stockTankTypeList.forEach((element: any, idx: number) => {
        //   (this.mf9FormGroup.get('mf9StockDetail') as FormArray).removeAt(idx);
        //   (this.mf9FormGroup.get('mf9StockDetail') as FormArray).push(this.addFormGroupTable(element));
        //   // this.addEmptyCtrl();
        // });
        console.log(this.previousdata, 'previous data')
      }
    })
  }

  getnumberofdays(start, end) {
    if (start && end) {
      start = new Date(start)
      end = new Date(end)

      if (start.getMonth() == end.getMonth()) {
        const date = Math.floor((Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) - Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) / (1000 * 60 * 60 * 24));;
        this.mf9FormGroup.patchValue({
          thisYearDays: date
        })
        return date
      } else if (start.getMonth() != end.getMonth()) {
        let data = Math.floor((Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) - Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) / (1000 * 60 * 60 * 24));
        this.mf9FormGroup.patchValue({
          thisYearDays: data
        });
        return data
      }
    } else {
      this.mf9FormGroup.patchValue({
        thisYearDays: 0
      })
      return 0
    }
  }
}
