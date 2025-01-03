import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';

@Component({
  selector: 'app-addeditorderallocation',
  templateUrl: './addeditorderallocation.component.html',
  styleUrls: ['./addeditorderallocation.component.scss']
})
export class AddeditorderallocationComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;

  orderallocationObj: any = {

  location: '',
  grade: '',
  orederid: '',
  availablequantity: '',
  allocatedquantity: ''
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
    this.orderallocationObj.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';

  }

  setData(id) {
    this.apiService.get('orderallocation/' + id).then(responceData => {
      console.log(responceData);
      this.orderallocationObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  addorderAloocation(orderallocationForm) {
    this.formSubmitted = false;
    // console.log(countryForm.valid);
    if (orderallocationForm.valid === false) {
      this.formSubmitted = true;
    } else {
      // console.log(this.countryObject);
      if (this.editId) {
        const postParam = {

          grade: this.orderallocationObj.grade,
          availablequantity: this.orderallocationObj.availablequantity,
          allocatedquantity: this.orderallocationObj.allocatedquantity,
          location: this.orderallocationObj.location,
          orederid: this.orderallocationObj.orederid,
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.orderallocationObj.status
        };

        console.log(postParam);
        const url = 'orderallocation/' + this.editId;
        this.apiService.patch(url, postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/sugarmills/orderallocation/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        // console.log(this.countryObject);
        const postParam = {
          grade: this.orderallocationObj.grade,
          availablequantity: this.orderallocationObj.availablequantity,
          allocatedquantity: this.orderallocationObj.allocatedquantity,
          location: this.orderallocationObj.location,
          orederid: this.orderallocationObj.orederid,
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.orderallocationObj.status
        };

        console.log(postParam);

        this.apiService.post('orderallocation', postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/sugarmills/orderallocation/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }
  }
  navigateCategoryList() {
    this.router.navigate(['/supplychainmanagement/sugarmills/orderallocation/list']);
  }


}
