import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';

@Component({
  selector: 'app-viewinspection',
  templateUrl: './viewinspection.component.html',
  styleUrls: ['./viewinspection.component.scss']
})
export class ViewinspectionComponent implements OnInit {

  addedit: string;

  constructor(private route: ActivatedRoute, private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService) {
    // this.date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy')
  }
  inspectionData: any = {

    session: '2019-2020',
    date: '',
    openingstock: '',
    inspectiondate: '',
    inspectiontype: '',
    tankname: '',
    dip: '',
    deapthifmolasses: '',
    trs: '',
    brix: '',
    wastage: '',
    layer: '',
    analyst: 'Avinash',
    validateby: 'Susheel(EI)',
    remarks: '',
    method: 'submit',
    modifiedBy: 'Excise',
    modifiedOn: '2020-11-04T11:57:45.505Z',

  };
  editId: any;
  formSubmitted = false;

  showLeble = false;
  displayList = [];
  lebleList = [
    { id: 1, name: 'Season Year' },
    { id: 2, name: 'Date' },
    { id: 3, name: 'Opening Stock(Qtl)' },
    { id: 4, name: 'Inspection Date' },
    { id: 5, name: 'Inspection Type' },
    { id: 6, name: 'Tank Name' },
    { id: 7, name: 'Dip(cms)' },
    { id: 8, name: 'Deapth of Molasses in tank(cms)' },
    { id: 9, name: 'TRS(%)' },
    { id: 10, name: 'BRIX(%)' },
    { id: 11, name: 'Layer (Top,Mid & Bottom)' },
    { id: 12, name: 'Wastage' },
    { id: 13, name: 'Analyst' },
    { id: 14, name: 'Validate By' },
  ];




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

  // setData(id?: any) {
  //   if (id) {
  //     this.apiService.get('exciseofficerinspectionList/' + id).then(responceData => {
  //       console.log(responceData);
  //       this.inspectionData = responceData;
  //       this.inspectionData.remarks = '';
  //     }).catch((err: any) => {
  //       console.log('\n err...', err);
  //     });
  //   } else {
  //     this.inspectionData = JSON.parse(sessionStorage.getItem('formdata'));
  //   }
  // }

  setData(id?: any) {
    this.apiService.get('/inspectionreport/getInspectionReportById?id=' + id).then((responceData: any) => {
      if (responceData.status = 's') {
        console.log(responceData.data);
        this.inspectionData = responceData.data;
      } else {
        // this.alert.showError(responceData.userDisplayMesg, 'error');
      }

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
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
    if (this.editId) {
      this.inspectionData.status = true;
      this.inspectionData[`modifiedBy`] = 'Excise Officer';
      this.inspectionData[`modifiedOn`] = new Date();
      const url = 'exciseofficerinspectionList/' + this.editId;
      this.apiService.patch(url, this.inspectionData).then(responceData => {
        this.router.navigate(['/supplychainmanagement/sugarmills/inspectionreport/exciseofficer/list']);
      }).catch((err: any) => {
        console.log('\n err...', err);
      });
    }
  }

  }
}
