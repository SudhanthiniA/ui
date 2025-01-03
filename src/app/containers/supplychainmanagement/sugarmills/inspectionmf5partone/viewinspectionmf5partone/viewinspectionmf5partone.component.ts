import { Component, OnInit } from '@angular/core';
import { SugarmillapiService } from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-viewinspectionmf5partone',
  templateUrl: './viewinspectionmf5partone.component.html',
  styleUrls: ['./viewinspectionmf5partone.component.scss']
})
export class Viewinspectionmf5partoneComponent implements OnInit {

  mffpartoneObj: any = {
    date: '',
    openstockbyaccount: '',
    totaldispatchofmolasses: '',
    molassesrecivedonnewsesson: '',
    dispatchmolassesondistellerys: '',
    dispatchmolassesonosshops: '',
    dispatchmolassesonindustrialunits: '',
    tradeafterrelease: '',
    quantityfree: '',
    quantitylevy: '',
    total: '',
    totalsugarquantity: '',
    remarks: '',
    status: false
  };
  editId: any;
  addedit: any;
  tankList = [{ id: 1, name: 'Tank1' }, { id: 2, name: 'Tank2' }];


  showLeble = false;
  displayList = [];
  lebleList = [
    { id: 1, name: 'Date' },
    { id: 2, name: 'Opening Stock by account (In Lakh qtl.)' },
    { id: 3, name: 'Molasses on new season received on date (In Qtl.)' },
    { id: 4, name: 'Total (In lakh qtl.)' },
    { id: 5, name: 'Distillery(In Qtl)' },
    { id: 6, name: 'O.S Shops(In Qtl.)' },
    { id: 7, name: 'Industrial Units(In Qtl.)' },
    { id: 8, name: 'Trade after Release(In Qtl.)' },
    { id: 9, name: 'Total (In lakh qtl.)' },
    { id: 10, name: 'Total Sugar Quantity' },
    { id: 11, name: 'Quantity Levy(Qtls)' },
    { id: 12, name: 'Quantity Free(Qtls)' },
  ];


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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private apiService: SugarmillapiService
  ) {
    // this.date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy')
  }

  ngOnInit() {
    this.mffpartoneObj.date = new Date();
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
      this.apiService.get('mF5Part1register/getMF5Part1RegisterById?id=' + id).then((responceData: any) => {
        console.log(responceData);
        this.mffpartoneObj = responceData.data;
        this.mffpartoneObj.remarks = '';
      }).catch((err: any) => {
        console.log('\n err...', err);
      });

    } else {
      this.mffpartoneObj = JSON.parse(sessionStorage.getItem('formdata'));
    }

  }
  saveData(form, status) {
    console.log(this.mffpartoneObj[`remarks`]);
    if (this.editId) {
      if (status === 2) {
        this.mffpartoneObj[`status`] = true;
      } else {
        this.mffpartoneObj[`status`] = false;
      }
      this.mffpartoneObj[`modifiedBy`] = 'Admin';
      this.mffpartoneObj[`modifiedOn`] = new Date();
      const url = 'inspectionmf5partone/' + this.editId;
      this.apiService.patch(url, this.mffpartoneObj).then(responceData => {
        this.router.navigate(['/supplychainmanagement/sugarmills/inspectionmf5/list']);
      }).catch((err: any) => {
        console.log('\n err...', err);
      });
    } else {
      if (status === 2) {
        this.mffpartoneObj[`status`] = true;
      } else {
        this.mffpartoneObj[`status`] = false;
      }
      this.mffpartoneObj[`createdBy`] = 'Admin';
      this.mffpartoneObj[`createdOn`] = new Date();
      this.apiService.post('inspectionmf5partone', this.mffpartoneObj).then(responceData => {
        this.router.navigate(['/supplychainmanagement/sugarmills/inspectionmf5/list']);
        console.log(responceData);
      }).catch((err: any) => {
        console.log('\n err...', err);
      });
    }
  }


}
