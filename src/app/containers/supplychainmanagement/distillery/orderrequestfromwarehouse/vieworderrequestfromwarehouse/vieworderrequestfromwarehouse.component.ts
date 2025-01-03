import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { DatePipe } from '@angular/common';
import { ApiService } from '@app/services';
@Component({
  selector: 'app-vieworderrequestfromwarehouse',
  templateUrl: './vieworderrequestfromwarehouse.component.html',
  styleUrls: ['./vieworderrequestfromwarehouse.component.scss']
})
export class VieworderrequestfromwarehouseComponent implements OnInit {

  orderrequestwarehouseObj: any = {
    remarks: '',
    // status:false

  };
  curDate = new Date();
  viewId: any;
  formSubmitted = false;
  date: any;
constructor(private route: ActivatedRoute, private router: Router, private datepipe: DatePipe, private apiService: ApiService) { }

ngOnInit() {
  this.route.params.subscribe(params => {
    if (params.Id) {
      this.viewId = params.Id;
      this.setData(this.viewId);
    }
  });
  }


  AcceptForm(warehouseForm) {

    this.formSubmitted = false;
    // console.log(countryForm.valid);
    if (warehouseForm.valid === false) {
      this.formSubmitted = true;
    } else {
      // console.log(this.countryObject);
      if (this.viewId) {
        const postParam = {
          grade: this.orderrequestwarehouseObj.grade,
          orderid: this.orderrequestwarehouseObj.orderid,
          quantity: this.orderrequestwarehouseObj.quantity,
          requesteddate: this.orderrequestwarehouseObj.requesteddate,
          location: this.orderrequestwarehouseObj.location,
          stockName: this.orderrequestwarehouseObj.stockName,
          warehousename: this.orderrequestwarehouseObj.warehousename,
          remarks: this.orderrequestwarehouseObj.remarks,
          status: true,
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.orderrequestwarehouseObj.status
        };

        console.log(postParam);
        const url = 'orderrequestfromwarehouselist/' + this.viewId;
        this.apiService.patch(url, postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/distillery/orderrequestfromwarehouse/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        // console.log(this.countryObject);
        const postParam = {
          grade: this.orderrequestwarehouseObj.grade,
          orderid: this.orderrequestwarehouseObj.orderid,
          quantity: this.orderrequestwarehouseObj.quantity,
          requesteddate: this.orderrequestwarehouseObj.requesteddate,
          location: this.orderrequestwarehouseObj.location,
          stockName: this.orderrequestwarehouseObj.stockName,
          warehousename: this.orderrequestwarehouseObj.warehousename,
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.orderrequestwarehouseObj.status
        };

        console.log(postParam);

        this.apiService.post('orderrequestfromwarehouselist', postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/distillery/orderrequestfromwarehouse/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }

  }

  RejectForm(warehouseForm) {

    this.formSubmitted = false;
    // console.log(countryForm.valid);
    if (warehouseForm.valid === false) {
      this.formSubmitted = true;
    } else {
      // console.log(this.countryObject);
      if (this.viewId) {
        const postParam = {
          grade: this.orderrequestwarehouseObj.grade,
          orderid: this.orderrequestwarehouseObj.orderid,
          quantity: this.orderrequestwarehouseObj.quantity,
          requesteddate: this.orderrequestwarehouseObj.requesteddate,
          location: this.orderrequestwarehouseObj.location,
          stockName: this.orderrequestwarehouseObj.stockName,
          warehousename: this.orderrequestwarehouseObj.warehousename,
          remarks: this.orderrequestwarehouseObj.remarks,
          status: false,
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.orderrequestwarehouseObj.status
        };

        console.log(postParam);
        const url = 'orderrequestfromwarehouselist/' + this.viewId;
        this.apiService.patch(url, postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/distillery/orderrequestfromwarehouse/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        // console.log(this.countryObject);
        const postParam = {
          grade: this.orderrequestwarehouseObj.grade,
          orderid: this.orderrequestwarehouseObj.orderid,
          quantity: this.orderrequestwarehouseObj.quantity,
          requesteddate: this.orderrequestwarehouseObj.requesteddate,
          location: this.orderrequestwarehouseObj.location,
          stockName: this.orderrequestwarehouseObj.stockName,
          warehousename: this.orderrequestwarehouseObj.warehousename,
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.orderrequestwarehouseObj.status
        };

        console.log(postParam);

        this.apiService.post('orderrequestfromwarehouselist', postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/distillery/orderrequestfromwarehouse/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }

  }




    setData(id) {
      this.apiService.get('orderrequestfromwarehouselist/' + id).then(responceData => {
        console.log(responceData);
        this.orderrequestwarehouseObj = responceData;
      }).catch((err: any) => {
        console.log('\n err...', err);
      });
    }


}
