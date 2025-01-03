import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { DatePipe } from '@angular/common';
import { ApiService } from '@app/services';

@Component({
  selector: 'app-vieworderrequestfromwholesale',
  templateUrl: './vieworderrequestfromwholesale.component.html',
  styleUrls: ['./vieworderrequestfromwholesale.component.scss']
})
export class VieworderrequestfromwholesaleComponent implements OnInit {

  orderrequestwholesaleObj: any = {
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


  AcceptForm(wholesaleForm) {

    this.formSubmitted = false;
    // console.log(countryForm.valid);
    if (wholesaleForm.valid === false) {
      this.formSubmitted = true;
    } else {
      // console.log(this.countryObject);
      if (this.viewId) {
        const postParam = {
          grade: this.orderrequestwholesaleObj.grade,
          orderid: this.orderrequestwholesaleObj.orderid,
          quantity: this.orderrequestwholesaleObj.quantity,
          requesteddate: this.orderrequestwholesaleObj.requesteddate,
          location: this.orderrequestwholesaleObj.location,
          stockName: this.orderrequestwholesaleObj.stockName,
          wholesalename: this.orderrequestwholesaleObj.wholesalename,
          remarks: this.orderrequestwholesaleObj.remarks,
          status: true,
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.orderrequestwholesaleObj.status
        };

        console.log(postParam);
        const url = 'orderrequestfromwholesalelist/' + this.viewId;
        this.apiService.patch(url, postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/distillery/orderrequestfromwholesale/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        // console.log(this.countryObject);
        const postParam = {
          grade: this.orderrequestwholesaleObj.grade,
          orderid: this.orderrequestwholesaleObj.orderid,
          quantity: this.orderrequestwholesaleObj.quantity,
          requesteddate: this.orderrequestwholesaleObj.requesteddate,
          location: this.orderrequestwholesaleObj.location,
          stockName: this.orderrequestwholesaleObj.stockName,
          wholesalename: this.orderrequestwholesaleObj.wholesalename,
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.orderrequestwholesaleObj.status
        };

        console.log(postParam);

        this.apiService.post('orderrequestfromwholesalelist', postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/distillery/orderrequestfromwholesale/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }

  }

  RejectForm(wholesaleForm) {

    this.formSubmitted = false;
    // console.log(countryForm.valid);
    if (wholesaleForm.valid === false) {
      this.formSubmitted = true;
    } else {
      // console.log(this.countryObject);
      if (this.viewId) {
        const postParam = {
          grade: this.orderrequestwholesaleObj.grade,
          orderid: this.orderrequestwholesaleObj.orderid,
          quantity: this.orderrequestwholesaleObj.quantity,
          requesteddate: this.orderrequestwholesaleObj.requesteddate,
          location: this.orderrequestwholesaleObj.location,
          stockName: this.orderrequestwholesaleObj.stockName,
          wholesalename: this.orderrequestwholesaleObj.wholesalename,
          remarks: this.orderrequestwholesaleObj.remarks,
          status: false,
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.orderrequestwholesaleObj.status
        };

        console.log(postParam);
        const url = 'orderrequestfromwholesalelist/' + this.viewId;
        this.apiService.patch(url, postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/distillery/orderrequestfromwholesale/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        // console.log(this.countryObject);
        const postParam = {
          grade: this.orderrequestwholesaleObj.grade,
          orderid: this.orderrequestwholesaleObj.orderid,
          quantity: this.orderrequestwholesaleObj.quantity,
          requesteddate: this.orderrequestwholesaleObj.requesteddate,
          location: this.orderrequestwholesaleObj.location,
          stockName: this.orderrequestwholesaleObj.stockName,
          wholesalename: this.orderrequestwholesaleObj.wholesalename,
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.orderrequestwholesaleObj.status
        };

        console.log(postParam);

        this.apiService.post('orderrequestfromwholesalelist', postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/distillery/orderrequestfromwholesale/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }

  }




    setData(id) {
      this.apiService.get('orderrequestfromwholesalelist/' + id).then(responceData => {
        console.log(responceData);
        this.orderrequestwholesaleObj = responceData;
      }).catch((err: any) => {
        console.log('\n err...', err);
      });
    }


}
