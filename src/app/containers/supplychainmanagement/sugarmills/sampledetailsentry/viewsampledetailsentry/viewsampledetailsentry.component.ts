import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';

@Component({
  selector: 'app-viewsampledetailsentry',
  templateUrl: './viewsampledetailsentry.component.html',
  styleUrls: ['./viewsampledetailsentry.component.scss']
})
export class ViewsampledetailsentryComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;

  sampledetailObj: any = {

  date: '',
  grade: '',
  sendtowhom: '',
  reportdate: '',
  tank: '',
  trs: ''
  };
  date: any;
  locationlist = [{id: 1, name: 'Lucknow'}, {id: 2, name: 'Patna'}];
  gradeList = [{id: 1, name: 'A'}, {id: 2, name: 'B'}, {id: 3, name: 'C'}, {id: 4, name: 'D'}];
  messurementlist = [{id: 1, name: 'ltr'}, {id: 2, name: 'mltr'}];

  editId: any;
  formSubmitted = false;
  constructor(private route: ActivatedRoute, private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService) {
    // this.date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy')
  }

  ngOnInit() {
    this.sampledetailObj.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';

  }

  setData(id) {
    this.apiService.get('sampledetailentrylist/' + id).then(responceData => {
      console.log(responceData);
      this.sampledetailObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  Addsampledetail(sampleDetailForm) {
    this.formSubmitted = false;
    // console.log(countryForm.valid);
    if (sampleDetailForm.valid === false) {
      this.formSubmitted = true;
    } else {
      // console.log(this.countryObject);
      if (this.editId) {
        const postParam = {

          grade: this.sampledetailObj.grade,
          date: this.sampledetailObj.date,
          sendtowhom: this.sampledetailObj.sendtowhom,
          reportdate: this.sampledetailObj.reportdate,
          tank: this.sampledetailObj.tank,
          trs: this.sampledetailObj.trs,
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.sampledetailObj.status
        };

        console.log(postParam);
        const url = 'sampledetailentrylist/' + this.editId;
        this.apiService.patch(url, postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/sugarmills/sampledetailsentry/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        // console.log(this.countryObject);
        const postParam = {
          grade: this.sampledetailObj.grade,
          date: this.sampledetailObj.date,
          sendtowhom: this.sampledetailObj.sendtowhom,
          reportdate: this.sampledetailObj.reportdate,
          tank: this.sampledetailObj.tank,
          trs: this.sampledetailObj.trs,
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.sampledetailObj.status
        };

        console.log(postParam);

        this.apiService.post('sampledetailentrylist', postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/sugarmills/sampledetailsentry/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }
  }
  navigateCategoryList() {
    this.router.navigate(['/supplychainmanagement/sugarmills/sampledetailsentry/list']);
  }

}
