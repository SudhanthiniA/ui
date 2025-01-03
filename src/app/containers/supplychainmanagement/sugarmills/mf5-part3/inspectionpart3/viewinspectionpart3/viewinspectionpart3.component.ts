import { Component, OnInit } from '@angular/core';
import { SugarmillapiService } from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-viewinspectionpart3',
  templateUrl: './viewinspectionpart3.component.html',
  styleUrls: ['./viewinspectionpart3.component.scss']
})
export class Viewinspectionpart3Component implements OnInit {

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
    { id: 1, name: 'Date' },
    { id: 2, name: 'Tank Type' },
    { id: 3, name: 'Opening Stock By Account (Qtl)' },
    { id: 4, name: 'Quantity (Qtl)' },
    { id: 5, name: 'BRIX (%)' },
    { id: 6, name: 'Total Sugar (Qtl)' },
    { id: 7, name: 'Transfer from Tank (Qtl)' },
    { id: 8, name: 'Total(Qtl)' },
    { id: 9, name: 'Name of Distillery' },
    { id: 10, name: 'Quantity Supplied (Qtl)' },
    { id: 11, name: 'Name of O.S Shops' },
    { id: 12, name: 'Name of Ind Units (Qtl)' },
    { id: 13, name: 'Quantity Supplied (Qtl)' },
    { id: 14, name: 'Sold to Trade (Qtl)' },
    { id: 14, name: 'Total' },
    { id: 15, name: 'Closing Balance(In lakh Qtl)' },
    { id: 16, name: 'Layer' },
    { id: 17, name: 'BRIX (%)' },
    { id: 18, name: 'TRS(%)' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }

  setData(id?) {
    this.apiService.get(`${apiUrls.mfpart3GetById}${id}`).then((responceData: any) => {
      console.log(responceData);
      this.mf5part2Obj = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
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
        const url = 'mf5part3list/' + this.editId;
        this.apiService.patch(url, this.mf5part2Obj).then(responceData => {
          this.router.navigate(['/supplychainmanagement/sugarmills/mf5-part3/inspectionpart3/list']);
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
