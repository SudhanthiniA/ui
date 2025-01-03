import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import {
  AlertService,
  StockinService,
  MasterapiService,
  CommonService
} from '@app/services';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { apiUrls } from '@appEnv/apiurls';

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
  locationlist = [{ id: 1, name: 'UAE' }, { id: 2, name: 'kenya' }];
  tankList: any;
  totalTankList = [{ id: 1, name: 'Tank 1' }, { id: 2, name: 'Tank 2' }, { id: 3, name: 'Tank 3' }];
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private stockinService: StockinService,
    private formBuilder: FormBuilder,
    private masterapiService: MasterapiService,
    private alert: AlertService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getmolasistype();
    this.buildPrescriptionFormGrp();
    this.getTankLists();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  buildPrescriptionFormGrp() {
    this.stockFormGroup = this.formBuilder.group({
      year: ['2019-2020'],
      stockDate: ['', Validators.required],
      caneCrushed: [''],
      producedMolasses: [''],
      reservedMolasses: [''],
      freeLeavyMolasses: [''],
      caneJuiceDetails: [''],
      molassestype: [''],
      bmolasses: [''],
      cmolasses: [''],
      burntMolasses: [''],
      belowMolasses: [''],
      caneSyrup: 'Cane Syrup',
      caneSyrupDetails: ['', Validators.required],
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
      tankId: data && data.tankId || '',
      totalcapacity: data && data.totalcapacity || '',
      availableCapacity: data && data.availableCapacity || '',
      occupiedCapacity: data && data.occupiedCapacity || ''
    });
  }
  public addEmptyCtrl(): void {
    (this.stockFormGroup.get('stockInDetail') as FormArray).push(this.addFormGroupTable());
  }

  public getPresFormLength(): number {
    return (this.stockFormGroup.get('stockInDetail') as FormArray).length;
  }

  addNewRow(rowId) {
    this.addEmptyCtrl();
  }

  public removeSelectedRow(idx: number) {
    (this.stockFormGroup.get('stockInDetail') as FormArray).removeAt(idx);
  }

  setData(id) {
    this.stockinService.getStockInById(id).subscribe((responceData: any) => {
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
        bmolasses: this.stocinobj.bmolasses,
        cmolasses: this.stocinobj.cmolasses,
        burntMolasses: this.stocinobj.burntMolasses,
        belowMolasses: this.stocinobj.belowMolasses,
        caneSyrup: this.stocinobj.caneSyrup,
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
    })
  }

  getmolasistype() {
    this.masterapiService.get(`${apiUrls.molasistype}`).then((responceData: any) => {
      if (responceData.status == 's') {
        this.molassestype = responceData.data;
      }
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  addstock(stockForm, method) {
    if (stockForm.valid === false) {
      this.formSubmitted = true;
    } else {
      if (this.editId) {
        const dataofstockdetails = stockForm.value.stockInDetail;
        const data = dataofstockdetails.filter((datas: any) => {
          console.log(datas);
          return datas.tankId !== '';
        });
        const postParam = {
          id: this.editId,
          year: this.stockFormGroup.value.year,
          stockDate: this.stockFormGroup.value.stockDate,
          caneCrushed: this.stockFormGroup.value.caneCrushed,
          producedMolasses: this.stockFormGroup.value.producedMolasses,
          reservedMolasses: this.stockFormGroup.value.reservedMolasses,
          freeLeavyMolasses: this.stockFormGroup.value.freeLeavyMolasses,
          molassestype: this.stockFormGroup.value.molassestype,
          bmolasses: this.stockFormGroup.value.bmolasses,
          cmolasses: this.stockFormGroup.value.cmolasses,
          burntMolasses: this.stockFormGroup.value.burntMolasses,
          belowMolasses: this.stockFormGroup.value.belowMolasses,
          // caneSyrup: this.stockFormGroup.value.caneSyrup,
          caneSyrupDetails: this.stockFormGroup.value.caneSyrupDetails,
          stockInDetail: data,
          sugarMillId: 1,
          status: method,
          // updatedBy: 'Admin',
          // updatedOn: this.datepipe.transform(this.curDate, 'yyyy-MM-dd')
        };
        const lenghtnn = dataofstockdetails.length;
        if (lenghtnn != 1) {
          this.stockinService.updateStockIn(postParam).subscribe(responceData => {
            this.handleResponse(responceData)
          })
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
          year: this.stockFormGroup.value.year,
          stockDate: this.stockFormGroup.value.stockDate,
          caneCrushed: this.stockFormGroup.value.caneCrushed,
          producedMolasses: this.stockFormGroup.value.producedMolasses,
          reservedMolasses: this.stockFormGroup.value.reservedMolasses,
          freeLeavyMolasses: this.stockFormGroup.value.freeLeavyMolasses,
          molassestype: this.stockFormGroup.value.molassestype,
          bmolasses: this.stockFormGroup.value.bmolasses,
          cmolasses: this.stockFormGroup.value.cmolasses,
          burntMolasses: this.stockFormGroup.value.burntMolasses,
          belowMolasses: this.stockFormGroup.value.belowMolasses,
          // caneSyrup: this.stockFormGroup.value.caneSyrup == 'true' ? 'Cane Syrup' : 'Molasses',
          caneSyrupDetails: this.stockFormGroup.value.caneSyrupDetails,
          stockInDetail: data,
          sugarMillId: 1,
          status: method,
          // updatedBy: 'Admin',
          // updatedOn: this.datepipe.transform(this.curDate, 'yyyy-MM-dd'),
          createdBy: 'Admin',
          createdOn: this.datepipe.transform(this.curDate, 'yyyy-MM-dd'),
        };
        if (lengthh != 1) {
          this.stockinService.distilleryaddStockIn(postParam).subscribe((responseData: any) => {
            this.handleResponse(responseData)
          })
        }
      }
    }
  }
  handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/distillery/stockin/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }
  navigateCategoryList() {
    this.router.navigate(['/supplychainmanagement/distillery/stockin/list']);
  }

  preview(form) {
    sessionStorage.setItem('formdata', JSON.stringify(form.value));
    this.router.navigate(['/supplychainmanagement/distillery/stockin/preview']);
  }

  clickedevent(event, value) {
    console.log(event.target.value, this.stockFormGroup, this.stockFormGroup.get('caneSyrup').value)
    if (value == 'cane') {
      this.canesyrup = true;
    } else {
      this.canesyrup = false;
    }
  }

  calmolasses() {
    this.stockFormGroup.patchValue({
      reservedMolasses: (this.stockFormGroup.value.producedMolasses * 0.8),
      freeLeavyMolasses: (this.stockFormGroup.value.producedMolasses * 0.2),
    });
  }

  molassesTypes(val) {
    if (val === 'b-heavy') {
      this.bheavy = true;
      this.cheavy = false,
        this.bruntmolasses = false;
      this.gradedmolasses = false;
    } else if (val === 'c-heavy') {
      this.cheavy = true;
      this.bheavy = false,
        this.bruntmolasses = false;
      this.gradedmolasses = false;
    } else if (val === 'brunt') {
      this.bruntmolasses = true;
      this.cheavy = false,
        this.bheavy = false;
      this.gradedmolasses = false;
    } else {
      this.gradedmolasses = true;
      this.cheavy = false,
        this.bruntmolasses = false;
      this.bheavy = false;
    }
  }

  getTankLists() {
    const postData = { filters: { registration_id: null, tank_id: null, total_capacity: null }, pageNo: 0, paginationSize: 500 }
    this.stockinService.searchTanReg(postData).subscribe((resp: any) => {
      this.tankList = resp.data.contents
    });
  }

  tankSelect(val, pres) {
    // const capacity = this.tankList.find(item => item.id == val);
    // console.log(capacity,"tank obj")
    this.stockinService.gettankbyid(parseInt(val)).subscribe((datas: any) => {
      if (datas.status === "s") {
        pres.setValue({
          totalcapacity: datas.data.totalCapacity,
          availableCapacity: datas.data.availableCapacity,
          brix: datas.data.brix,
          gradeId: '',
          occupiedCapacity: datas.data.occupiedCapacity,
          quantity: '',
          tankId: val,
          trs: datas.data.trs,
        });
      }
    });
  }

  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }

}
