import { Component, OnInit } from '@angular/core';
import { SugarmillapiService } from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addeditinspectionmf5partone',
  templateUrl: './addeditinspectionmf5partone.component.html',
  styleUrls: ['./addeditinspectionmf5partone.component.scss']
})
export class Addeditinspectionmf5partoneComponent implements OnInit {

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
  addedit: any;
  editId: any;
  tankList = [{ id: 1, name: 'Tank1' }, { id: 2, name: 'Tank2' }];

  constructor(private route: ActivatedRoute, private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService) {
    // this.date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy')
  }

  ngOnInit() {
    this.mffpartoneObj.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
    console.log(this.mffpartoneObj.date);
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  caltotalmolasses() {
    this.mffpartoneObj.total = this.mffpartoneObj.openstockbyaccount + this.mffpartoneObj.molassesrecivedonnewsesson;
  }

  calculatedispatchofmolasses() {

    this.mffpartoneObj.totaldispatchofmolasses = this.mffpartoneObj.dispatchmolassesondistellerys + this.mffpartoneObj.dispatchmolassesonosshops +
    this.mffpartoneObj.dispatchmolassesonindustrialunits + this.mffpartoneObj.tradeafterrelease;

  }

  setData(id) {
    this.apiService.get('inspectionmf5partone/' + id).then(responceData => {
      console.log(responceData);
      this.mffpartoneObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  saveData(form, status) {
    if (this.editId) {
      if (status === 1) {
        this.mffpartoneObj[`status`] = false;
      } else {
        this.mffpartoneObj[`status`] = true;
      }
      this.mffpartoneObj[`modified_by`] = 'Admin';
      this.mffpartoneObj[`modified_on`] = new Date();
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
      this.mffpartoneObj[`created_by`] = 'Admin';
      this.mffpartoneObj[`created_on`] = new Date();
      this.mffpartoneObj[`modified_by`] = 'Admin';
      this.mffpartoneObj[`modified_on`] = new Date();
      this.apiService.post('inspectionmf5partone', this.mffpartoneObj).then(responceData => {
        this.router.navigate(['/supplychainmanagement/sugarmills/inspectionmf5/list']);
        console.log(responceData);
      }).catch((err: any) => {
        console.log('\n err...', err);
      });
    }
  }


  previewcategory(form) {
    sessionStorage.setItem('formdata', JSON.stringify(form.value));
    this.router.navigate(['supplychainmanagement/sugarmills/inspectionmf5/preview']);
  }

}
