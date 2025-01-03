import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ApiService } from '@app/services';
@Component({
  selector: 'app-addeditdigitallocks',
  templateUrl: './addeditdigitallocks.component.html',
  styleUrls: ['./addeditdigitallocks.component.scss']
})
export class AddeditdigitallocksComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;

  digitallocksObj: any = {
    stockname: '',
    quantity: '',
    messurement: '',
    location: '',
    tank: '',
    status: true
  };
  date: any;
  locationlist = [{ id: 1, name: 'UAE' }, { id: 2, name: 'kenya' }];
  messurementlist = [{ id: 1, name: 'ltr' }, { id: 2, name: 'mltr' }];

  editId: any;
  formSubmitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private apiService: ApiService
  ) {

  }

  ngOnInit() {
    this.digitallocksObj.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  setData(id) {
    this.apiService.get('digitallocks/' + id).then(responceData => {
      console.log(responceData);
      this.digitallocksObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  adddigitallocks(stockForm) {
    this.formSubmitted = false;
    if (stockForm.valid === false) {
      this.formSubmitted = true;
    } else {
      if (this.editId) {
        const postParam = {
          openingDate: this.datepipe.transform(this.digitallocksObj.openingDate, 'yyyy-MM-dd'),
          reasonOpening: this.digitallocksObj.reasonOpening,
          openingTime: this.datepipe.transform(this.digitallocksObj.openingTime, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss')
        };

        console.log(postParam);
        const url = 'digitallockslist/' + this.editId;
        this.apiService.patch(url, postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/distillery/digitallocks/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        const postParam = {
          openingDate: this.datepipe.transform(this.digitallocksObj.openingDate, 'yyyy-MM-dd'),
          reasonOpening: this.digitallocksObj.reasonOpening,
          openingTime: this.datepipe.transform(this.digitallocksObj.openingTime, 'yyyy-MM-dd HH:mm:ss'),
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss')
        };
        console.log(postParam);
        this.apiService.post('digitallockslist', postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/distillery/digitallocks/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }
  }
  navigateCategoryList() {
    this.router.navigate(['/supplychainmanagement/distillery/digitallocks/list']);
  }
}
