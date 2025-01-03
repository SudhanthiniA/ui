import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-previewstock',
  templateUrl: './previewstock.component.html',
  styleUrls: ['./previewstock.component.scss']
})
export class PreviewstockComponent implements OnInit {

  mffpartoneObj: any = {
    created_by: 'Admin',
    created_on: '2020-11-06T13:28:10.778Z',
    date: '2020-11-06',
    dispatchmolassesondistellerys: 1100,
    dispatchmolassesonindustrialunits: 124,
    dispatchmolassesonosshops: 123,
    id: 1,
    modified_by: 'Admin',
    modified_on: '2020-11-06T13:28:16.566Z',
    molassesrecivedonnewsesson: 124,
    openstockbyaccount: 14,
    quantityfree: '1144',
    quantitylevy: 1133,
    remarks: '1155',
    status: true,
    total: 1211,
    totaldispatchofmolasses: 114,
    totalsugarquantity: 1122,
    tradeafterrelease: 1211111
  };

  mf5part2Obj: any = {
    serialnooftank: 123,
    tanktype: 'Tank1',
    capacity: 234,
    dimensionspage: 2322,
    dimensions: 2323,
    reqdate: '2020-11-06',
    openstock: 233,
    quantity: 323,
    brix: 323,
    totalsugar: 323,
    transferfromtank: 2323,
    molassestotal: 302,
    nameofdistillery: '232',
    quantitysuppliedmolasses: 323,
    nameofosshops: '323',
    nameodindunits: 'Name1',
    quantitysupplied: 232,
    soldtotrade: 23,
    quantitysuppliedtotal: 232,
    closingbalance: 2305,
    layer: 2323,
    analysbrix: 232,
    percentageoftotalsugar: 232,
    remarks: 'Remarks',
    status: 'Submiited',
    createdBy: 'Admin',
    createdOn: '2020-11-06T06:37:46.968Z',
    id: 1,
    modifiedBy: 'Admin',
    modifiedOn: '2020-11-06T06:37:46.968Z'
  };
  addedit: any;
  curDate = new Date();
  name: any;
  stockFormGroup: FormGroup;
  stocinobj: any = JSON.parse(sessionStorage.getItem('formdata'));
  date: any;
  locationlist = [{ id: 1, name: 'UAE' }, { id: 2, name: 'kenya' }];
  tankList = [{ id: 1, name: 'Molasses 1' }, { id: 2, name: 'Molasses 2' }];
  totalTankList = [{ id: 1, name: 'Tank 1' }, { id: 2, name: 'Tank 2' }, { id: 3, name: 'Tank 3' }];
  editId: any;
  formSubmitted = false;
  canesyrup: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private apiService: SugarmillapiService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.setData();
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
      canesyrupdetails: [''],
      remarks: ['Sample Remarks'],
      inspectedby: ['Akhileshwar'],
      designation: ['Excise Inspector'],
      inspectedon: ['17-Sep-2020 05:23 PM'],
      stockindetails: this.formBuilder.array([
        this.addFormGroupTable()
      ])
    });
  }

  addFormGroupTable(data?: any): FormGroup {
    return this.formBuilder.group({
      trs: data && data.trs || '',
      bricks: data && data.bricks || '',
      quantity: data && data.quantity || '',
      grade: data && data.grade || '',
      tank: data && data.tank || '',
      totalcapacity: data && data.totalcapacity || '',
      availablecapacity: data && data.availablecapacity || '',
      occupiedcapacity: data && data.occupiedcapacity || ''
    });
  }

  public addEmptyCtrl(): void {
    (this.stockFormGroup.get('stockindetails') as FormArray).push(this.addFormGroupTable());
  }

  public getPresFormLength(): number {
    return (this.stockFormGroup.get('stockindetails') as FormArray).length;
  }

  addNewRow(rowId) {
    this.addEmptyCtrl();
  }

  public removeSelectedRow(idx: number) {
    (this.stockFormGroup.get('stockindetails') as FormArray).removeAt(idx);
  }

  setData() {
    this.stockFormGroup.patchValue({
      year: this.stocinobj.year,
      date: this.stocinobj.date,
      canecrushed: this.stocinobj.canecrushed,
      producedmolasses: this.stocinobj.producedmolasses,
      reservedmolasses: this.stocinobj.reservedmolasses,
      freeleavymolasses: this.stocinobj.freeleavymolasses,
      bmolasses: this.stocinobj.bmolasses,
      cmolasses: this.stocinobj.cmolasses,
      burntmolasses: this.stocinobj.burntmolasses,
      belowmolasses: this.stocinobj.belowmolasses,
      canesyrup: this.stocinobj.canesyrup === 'true' ? 'true' : 'false',
      canesyrupdetails: this.stocinobj.canesyrupdetails,
      remarks: 'Sample Remarks',
      inspectedby: 'Akhileshwar',
      designation: 'Excise Inspector',
      inspectedon: '17-Sep-2020 05:23 PM'
    });
    this.stocinobj.canesyrup === 'true' ? this.canesyrup = true : this.canesyrup = false;
    this.stocinobj.stockindetails.forEach((element: any, idx: number) => {
      if (element.tank) {
        (this.stockFormGroup.get('stockindetails') as FormArray).removeAt(idx);
        (this.stockFormGroup.get('stockindetails') as FormArray).push(this.addFormGroupTable(element));
        this.addEmptyCtrl();
      }
    });
    console.log(this.stockFormGroup);



  }

  addstock(stockForm) {
    this.formSubmitted = false;
    if (stockForm.valid === false) {
      this.formSubmitted = true;
    } else {
      if (this.editId) {
        const postParam = {
          year: this.stockFormGroup.value.year,
          date: this.stockFormGroup.value.date,
          canecrushed: this.stockFormGroup.value.canecrushed,
          producedmolasses: this.stockFormGroup.value.producedmolasses,
          stockindetails: this.stockFormGroup.value.stockindetails,
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss')
        };

        console.log(postParam);
        const url = 'stockin/' + this.editId;
        this.apiService.patch(url, postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/sugarmills/stockin/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        const postParam = {
          year: this.stockFormGroup.value.year,
          date: this.stockFormGroup.value.date,
          canecrushed: this.stockFormGroup.value.canecrushed,
          producedmolasses: this.stockFormGroup.value.producedmolasses,
          stockindetails: this.stockFormGroup.value.stockindetails,
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
        };
        this.apiService.post('stockin', postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/sugarmills/stockin/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }
  }

  navigateCategoryList() {
    this.router.navigate(['/supplychainmanagement/sugarmills/stockin/list']);
  }

  caltotalmolasses() {
    this.mf5part2Obj.molassestotal = this.mf5part2Obj.openstock - this.mf5part2Obj.brix;
  }

  calQtySupplied() {
    this.mf5part2Obj.quantitysuppliedtotal = this.mf5part2Obj.nameodindunits + this.mf5part2Obj.quantitysupplied + this.mf5part2Obj.soldtotrade;
    this.mf5part2Obj.closingbalance = this.mf5part2Obj.openstock - this.mf5part2Obj.quantitysupplied;
  }
  
  printthedoc() {
    alert('yes');
    const data = '?id=403&code=MF4';
    this.apiService.get(`${apiUrls.mf9print}${data}`).then((responceData: any) => {
      const newBlob = new Blob([responceData], { type: 'application/pdf' });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'MF9'
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;
      
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
}
