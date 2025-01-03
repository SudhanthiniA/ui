import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ApiService } from '@app/services';

@Component({
  selector: 'app-addedit-molasses',
  templateUrl: './addedit-molasses.component.html',
  styleUrls: ['./addedit-molasses.component.scss']
})
export class AddeditMolassesComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;
  liquorList: Array<any> = [];
  molassesObj: any = {
    status : true
  };
  date: any;
  editId: any;
  formSubmitted = false;
  addedithead: any;
  categoryType = [
    {name: 'Distillery', value: 'Distillery'},
    {name: 'Warehouse', value: 'Warehouse'},
    {name: 'Wholesale', value: 'Wholesale'}
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.molassesObj.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
    this.addedithead = this.router.url.includes('add') === true ?
      'Enter Below Details to Add QR Code' : 'Enter Below Details to Edit QR Code';

  }

  setData(id) {
    this.apiService.get('molasseslist/' + id).then(responceData => {
      console.log(responceData);
      this.molassesObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  addMolasses(molassesForm) {
    this.formSubmitted = false;
    // console.log(countryForm.valid);
    if (molassesForm.valid === false) {
      this.formSubmitted = true;
    } else {
      // console.log(this.countryObject);
      if (this.editId) {
        const postParam = {
          requestedId: this.molassesObj.requestedId,
          location: this.molassesObj.location,
          requestedBy: this.molassesObj.requestedBy,
          status: this.molassesObj.status,
          date: this.molassesObj.date,
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
        };

        console.log(postParam);
        const url = 'molasseslist/' + this.editId;
        this.apiService.patch(url, postParam).then(responceData => {
          this.router.navigate(['/indentmanagement/molasses/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        // console.log(this.countryObject);
        const postParam = {
          requestedId: this.molassesObj.requestedId,
          location: this.molassesObj.location,
          requestedBy: this.molassesObj.requestedBy,
          status: this.molassesObj.status,
          date: this.molassesObj.date,
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
        };

        console.log(postParam);

        this.apiService.post('molasseslist', postParam).then(responceData => {
          this.router.navigate(['/indentmanagement/molasses/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }
  }
  navigateliquorList() {
    this.router.navigate(['indentmanagement/molasses/list']);
  }


}
