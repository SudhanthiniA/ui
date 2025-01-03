import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ApiService } from '@app/services';

@Component({
  selector: 'app-view-molasses',
  templateUrl: './view-molasses.component.html',
  styleUrls: ['./view-molasses.component.scss']
})
export class ViewMolassesComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;
  liquorList: Array<any> = [];
  liquorObj: any = {
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
  ) {
    // this.date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy')
  }

  ngOnInit() {
    this.liquorObj.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    this.addedithead = this.router.url.includes('add') == true ?
      'Enter Below Details to Add QR Code' : 'Enter Below Details to Edit QR Code';
  }

  setData(id) {
    this.apiService.get('indliquorlist/' + id).then(responceData => {
      console.log(responceData);
      this.liquorObj = responceData;
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
          requestedId: this.liquorObj.requestedId,
          location: this.liquorObj.location,
          requestedBy: this.liquorObj.requestedBy,
          status: this.liquorObj.status,
          remarks: this.liquorObj.remarks,
          date: this.liquorObj.date,
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
        };

        console.log(postParam);
        const url = 'indliquorlist/' + this.editId;
        this.apiService.patch(url, postParam).then(responceData => {
          this.router.navigate(['/indentmanagement/liquor/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        // console.log(this.countryObject);
        const postParam = {
          requestedId: this.liquorObj.requestedId,
          location: this.liquorObj.location,
          requestedBy: this.liquorObj.requestedBy,
          status: this.liquorObj.status,
          date: this.liquorObj.date,
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
        };

        console.log(postParam);

        this.apiService.post('indliquorlist', postParam).then(responceData => {
          this.router.navigate(['/indentmanagement/liquor/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }
  }

  navigateliquorList() {
    this.router.navigate(['indentmanagement/liquor/list']);
  }

}
