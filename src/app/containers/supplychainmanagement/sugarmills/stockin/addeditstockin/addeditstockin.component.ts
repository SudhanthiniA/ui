import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import {
  AlertService,
  StockInService,
  PreviewService,
  MasterapiService,
  CommonService
} from '@app/services';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { apiUrls } from '@appEnv/apiurls';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addeditstockin',
  templateUrl: './addeditstockin.component.html',
  styleUrls: ['./addeditstockin.component.scss']
})

export class AddeditstockinComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  stockFormGroup: FormGroup;
  stocinobj: any = {
    method: 'draft'
  };
  date: any;
  tankList: any;
  editId: any;
  formSubmitted = false;
  canesyrup = false;
  freeLeavyMolasses: number;
  reservedMolasses: number;
  bheavy = false;
  cheavy = false;
  bruntmolasses = false;
  gradedmolasses = false;
  gradeList: any;
  molassestype: any;
  tanktype: any;
  tankGradeList: any;
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDay();
  minDate = new Date(this.now.setDate(this.now.getDate() - 1));
  maxDate = new Date();
  canejuice: boolean;
  producedmolasses: boolean;
  canesyrups: boolean;
  errordata: boolean;
  checkqunatity = true;
  findnumberoftanks: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private stockInService: StockInService,
    private formBuilder: FormBuilder,
    private masterapiService: MasterapiService,
    private alert: AlertService,
    private previews: PreviewService,
    private modalService: NgbModal,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    // this.getmolasistype();
    this.buildPrescriptionFormGrp();
    this.getAllTankGrades();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else if (this.previews.setData) {
        this.stockFormGroup.patchValue(this.previews.setData);
      }
    });
    this.maxDate.setHours(23, 59, 0, 0);
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  buildPrescriptionFormGrp() {
    this.stockFormGroup = this.formBuilder.group({
      year: ['2020-2021'],
      stockDate: ['', Validators.required],
      caneCrushed: [''],
      producedMolasses: [''],
      reservedMolasses: [''],
      freeLeavyMolasses: [''],
      caneJuiceDetails: [''],
      molassestype: [''],
      tankname: [''],
      productType: 'Cane Syrup',
      caneSyrupDetails: [''],
      stockInDetail: this.formBuilder.array([
        this.addFormGroupTable()
      ])
    });
  }
  addFormGroupTable(data?: any): FormGroup {
    return this.formBuilder.group({
      trs: data && data.trs || '',
      brix: data && data.brix || '',
      quantity: data && data.quantity || '',
      gradeId: data && data.gradeId || '',
      tankId: data && data.tankId || data && data.gradeId || '',
      totalcapacity: data && data.totalcapacity || '',
      availableCapacity: data && data.availableCapacity || '',
      occupiedCapacity: data && data.occupiedCapacity || '',
      tankname: data && data.assetName || '',
    });
  }

  public addEmptyCtrl(): void {
    (this.stockFormGroup.get('stockInDetail') as FormArray).push(this.addFormGroupTable());
  }

  public getPresFormLength(): number {
    return (this.stockFormGroup.get('stockInDetail') as FormArray).length;
  }

  addNewRow(rowId) {
    const length = this.getPresFormLength();
    if (length == (rowId + 1)) {
      this.addEmptyCtrl();
    }
  }

  public removeSelectedRow(idx: number) {
    (this.stockFormGroup.get('stockInDetail') as FormArray).removeAt(idx);
  }

  setData(id) {
    this.stockInService.getStockInById(id).subscribe((responceData: any) => {
      this.stocinobj = responceData.data;
      const dateofstockin = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
      this.stockFormGroup.patchValue({
        year: this.stocinobj.year,
        stockDate: dateofstockin,
        caneCrushed: this.stocinobj.caneCrushed,
        producedMolasses: this.stocinobj.producedMolasses,
        reservedMolasses: this.stocinobj.reservedMolasses,
        freeLeavyMolasses: this.stocinobj.freeLeavyMolasses,
        molassestype: this.stocinobj.molassestype,
        caneSyrupDetails: this.stocinobj.caneSyrupDetails,
      });
      this.stocinobj.caneSyrup === 'Cane Syrup' ? this.canesyrup = true : this.canesyrup = false;
      this.stocinobj.stockInDetail.forEach((element: any, idx: number) => {
        if (element.tankId) {
          (this.stockFormGroup.get('stockInDetail') as FormArray).removeAt(idx);
          (this.stockFormGroup.get('stockInDetail') as FormArray).push(this.addFormGroupTable(element));
          this.addEmptyCtrl();
        }
      });
      this.molassesTypes(this.stocinobj.molassestype);
    });
  }

  // getmolasistype() {
  //   this.masterapiService.get(`${apiUrls.molasistype}`).then((responceData: any) => {
  //     if (responceData.status == 's') {
  //       this.molassestype = responceData.data;
  //     }
  //   }).catch((err: any) => {
  //     console.log('\n err...', err);
  //   });
  //   this.stockInService.getlatestfortnight().subscribe((resp: any) => {
  //     console.log(resp.data);
  //     if (resp.data) {
  //       const responce = resp.data;
  //       this.stockFormGroup.patchValue({
  //         // productType: responce.productType == '12'? 'Molasses': 'Cane Juice',
  //         // caneCrushed: responce.thisYearCanesupply,
  //         molassestype: (responce && responce.molassesTypeResponseDto && responce.molassesTypeResponseDto.id)
  //       });
  //       debugger
  //       if (responce.productType == '12') {
  //         this.stockFormGroup.patchValue({
  //           productType: 'Molasses'
  //         });
  //         this.clickedevent('Molasses');
  //       } else if (responce.productType == '13') {
  //         this.stockFormGroup.patchValue({
  //           productType: 'Cane Juice'
  //         });
  //         this.clickedevent('Cane Juice');
  //       } else {
  //         this.stockFormGroup.patchValue({
  //           productType: 'Cane Syrup'
  //         });
  //         this.clickedevent('Cane Syrup');
  //       }
  //       if (responce && responce.molassesTypeResponseDto && responce.molassesTypeResponseDto.id) {
  //         this.molassesTypes(responce.molassesTypeResponseDto.id);
  //       } else {
  //         this.tanksbyproduct(responce.productType);
  //       }
  //     } else {
  //       this.alert.showError('Please Add FortNight ', 'Error');
  //       this.router.navigate(['/supplychainmanagement/sugarmills/stockin/list']);
  //     }
  //   });

  // }

  addstock(stockForm, method) {
    if (stockForm.valid === false || this.checkqunatity) {
      if (stockForm.valid === false) {
        this.formSubmitted = true;
      }
      if (this.checkqunatity) {
        this.alert.showError('Please check Produced and Total Quantity', 'error');
      }
    } else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          if (this.editId) {
            const dataofstockdetails = stockForm.value.stockInDetail;
            const data = dataofstockdetails.filter((datas: any) => {
              return datas.tankId != "";
            });
            const postParam = {
              id: this.editId,
              financialYear: this.stockFormGroup.value.year,
              dateReceived: this.stockFormGroup.value.stockDate,
              caneCrushed: this.stockFormGroup.value.caneCrushed,
              producedMolasses: this.stockFormGroup.value.producedMolasses || this.stockFormGroup.value.caneSyrupDetails || this.stockFormGroup.value.caneJuiceDetails,
              gradeCode: this.stockFormGroup.value.molassestypeCode,
              gradeValue: this.stockFormGroup.value.molassestypeName,
              productTypeValue: this.stockFormGroup.value.productType,
              productTypeCode: this.stockFormGroup.value.productType,
              caneSyrupDetails: this.stockFormGroup.value.caneSyrupDetails,
              stockInDetail: data,
              sugarMillId: 1,
              status: method,
            };
            const lenghtnn = dataofstockdetails.length;
            if (lenghtnn != 1) {
              this.stockInService.addStockIn(postParam).subscribe(responceData => {
                this.handleResponse(responceData);
              });
            }
          } else {
            const lengthh = (this.stockFormGroup.value.stockInDetail).length;
            const data = (this.stockFormGroup.value.stockInDetail).filter((datas: any) => {
              console.log(datas);
              if (datas.tankId !== '') {
                return datas;
              }
            });
            const postParam = {
              financialYear: this.stockFormGroup.value.year,
              dateReceived: this.stockFormGroup.value.stockDate,
              caneCrushed: this.stockFormGroup.value.caneCrushed,
              producedMolasses: this.stockFormGroup.value.producedMolasses || this.stockFormGroup.value.caneSyrupDetails || this.stockFormGroup.value.caneJuiceDetails,
              gradeCode: this.stockFormGroup.value.molassestypeCode,
              gradeValue: this.stockFormGroup.value.molassestypeName,
              productTypeValue: this.stockFormGroup.value.productType,
              productTypeCode: this.stockFormGroup.value.productType,
              // caneSyrupDetails: this.stockFormGroup.value.caneSyrupDetails,
              stockInDetailList: data,
              sugarMillId: 1,
              status: method,
              createdBy: 'Admin',
              createdDate: this.datepipe.transform(this.curDate, 'yyyy-MM-dd'),
            };
            if (lengthh != 1) {
              this.stockInService.addStockIn(postParam).subscribe((responseData: any) => {
                this.handleResponse(responseData);
              });
            }
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
      this.router.navigate(['/supplychainmanagement/sugarmills/stockin/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }
  navigateCategoryList() {
    this.router.navigate(['/supplychainmanagement/sugarmills/stockin/list']);
  }

  preview(form) {
    this.formSubmitted = false;
    if (this.stockFormGroup.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      
      this.previews.setData = form.value;
      this.previews.setData.stockInDetail.pop();
      console.log(form.value);
      this.router.navigate(['/supplychainmanagement/sugarmills/stockin/preview']);
    }
  }

  clickedevent(event, values?: any) {
    console.log(event, this.stockFormGroup);
    const value = event;
    if (value == 'Cane Juice') {
      this.stockFormGroup.controls['caneJuiceDetails'].setValidators([Validators.required]);
      this.stockFormGroup.controls['caneJuiceDetails'].updateValueAndValidity();
      this.stockFormGroup.controls['caneSyrupDetails'].reset();
      this.stockFormGroup.controls['producedMolasses'].reset();
      this.stockFormGroup.controls['caneSyrupDetails'].clearValidators();
      this.stockFormGroup.controls['caneSyrupDetails'].updateValueAndValidity();
      this.stockFormGroup.controls['producedMolasses'].clearValidators();
      this.stockFormGroup.controls['producedMolasses'].updateValueAndValidity();
      this.stockFormGroup.controls['molassestype'].reset();
      this.stockFormGroup.controls['molassestype'].clearValidators();
      this.stockFormGroup.controls['molassestype'].updateValueAndValidity();
    } else if (value == 'Cane Syrup') {
      this.stockFormGroup.controls['caneSyrupDetails'].setValidators([Validators.required]);
      this.stockFormGroup.controls['caneSyrupDetails'].updateValueAndValidity();
      this.stockFormGroup.controls['caneJuiceDetails'].reset();
      this.stockFormGroup.controls['producedMolasses'].reset();
      this.stockFormGroup.controls['caneJuiceDetails'].clearValidators();
      this.stockFormGroup.controls['caneJuiceDetails'].updateValueAndValidity();
      this.stockFormGroup.controls['producedMolasses'].clearValidators();
      this.stockFormGroup.controls['producedMolasses'].updateValueAndValidity();
      this.stockFormGroup.controls['molassestype'].reset();
      this.stockFormGroup.controls['molassestype'].clearValidators();
      this.stockFormGroup.controls['molassestype'].updateValueAndValidity();
    } else {
      this.stockFormGroup.controls['producedMolasses'].setValidators([Validators.required]);
      this.stockFormGroup.controls['producedMolasses'].updateValueAndValidity();
      this.stockFormGroup.controls['caneJuiceDetails'].reset();
      this.stockFormGroup.controls['caneSyrupDetails'].reset();
      this.stockFormGroup.controls['caneJuiceDetails'].clearValidators();
      this.stockFormGroup.controls['caneJuiceDetails'].updateValueAndValidity();
      this.stockFormGroup.controls['caneSyrupDetails'].clearValidators();
      this.stockFormGroup.controls['caneSyrupDetails'].updateValueAndValidity();
      this.stockFormGroup.controls['molassestype'].setValidators([Validators.required]);
      this.stockFormGroup.controls['molassestype'].updateValueAndValidity();
    }
    console.log(this.stockFormGroup);
  }

  calmolasses() {
    this.stockFormGroup.patchValue({
      reservedMolasses: (this.stockFormGroup.value.producedMolasses * 0.8),
      freeLeavyMolasses: (this.stockFormGroup.value.producedMolasses * 0.2),
    });
  }

  getAllTankGrades() {
    this.masterapiService.get('molassesType/getAllMolassesType').then((responceData: any) => {
      if (responceData.status === 's') {
        this.tankGradeList = responceData.data;
      }
    });
  }

  tanksbyproduct(val) {
    console.log(val);
    this.stockInService.gettanksbyproductid(val).subscribe((resp: any) => {
      if (resp.status == 's') {
        console.log(resp.data);
        // this.tankList = resp.data.registeredTankByGradeList
        if (resp.data) {
          this.tankList = resp.data.registeredTankByGradeList;
        } else {
          this.tankList = [];
        }
      }
    });
  }

  molassesTypes(val) { 
    const molassesType = this.tankGradeList.find((x: any) => { return x.id == val });
    this.stockFormGroup.patchValue({
      molassestypeName: molassesType.name,
      molassestypeCode: molassesType.code
    });
    // console.log(val)
    this.stockInService.gettanksbyid(val).subscribe((resp: any) => {
      if (resp.status == 's') {
        console.log(resp.data);
        // this.tankList = resp.data.registeredTankByGradeList
        if (resp.data) {
          this.tankList = resp.data.registeredTankByGradeList;
        } else {
          this.tankList = [];
        }
      }
    });
  }

  getTankLists() {

    const postData = { "filters": { "registration_id": null, "tank_id": null, "total_capacity": null }, "pageNo": 0, "paginationSize": 500 };
    this.stockInService.searchTanReg(postData).subscribe((resp: any) => {
      this.tankList = resp.data.contents;
    });
  }


  tankSelect(val, pres) {

    this.findnumberoftanks = [];

    (this.stockFormGroup.get('stockInDetail') as FormArray).controls.forEach((x: any) => {
      if (x.value.tankId == val) {
        this.findnumberoftanks.push(x.value);
      }

      if (this.findnumberoftanks.length == 2) {
        this.alert.showError('This Tank already Exists', 'error');
        pres.reset();
        pres.get('tankId').setValue('');
      }
    });


    if (this.findnumberoftanks.length == 1 && val > 0) {
      this.stockInService.gettankbyid(parseInt(val)).subscribe((datas: any) => {
        if (datas.status == "s") {
          console.log(pres);
          pres.setValue({
            totalcapacity: datas.data.totalCapacity,
            availableCapacity: datas.data.availableCapacity,
            brix: datas.data.brix,
            gradeId: datas.data.gradeId,
            occupiedCapacity: datas.data.occupiedCapacity,
            quantity: '',
            tankId: val,
            trs: datas.data.trs,
            tankname: (datas.data.assetName) ? datas.data.assetName : '',
          });
        }
      });
    }

  }

  gradename(id) {
    if (id) {
      const findobj = this.tankGradeList.find((x: any) => {
        return x.id == id;
      });
      return findobj.name;
    }
  }

  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }

  checkingvalue(pres) {
    console.log(this.stockFormGroup.get('stockInDetail')['controls']);
    if (pres.get('quantity').value > pres.get('availableCapacity').value) {
      this.alert.showError('Please Enter less than or equal of Available Capacity', 'error');
      (pres.get('quantity').reset());
    }
    let sum = 0;
    this.stockFormGroup.get('stockInDetail')['controls'].forEach((x: any) => {
      if (x.value.quantity > 0) {
        sum += parseInt(x.value.quantity);
      }
    });

    if (sum == this.stockFormGroup.get('caneSyrupDetails').value) {
      this.checkqunatity = false;
    } else if (sum == this.stockFormGroup.get('caneJuiceDetails').value) {
      this.checkqunatity = false;
    } else if (sum == this.stockFormGroup.get('producedMolasses').value) {
      this.checkqunatity = false;
    } else {
      this.checkqunatity = true;
    }

    if (this.stockFormGroup.get('caneJuiceDetails').value > 0) {
      if (sum > this.stockFormGroup.get('caneJuiceDetails').value) {
        this.alert.showError('Please Enter less than or equal of Produced', 'error');
        (pres.get('quantity').reset());
      }
    } else if (this.stockFormGroup.get('caneSyrupDetails').value > 0) {
      if (sum > this.stockFormGroup.get('caneSyrupDetails').value) {
        this.alert.showError('Please Enter less than or equal of Produced', 'error');
        (pres.get('quantity').reset());
      }
    } else {
      if (sum > this.stockFormGroup.get('producedMolasses').value) {
        this.alert.showError('Please Enter less than or equal of Produced', 'error');
        (pres.get('quantity').reset());
      }
    }
  }

}
