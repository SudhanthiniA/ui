import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ApiService } from '@app/services';

@Component({
  selector: 'app-addeditrequitionofrawmaterial',
  templateUrl: './addeditrequitionofrawmaterial.component.html',
  styleUrls: ['./addeditrequitionofrawmaterial.component.scss']
})
export class AddeditrequitionofrawmaterialComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private datepipe: DatePipe, private apiService: ApiService) {
    // this.date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy')
  }

  addedit: any;
  curDate = new Date();
  name: any;
  liquorList: Array<any> = [];
  reqrawlists: any = {
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

  ngOnInit() {
    this.reqrawlists.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
    this.addedithead = this.router.url.includes('add') === true ? 'Enter Below Details to Add Raw Materials' : 'Enter Below Details to Edit Raw Materials';

  }

  setData(id) {
    this.apiService.get('reqrawlist/' + id).then(responceData => {
      console.log(responceData);
      this.reqrawlists = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  addRawMaterials(materialsForm) {
    this.formSubmitted = false;
    // console.log(countryForm.valid);
    if (materialsForm.valid === false) {
      this.formSubmitted = true;
    } else {
      // console.log(this.countryObject);
      if (this.editId) {
        const postParam = {
          productname: this.reqrawlists.productname,
          grade: this.reqrawlists.grade,
          requisitionqty: this.reqrawlists.requisitionqty,
          measurement: this.reqrawlists.measurement,
          requestdate: this.reqrawlists.requestdate,
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
        };

        console.log(postParam);
        const url = 'reqrawlist/' + this.editId;
        this.apiService.patch(url, postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/distillery/requitionofrawmaterial/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        // console.log(this.countryObject);
        const postParam = {
          productname: this.reqrawlists.productname,
          grade: this.reqrawlists.grade,
          requisitionqty: this.reqrawlists.requisitionqty,
          measurement: this.reqrawlists.measurement,
          requestdate: this.reqrawlists.requestdate,
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
        };

        console.log(postParam);

        this.apiService.post('reqrawlist', postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/distillery/requitionofrawmaterial/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }
  }
  navigateliquorList() {
    this.router.navigate(['supplychainmanagement/distillery/requitionofrawmaterial/list']);
  }



}
