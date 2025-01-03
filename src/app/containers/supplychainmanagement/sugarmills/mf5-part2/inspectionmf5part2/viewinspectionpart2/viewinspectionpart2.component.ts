import { Component, OnInit } from '@angular/core';
import { SugarmillapiService } from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-viewinspectionpart2',
  templateUrl: './viewinspectionpart2.component.html',
  styleUrls: ['./viewinspectionpart2.component.scss']
})
export class Viewinspectionpart2Component implements OnInit {

  mf5part2Obj: any = {
    serialnooftank: '',
    tanktype: '',
    capacity: '',
    dimensionspage: '',
    dimensions: '',
    reqdate: '',
    openstock: '',
    quantity: '',
    brix: '',
    totalsugar: '',
    transferfromtank: '',
    molassestotal: '',
    nameofdistillery: '',
    quantitysuppliedmolasses: '',
    nameofosshops: '',
    nameodindunits: '',
    quantitysupplied: '',
    soldtotrade: '',
    quantitysuppliedtotal: '',
    closingbalance: '',
    layer: '',
    analysbrix: '',
    percentageoftotalsugar: '',
    remarks: '',
    // remarks2:'',
    status: ''
  };
  formSubmitted = false;
  addedit: any;
  editId: any;
  tankList = [{ id: 1, name: 'Tank1' }, { id: 2, name: 'Tank2' }];
  showLeble = false;
  displayList = [];
  lebleList = [
    { id: 1, name: 'Quantity (Qtl)' },
    { id: 2, name: 'BRIX (%)' },
    { id: 3, name: 'Total Sugar (Qtl)' },
    { id: 4, name: 'Transfer from Tank (Qtl)' },
    { id: 5, name: 'Total(Qtl)' },
    { id: 6, name: 'Name of Distillery' },
    { id: 7, name: 'Quantity Supplied (Qtl)' },
    { id: 8, name: 'Name of O.S Shops' },
    { id: 9, name: 'Name of Ind Units (Qtl)' },
    { id: 10, name: 'Quantity Supplied (Qtl)' },
    { id: 11, name: 'Sold to Trade (Qtl)' },
    { id: 12, name: 'Total' },
    { id: 13, name: 'Closing Balance(In lakh Qtl)' },
    { id: 14, name: 'Layer' },
    { id: 14, name: 'BRIX (%)' },
    { id: 15, name: 'TRS(%)' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private apiService: SugarmillapiService
  ) {
    // this.date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy')
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else {
        this.setData();
      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }

  setData(id?) {
    if (id) {
      this.apiService.get('molassesFormat/getMolassesFormatById?id=' + id).then((responceData: any) => {
        this.mf5part2Obj = responceData.data;
        this.mf5part2Obj.nameOfIndUnits = Number(this.mf5part2Obj.nameOfIndUnits);
        this.caltotalmolasses();
        this.calQtySupplied();
      }).catch((err: any) => {
        console.log('\n err...', err);
      });
    } else {
      this.mf5part2Obj = JSON.parse(sessionStorage.getItem('formdata'));
    }
  }

  getLeble(e) {
    if (e.target.value.indexOf('@') !== -1) {
      const arr = e.target.value.split('@');
      let lastValue = arr[arr.length - 1];
      lastValue = lastValue.trim();
      this.displayList = this.lebleList.filter(x => x.name.toLowerCase().includes(lastValue.toLowerCase()));
      if (this.displayList.length > 0) {
        this.showLeble = true;
      } else {
        this.showLeble = false;
      }
    } else {
      this.showLeble = false;
    }
  }

  addValue(val) {
    const remarksInp = document.getElementById('remarks') as HTMLTextAreaElement;
    const arrNew = remarksInp.value.split('@');
    let strValue = '';
    for (let i = 0; i <= (arrNew.length - 1); i++) {
      if (arrNew[i] !== '') {
        strValue = strValue + ' @' + arrNew[i];
      }
    }
    remarksInp.value = strValue + ' @' + val;
    remarksInp.value = remarksInp.value.trim() + ' ';
    this.showLeble = false;
    remarksInp.focus();
  }

  saveData(form) {

    this.formSubmitted = false;
    // console.log(countryForm.valid);
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {

        this.mf5part2Obj.status = 'Verified';
        this.mf5part2Obj[`modifiedBy`] = 'Excise';
        this.mf5part2Obj[`modifiedOn`] = new Date();
        const url = 'mf5part2list/' + this.editId;
        this.apiService.patch(url, this.mf5part2Obj).then(responceData => {
          this.router.navigate(['/supplychainmanagement/sugarmills/mf5-part2/inspectionpart2/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {

      }
    }
  }

  caltotalmolasses() {
    this.mf5part2Obj.molassestotal = this.mf5part2Obj.openstock - this.mf5part2Obj.brix;
  }
  calQtySupplied() {
    this.mf5part2Obj.quantitysuppliedtotal = this.mf5part2Obj.nameodindunits +
      this.mf5part2Obj.quantitysupplied + this.mf5part2Obj.soldtotrade;
    this.mf5part2Obj.closingbalance = this.mf5part2Obj.openstock - this.mf5part2Obj.quantitysupplied;
  }
}
