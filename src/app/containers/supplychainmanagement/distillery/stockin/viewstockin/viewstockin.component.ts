import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { StockinService, MasterapiService } from '@app/services';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-viewstockin',
  templateUrl: './viewstockin.component.html',
  styleUrls: ['./viewstockin.component.scss']
})
export class ViewstockinComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  stockFormGroup: FormGroup;
  stocinobj: any = {};
  date: any;
  locationlist = [{ id: 1, name: 'UAE' }, { id: 2, name: 'kenya' }];
  tankList: any = [];
  editId: any;
  formSubmitted = false;
  canesyrup: boolean;
  bheavy = false;
  cheavy = false;
  bruntmolasses = false;
  gradedmolasses = false;
  gradeList: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private masterapiService: MasterapiService,
    private stockinService: StockinService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.getTankLists();
    this.getGradeList();
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
      year: ['2019'],
      date: this.datepipe.transform(new Date(), 'dd-MM-yyyy'),
      canecrushed: [''],
      producedmolasses: [''],
      reservedmolasses: [''],
      freeleavymolasses: [''],
      bmolasses: [''],
      cmolasses: [''],
      burntmolasses: [''],
      belowmolasses: [''],
      canesyrup: [''],
      remarks: [''],
      inspectedby: [''],
      designation: [''],
      inspectedon: ['17-Sep-2020 05:23 PM'],
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
      grade: data && data.grade || '',
      tank: data && data.tank || '',
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
      this.stockFormGroup.patchValue({
        year: this.stocinobj.year,
        date: this.stocinobj.date,
        canecrushed: this.stocinobj.caneCrushed,
        producedmolasses: this.stocinobj.producedMolasses,
        reservedmolasses: this.stocinobj.reservedMolasses,
        freeleavymolasses: this.stocinobj.freeLeavyMolasses,
        bmolasses: this.stocinobj.bmolasses,
        cmolasses: this.stocinobj.cmolasses,
        burntmolasses: this.stocinobj.burntMolasses,
        belowmolasses: this.stocinobj.belowMolasses,
        canesyrup: this.stocinobj.caneSyrup === 'Cane Syrup' ? 'true' : 'false',
        canesyrupdetails: this.stocinobj.canesyrupdetails,
        remarks: this.stocinobj.remarks,
        inspectedby: this.stocinobj.inspectedBy,
        designation: this.stocinobj.designation,
        inspectedon: '17-Sep-2020 05:23 PM'
      });
      this.stocinobj.canesyrup === 'Cane Syrup' ? this.canesyrup = true : this.canesyrup = false;
      this.stocinobj.stockInDetail.forEach((element: any, idx: number) => {
        if (element.tank) {
          (this.stockFormGroup.get('stockInDetail') as FormArray).removeAt(idx);
          (this.stockFormGroup.get('stockInDetail') as FormArray).push(this.addFormGroupTable(element));
        }
      });
      this.molassesTypes(this.stocinobj.molassestype);
    })
  }

  navigateCategoryList() {
    this.router.navigate(['/supplychainmanagement/sugarmills/stockin/list']);
  }

  edit() {
    this.router.navigate(['/supplychainmanagement/sugarmills/stockin/edit', this.editId]);
  }

  getTankLists() {
    this.masterapiService.get(apiUrls.getAllTank).then((responceData: any) => {
      this.tankList = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getGradeList() {
    this.masterapiService.get(apiUrls.getAllGrade).then((responceData: any) => {
      this.gradeList = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  molassesTypes(val) {
    if (val == 'b-heavy') {
      this.bheavy = true;
      this.cheavy = false,
        this.bruntmolasses = false;
      this.gradedmolasses = false;
    } else if (val == 'c-heavy') {
      this.cheavy = true;
      this.bheavy = false,
        this.bruntmolasses = false;
      this.gradedmolasses = false;
    } else if (val == 'brunt') {
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

  getPrint() {
    let url = `transportgeneration/generatePrintViewById?id=403&code=MF4`;
    this.stockinService.getPrintData(url).subscribe((responceData: any) => {
      const newBlob = new Blob([responceData], { type: 'application/pdf' });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'StockIn'
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;
    })
  }
}
