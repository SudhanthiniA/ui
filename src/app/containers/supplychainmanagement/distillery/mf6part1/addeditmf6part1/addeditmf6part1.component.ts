import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { 
  AlertService, 
  DistileryService, 
  StockInService, 
  MasterapiService,
  CommonService
} from '@app/services';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addeditmf6part1',
  templateUrl: './addeditmf6part1.component.html',
  styleUrls: ['./addeditmf6part1.component.scss']
})
export class Addeditmf6part1Component implements OnInit {
  popupFlag: boolean;
  mf6partForm: FormGroup;
  tankList: any[] = [];
  mf6partrequestObject: any = {
    date: '',
    openingBalancesOfMolasses: 100000,
    sugarmill: 'Awadh Sugar Mill',
    dispatchedDate: '2020-11-19',
    gatePassNo: 'UP00123',
    quantity: 500,
    quantityWeightByMen: '',
    grade: '',
    brix: '',
    percentageTotalSugar: '',
    transitLosses: '',
    quantityIsUsed: '',
    serialNoOfTankStored: '',
    serialNoOfTank: '',
    initalByExciseInspector: '',
    status: false,
  };
  findnumberoftanks: any[] = [];
  userdesignation: any[] = [];
  formSubmitted = false;
  curDate = new Date();
  openstock: any;
  editId: any;
  tankstoredlistlist = [{ id: 1, name: 'Akhlishwer Singh' }];
  // gradelist = [{ "id": 1, "name": "B-Heavy" }, { "id": 2, "name": "C-Heavy" }, { "id": 3, "name": "Grade II (44%-49.9%)" }]
  gradelist: any = [];
  addedit: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private masterapiService: MasterapiService,
    private datePipe: DatePipe,
    private alert: AlertService,
    private stockInService: StockInService,
    private distileryService: DistileryService,
    private commonService: CommonService
  ) { }

  async ngOnInit() {
    this.getAllTankGrades();
    await this.getOpenstock();
    this.getuserdeignation();
    this.buildPrescriptionFormGrp();
    this.mf6partrequestObject['date'] = this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
      this.route.params.subscribe(params => {
        if (params.id) {
          this.getMf6PartoneById(params.id);
          this.mf6partrequestObject.id = params.id;
          this.editId = params.id;
          // this.addedit = 'Edit';
        }
      });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    // this.buildPrescriptionFormGrp();
  }

  async getOpenstock() {
    await this.distileryService.getopenBalance().subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.openstock = responceData.data;
        setTimeout(() => {
          this.mf6partForm.patchValue({
            openingBalancesOfMolasses: responceData.data
          }), 1000;
        });
      }
    });
  }

  buildPrescriptionFormGrp() {
    this.mf6partForm = this.formBuilder.group({
      date: ['', Validators.required],
      openingBalancesOfMolasses: [''],
      sugarmill: ['', Validators.required],
      dispatchedDate: [''],
      gatePassNo: ['', Validators.required],
      quantity: ['', Validators.required],
      quantityWeightByMen: ['', Validators.required],
      gradeId: ['', Validators.required],
      transitLosses: ['', Validators.required],
      // serialNoOfTankStored: ['', Validators.required],
      // serialNoOfTank: ['', Validators.required],
      mstockTransferId: [''],
      stockinDetails: this.formBuilder.array([
        this.addFormGroupTable()
      ])
    });
  }

  public addEmptyCtrl(): void {
    (this.mf6partForm.get('stockinDetails') as FormArray).push(this.addFormGroupTable());
  }

  public getPresFormLength(): number {
    return (this.mf6partForm.get('stockinDetails') as FormArray).length;
  }

  addNewRow(rowId) {
    this.addEmptyCtrl();
  }

  public removeSelectedRow(idx: number) {
    (this.mf6partForm.get('stockinDetails') as FormArray).removeAt(idx);
  }

  getuserdeignation() {
    this.distileryService.getdesignationbyofficer().subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.userdesignation = responceData.data;
      }
    });
  }

  addFormGroupTable(data?: any): FormGroup {
    return this.formBuilder.group({
      tankRegId: data && data.tankRegId || '',
      quantity: data && data.quantity || '',
      trs: data && data.trs || '',
      brix: data && data.brix || '',
      availablebalance: data && data.availableBalance || '',
      inChargeId: data && data.inChargeId || ''
    });
  }

  autopopulatedata(data) {
    if (data.length !== 8) {
      this.distileryService.getautopopulatedata(data).subscribe(responceData => {
        this.mf6partForm.patchValue({
          quantity: responceData.data.quantity,
          sugarmill: responceData.data.sugarmillName,
          dispatchedDate: this.datePipe.transform(responceData.data.dispatchedDate, 'yyyy-MM-dd'),
          mstockTransferId: responceData.data.mstockTransferId
        });
      });
    }
  }

  saveData(form, status) {
    const payload = {
      date: form.value.date,
      gatePassNo: form.value.gatePassNo,
      gradeId: form.value.gradeId,
      mstockTransferId: form.value.mstockTransferId,
      quantityWeightByMen: form.value.quantityWeightByMen,
      stockInDetailList: form.value.stockinDetails,
      transitLosses: form.value.transitLosses,
      status
    };
    this.formSubmitted = false;
    if (form.valid === false && status === 'SUBMITTED') {
      this.formSubmitted = true;
    } else {
      if (this.editId) {
        payload['id'] = this.editId;
        console.log(payload, 'msggggggggggggggggggggg');
        this.distileryService.updateMF6Partone(payload).subscribe(responceData => {
          if (responceData['status'] === 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success');
            sessionStorage.removeItem('formdata');
            this.router.navigate(['/supplychainmanagement/distillery/mf6-part-one/list']);
            console.log(responceData);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error');
          }
        });
      } else {
        console.log(payload, 'msggggggggggggggggggggg');
        this.distileryService.addMF6Partone(payload).subscribe(responceData => {
          if (responceData['status'] === 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success');
            sessionStorage.removeItem('formdata');
            this.router.navigate(['/supplychainmanagement/distillery/mf6-part-one/list']);
          } else {
            console.log(responceData);
            this.alert.showError(responceData['userDisplayMesg'], 'error');
          }
        });
      }
    }
  }

  previewcategory(form) {
    sessionStorage.setItem('formdata', JSON.stringify(this.mf6partrequestObject));
    this.router.navigate(['/supplychainmanagement/distillery/mf6-part-one/preview']);
  }

  molassesTypes(id) {
    this.stockInService.gettanksbyid(id).subscribe((resp: any) => {
      // alert('msg');
      if (resp.status === 's') {
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

  getTankDetails(id, pres) {
    const tableList = this.mf6partForm.value.stockinDetails;
    let occuranceCount = 0;
    let i = 0;
    for (const item of tableList) {
      if (id === item.tankRegId) {
        occuranceCount = occuranceCount + 1;
      }
    }
    if (occuranceCount > 1) {
      i = i + 1;
      this.alert.showError('Tank is already Selected', 'error');
      this.removeSelectedRow(i);
      return;
    } else {
      this.distileryService.getcurrentStockBytankid(id).subscribe((responceData: any) => {
        // debugger;
        if (responceData.status === 's') {
          pres.patchValue({
            availablebalance: responceData.data.availableCapacity,

            brix: responceData.data ? responceData.data.brix : '',
            trs: responceData.data ? responceData.data.trs : '',
            // gradeName: this.gradeData
          });
          // this.addEmptyCtrl();
        } else {
          this.alert.showError(responceData.userDisplayMesg, 'error');
        }
      });
    }
  }

  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }

  checkingvalue(pres) {
    // console.log(this.mf6partForm.get('stockInDetail')['controls'])
    if (pres.get('quantity').value > pres.get('availablebalance').value) {
      this.alert.showError('Please Enter less than or equal of Available Capacity', 'error');
      (pres.get('quantity').reset());
    }

    if (pres.get('quantity').value > this.mf6partForm.get('quantityWeightByMen').value) {

      this.alert.showError('Please Enter less than or equal of Quantity Weight by men Calculation(Qtl)', 'error');
      (pres.get('quantity').reset());
    }
    let sum = 0;
    this.mf6partForm.get('stockinDetails')['controls'].forEach((x: any) => {
      if (x.value.quantity > 0) {
        sum += parseInt(x.value.quantity);
      }
      if (sum > this.mf6partForm.get('quantityWeightByMen').value) {
        this.alert.showError('Please Enter less than or equal of Quantity Weight by men Calculation(Qtl)', 'error');
        (x.get('quantity').reset());

      }
    });

    // if(sum == this.stockFormGroup.get('caneSyrupDetails').value) {
    //   this.checkqunatity = false
    // } else if(sum == this.stockFormGroup.get('caneJuiceDetails').value){
    //   this.checkqunatity = false
    // } else if(sum == this.stockFormGroup.get('producedMolasses').value){
    //   this.checkqunatity = false
    // } else {
    //   this.checkqunatity = true
    // }

    // if (this.stockFormGroup.get('caneJuiceDetails').value > 0) {
    //   if (sum > this.stockFormGroup.get('caneJuiceDetails').value) {
    //     this.alert.showError('Please Enter less than or equal of Produced', 'error');
    //     (pres.get('quantity').reset());
    //   }
    // } else if (this.stockFormGroup.get('caneSyrupDetails').value > 0) {
    //   if (sum > this.stockFormGroup.get('caneSyrupDetails').value) {
    //     this.alert.showError('Please Enter less than or equal of Produced', 'error');
    //     (pres.get('quantity').reset());
    //   }
    // } else {
    //   if (sum > this.stockFormGroup.get('producedMolasses').value) {
    //     this.alert.showError('Please Enter less than or equal of Produced', 'error');
    //     (pres.get('quantity').reset());
    //   }
    // }
  }

  getMf6PartoneById(id) {
    this.distileryService.getMF6PartoneById(id).subscribe(responceData => {
      this.mf6partrequestObject = responceData['data'];
      this.mf6partForm.patchValue({
        date: this.datePipe.transform(this.mf6partrequestObject.date, 'yyyy-MM-dd'),
        gatePassNo: this.mf6partrequestObject.gatePassNo,
        gradeId: this.mf6partrequestObject.gradeId,
        mstockTransferId: this.mf6partrequestObject.mstockTransferId,
        quantityWeightByMen: this.mf6partrequestObject.quantityWeightByMen,
        transitLosses: this.mf6partrequestObject.transitLosses,
        // stockinDetails: this.mf6partrequestObject.stockinDetails
      });
      this.mf6partrequestObject.stockInDetailList.forEach((element: any, idx: number) => {
        if (element.tankRegId) {
          (this.mf6partForm.get('stockinDetails') as FormArray).removeAt(idx);
          // this.getTankDetailsbyid(element.tankRegId,this.mf6partForm.get('stockinDetails').value);
          (this.mf6partForm.get('stockinDetails') as FormArray).push(this.addFormGroupTable(element));
          // this.getTankDetailsbyid(element.tankRegId, this.mf6partForm.get('stockinDetails').value);
          // this.addEmptyCtrl();
        }
      });
      this.autopopulatedata(this.mf6partrequestObject.gatePassNo);
      this.molassesTypes(this.mf6partrequestObject.gradeId);
    });
  }

  getTankDetailsbyid(id, array) {
    this.distileryService.getcurrentStockBytankid(id).subscribe((responceData: any) => {
      // debugger;
      if (responceData.status === 's') {
        array[0].patchValue({
          availablebalance: responceData.data.availableCapacity,

          brix: responceData.data ? responceData.data.brix : '',
          trs: responceData.data ? responceData.data.trs : '',
          // gradeName: this.gradeData
        });
        // this.addEmptyCtrl();
      } else {
        this.alert.showError(responceData.userDisplayMesg, 'error');
      }
    });
  }

  getAllTankGrades() {
    this.masterapiService.get('molassesType/getAllMolassesType').then((responceData: any) => {
      if (responceData.status === 's') {
        this.gradelist = responceData.data;
      }
    });
  }
}
