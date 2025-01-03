import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { apiUrls } from '@appEnv/apiurls';
import * as moment from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import {
  AlertService,
  TransportGenService,
  MasterapiService,
  PreviewService,
  UtilsService,
  CommonService
} from '@app/services';

@Component({
  selector: 'app-addedittransportgeneration',
  templateUrl: './addedittransportgeneration.component.html',
  styleUrls: ['./addedittransportgeneration.component.scss']
})
export class AddedittransportgenerationComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  editId: any;
  formSubmitted = false;
  transportpassFormGroup: FormGroup;
  supplyType = [];
  deliveredList2: any;
  deliveredList: any;
  routeList: any;
  sugarmillNameList: any;
  method: any;
  vehiclenum: any;
  modeOfTransData: any;
  gradeList: any;
  tankList: any;
  tankDetails: any;
  summed = 0;
  lastIndex = -1;
  preQtyArr = [];
  qtyErr = [];
  qtyErrTag = [];
  gradeData: any;
  currentseason: any;
  qtyError = false;
  now = moment();
  minDate = moment(this.now, 'yyyy-MM-dd').subtract(1, 'days');
  maxDate = moment(this.now, 'yyyy-MM-dd');
  transportId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private datepipe: DatePipe,
    private transportGenService: TransportGenService,
    private masterapiService: MasterapiService,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private preview: PreviewService,
    private utilsSer: UtilsService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getsupplytype();
    this.getModeOfTransport();
    this.getAllDomain();
    this.getAllRoute();
    this.buildPrescriptionFormGrp();
    this.getseason()
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else if (this.preview.setData) {
        this.getIndent(this.preview.setData.supplyTypeId)
        this.getOnwardIndent(this.preview.setData.orderId)
        this.transportpassFormGroup.patchValue(this.preview.setData)
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  buildPrescriptionFormGrp() {
    this.transportpassFormGroup = this.formBuilder.group({
      id: '',
      passGenerationDate: ['', Validators.required],
      season: ['', Validators.required],
      supplyTypeId: ['', Validators.required],
      sugarmillCountry: [''],
      sugarmillState: [''],
      sugarmillDistrict: [''],
      city: [''],
      grade: [''],
      indentQuantity: [''],
      trs: ['', Validators.required],
      brix: ['', Validators.required],
      balanceIndentQuantity: [''],
      sugarmillAddrs2: [''],
      modeOfTransportId: ['', Validators.required],
      sugarmillPincode: [''],
      sugarmillName: [''],
      sugarmillAddrs1: [''],
      domainId: [''],
      orderId: ['', Validators.required],
      indentDate: [''],
      distName: [''],
      vechicleNumber: ['', Validators.required],
      driverName: ['', Validators.required],
      routeId: ['', Validators.required],
      tankwiseGross: ['', Validators.required],
      tankwiseTare: ['', Validators.required],
      tankwiseNet: [''],
      gpsId: ['', Validators.required],
      distPincode: [''],
      distCountry: [''],
      distState: [''],
      distDistrict: [''],
      distAddrs2: [''],
      distAddrs1: [''],
      tankDetail: this.formBuilder.array([
        this.addFormGroupTable()
      ])
    });
  }

  getseason() {
    this.transportGenService.getcurrentseason().subscribe((res: any) => {
      this.currentseason = res.data;;
      this.transportpassFormGroup.patchValue({ season: this.currentseason.molassesSeason })
    });
  }

  addFormGroupTable(data?: any): FormGroup {
    this.lastIndex++;
    return this.formBuilder.group({
      tankRegid: data && data.tankRegid || '',
      gradeName: data && data.gradeName || '',
      trs: data && data.trs || '',
      brix: data && data.brix || '',
      quantity: [data && data.quantity || ''],
      tankCapacity: data && data.tankCapacity || ''
    });
  }

  get tankDetail() {
    return this.transportpassFormGroup.get('tankDetail') as FormArray;
  }

  tankDetailByPointAt(index) {
    return this.tankDetail.at(index);
  }

  public addEmptyCtrl(): void {
    this.tankDetail.push(this.addFormGroupTable());
    const index = this.lastIndex - 1;
    this.tankDetailByPointAt(index).get('quantity').setValidators([Validators.required]);
    this.tankDetailByPointAt(index).get('quantity').updateValueAndValidity();
  }

  public getPresFormLength(): number {
    return this.tankDetail.length;
  }

  public removeSelectedRow(idx: number) {
    this.tankDetail.removeAt(idx);
  }

  setData(id) {
    this.transportGenService.getTransGenById(id).subscribe((responceData: any) => {
      const { data: respData } = responceData;
      const supplyType = respData ? respData.supplyTypeResponseDto : null
      const transferMode = respData ? respData.transferModeResponseDto : null
      const trans = respData ? respData.transportVehicleDtlsDto : null
      const routeId = trans ? trans.routeMasterResponseDto : null
      const routeValue = routeId ? routeId.id : null
      //const { transportVehicleDtlsDto: respDataTransVehDto } = responceData;
      // const routeId = respData ? (respDataTransVehDto ? respDataTransVehDto.routeMasterResponseDto.id : null) : null;
      this.transportpassFormGroup.patchValue({
        passGenerationDate: this.datepipe.transform(respData ? respData.passGenerationDate : null, 'yyyy-MM-dd'),
        season: respData ? respData.season : null,
        supplyTypeId: respData ? supplyType.name : null,
        orderId: respData ? respData.indentId : null,
        modeOfTransportId: respData ? transferMode.id : null,
        vechicleNumber: respData ? trans.vehicleNumber : null,
        driverName: respData ? trans.driverName : null,
        routeId: routeValue,
        gpsId: respData ? trans.driverName : null,
        trs: respData ? trans.trs : null,
        brix: respData ? trans.brix : null,
        tankwiseGross: respData ? trans.grossWeight : null,
        tankwiseTare: respData ? trans.tareWeight : null,
        tankwiseNet: respData ? trans.netWeight : null,
        tankDetail: respData.stockOutDtlsDtoList,
      });
      this.transportId = respData ? trans.id : null,
        this.getTransportData(respData ? transferMode.id : null);
      this.getIndent(respData ? supplyType.name : null)
      this.getOnwardIndent(respData ? respData.indentId : null)
      this.addEmptyCtrl()
    });
  }

  Adddispatchlist(method: any) {
    this.formSubmitted = false;
    if (this.transportpassFormGroup.valid === false || this.qtyError == true) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          if (this.editId) {
            const tankListDetails = (this.transportpassFormGroup.value.tankDetail).filter((datas: any) => {
              delete datas.tankCapacity;
              delete datas.gradeName;
              if (datas.tankRegid !== '') {
                return datas;
              }
            });
            const postParams = {
              id: this.editId,
              domainId: this.transportpassFormGroup.value.domainId,
              generationDate: this.transportpassFormGroup.value.passGenerationDate,
              indentId: this.transportpassFormGroup.value.orderId,
              season: this.transportpassFormGroup.value.season,
              status: method,
              transportModeId: this.transportpassFormGroup.value.modeOfTransportId,
              transVehicleDtlsDtoList: [
                {
                  id: this.transportId,
                  driverName: this.transportpassFormGroup.value.driverName,
                  gpsDeviceId: this.transportpassFormGroup.value.gpsId,
                  grossWeight: this.transportpassFormGroup.value.tankwiseGross,
                  netWeight: this.transportpassFormGroup.value.tankwiseNet,
                  routeId: this.transportpassFormGroup.value.routeId,
                  tareWeight: this.transportpassFormGroup.value.tankwiseTare,
                  vehicleNumber: this.transportpassFormGroup.value.vechicleNumber,
                  trs: this.transportpassFormGroup.value.trs,
                  brix: this.transportpassFormGroup.value.brix
                }
              ],
              stockOutDtlsReqDtoList: tankListDetails,
            };
            if (this.transportpassFormGroup.value.modeOfTransportId == '7') {
              delete postParams.transVehicleDtlsDtoList;
            }
            this.transportGenService.updateTransGen(postParams).subscribe((responseData: any) => {
              this.handleResponse(responseData);
            });
          } else {
            const tankListDetails = (this.transportpassFormGroup.value.tankDetail).filter((datas: any) => {
              delete datas.tankCapacity;
              delete datas.gradeName;
              if (datas.tankRegid !== '') {
                return datas;
              }
            });
            const postParams = {
              domainId: this.transportpassFormGroup.value.domainId,
              generationDate: this.transportpassFormGroup.value.passGenerationDate,
              indentId: this.transportpassFormGroup.value.orderId,
              season: this.transportpassFormGroup.value.season,
              status: method,
              transportModeId: this.transportpassFormGroup.value.modeOfTransportId,
              transVehicleDtlsDtoList: [
                {
                  id: this.transportId,
                  driverName: this.transportpassFormGroup.value.driverName,
                  gpsDeviceId: this.transportpassFormGroup.value.gpsId,
                  grossWeight: this.transportpassFormGroup.value.tankwiseGross,
                  netWeight: this.transportpassFormGroup.value.tankwiseNet,
                  routeId: this.transportpassFormGroup.value.routeId,
                  tareWeight: this.transportpassFormGroup.value.tankwiseTare,
                  vehicleNumber: this.transportpassFormGroup.value.vechicleNumber,
                  trs: this.transportpassFormGroup.value.trs,
                  brix: this.transportpassFormGroup.value.brix
                }
              ],
              stockOutDtlsReqDtoList: tankListDetails,
            };
            if (this.transportpassFormGroup.value.modeOfTransportId === '7') {
              delete postParams.transVehicleDtlsDtoList;
            }
            this.transportGenService.addTransGen(postParams).subscribe((responseData: any) => {
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
      this.router.navigate(['/supplychainmanagement/sugarmills/transportgeneration/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }

  previewdata() {
    this.formSubmitted = false;
    if (this.transportpassFormGroup.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      this.preview.setData = this.transportpassFormGroup.value;
      this.router.navigate(['/supplychainmanagement/sugarmills/transportgeneration/preview']);
    }
  }

  calculateNet() {
    let cal = this.transportpassFormGroup.value;
    let tankwiseNet = cal.tankwiseGross - cal.tankwiseTare
    this.transportpassFormGroup.controls['tankwiseNet'].setValue(tankwiseNet);
  }

  checkQuantityRules(event, ind, currentRowIns) {
    const { valueAsNumber: enteredQty } = event.target;
    const { value: allowedQty } = currentRowIns.get('tankCapacity');
    const getPreSum = this.utilsSer.sumArr(this.preQtyArr);
    if (this.preQtyArr[ind]) {
      delete this.preQtyArr[ind];
    }
    let getAftSum = this.utilsSer.sumArr(this.preQtyArr);
    getAftSum = getAftSum !== undefined ? getAftSum : 0;
    const { balanceIndentQuantity: indentQty } = this.transportpassFormGroup.value;
    const summedPreVal = getAftSum + enteredQty;
    if (enteredQty > allowedQty) {
      this.qtyErr[ind] = true;
      this.qtyErrTag[ind] = 'first';
      this.qtyError = true;
      return false;
    }
    if (enteredQty > indentQty) {
      this.qtyErr[ind] = true;
      this.qtyErrTag[ind] = 'second';
      this.qtyError = true;
      return false;
    }
    if (summedPreVal > indentQty) {
      this.qtyErr[ind] = true;
      this.qtyErrTag[ind] = 'third';
      this.qtyError = true;
      return false;
    }
    this.preQtyArr[ind] = enteredQty;
    this.qtyErr[ind] = false;
    this.qtyErrTag[ind] = '';
    this.qtyError = false;
    return true;
  }

  getsupplytype() {
    this.masterapiService.get(apiUrls.supplytype).then((responceData: any) => {
      this.supplyType = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getIndent(supplyTypeId) {
    this.transportGenService.approvedIndent(supplyTypeId).subscribe((responceData: any) => {
      this.sugarmillNameList = responceData.data;
    });
  }

  getOnwardIndent(orderId) {
    this.transportGenService.getOutwardIndent(orderId).subscribe((responceData: any) => {
      const data = responceData.data;
      const domain = data ? data.domainResponseDto : null
      const grade = data ? data.gradeDto : null
      this.transportpassFormGroup.patchValue({
        indentDate: this.datepipe.transform(data ? data.indentDate : null, 'yyyy-MM-dd'),
        distName: data ? data.distName : null,
        balanceIndentQuantity: data ? data.balanceIndentQuantity : null,
        distAddrs1: data ? data.distAddrs1 : null,
        distAddrs2: data ? data.distAddrs2 : null,
        distCountry: data ? data.distCountry : null,
        distState: data ? data.distState : null,
        distDistrict: data ? data.distDistrict : null,
        distPincode: data ? data.distPincode : null,
        sugarmillName: data ? data.sugarmillName : null,
        sugarmillAddrs1: data ? data.sugarmillAddrs1 : null,
        sugarmillAddrs2: data ? data.sugarmillAddrs2 : null,
        sugarmillCountry: data ? data.sugarmillCountry : null,
        sugarmillState: data ? data.sugarmillState : null,
        sugarmillDistrict: data ? data.sugarmillDistrict : null,
        sugarmillPincode: data ? data.sugarmillPincode : null,
        indentQuantity: data ? data.indentQuantity : null,
        domainId: domain ? domain.id : '',
        grade: grade ? grade.name : null
      });
      this.gradeData = grade ? grade.name : null;
      let gradeId = grade ? grade.id : '';
      this.getAllTanks(data ? data.productId : '', gradeId)
    });
  }

  getModeOfTransport() {
    this.masterapiService.get(apiUrls.getAllTransferMode).then((responceData: any) => {
      this.deliveredList2 = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getAllDomain() {
    this.masterapiService.get(apiUrls.getAllDomainTrans).then((responceData: any) => {
      this.deliveredList = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getAllRoute() {
    this.masterapiService.get(apiUrls.getAllRouteTrans).then((responceData: any) => {
      this.routeList = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getAllTanks(id, gradeId) {
    this.transportGenService.getMf4Tanks(id, gradeId).subscribe((responceData: any) => {
      this.tankList = responceData ? responceData.data : null;
    });
  }

  getTankDetails(id, pres) {
    var tableList = this.transportpassFormGroup.value.tankDetail;
    var occuranceCount = 0;
    for (var item of tableList) {
      if (id == item.tankRegid) {
        occuranceCount = occuranceCount + 1;
      }
    }
    if (occuranceCount > 1) {
      this.alert.showError("Tank is already Selected", 'error');
      return false;
    } else {
      this.transportGenService.getTankDetails(id).subscribe((responceData: any) => {
        if (responceData.status === 's') {
          pres.patchValue({
            tankCapacity: responceData.data.tankCapacity,
            brix: responceData.data ? responceData.data.brix : '',
            trs: responceData.data ? responceData.data.trs : '',
            gradeName: this.gradeData
          });
          this.addEmptyCtrl();
        } else {
          this.alert.showError(responceData.userDisplayMesg, 'error');
        }
      });
    }

  }

  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }

  getTransportData(id) {
    if (id == '7') {
      this.transportpassFormGroup.controls['vechicleNumber'].clearValidators();
      this.transportpassFormGroup.controls['vechicleNumber'].updateValueAndValidity();
      this.transportpassFormGroup.controls['trs'].clearValidators();
      this.transportpassFormGroup.controls['trs'].updateValueAndValidity();
      this.transportpassFormGroup.controls['brix'].clearValidators();
      this.transportpassFormGroup.controls['brix'].updateValueAndValidity();
      this.transportpassFormGroup.controls['driverName'].clearValidators();
      this.transportpassFormGroup.controls['driverName'].updateValueAndValidity();
      this.transportpassFormGroup.controls['routeId'].clearValidators();
      this.transportpassFormGroup.controls['routeId'].updateValueAndValidity();
      this.transportpassFormGroup.controls['tankwiseGross'].clearValidators();
      this.transportpassFormGroup.controls['tankwiseGross'].updateValueAndValidity();
      this.transportpassFormGroup.controls['tankwiseTare'].clearValidators();
      this.transportpassFormGroup.controls['tankwiseTare'].updateValueAndValidity();
      this.transportpassFormGroup.controls['gpsId'].clearValidators();
      this.transportpassFormGroup.controls['gpsId'].updateValueAndValidity();
    }
  }
}
