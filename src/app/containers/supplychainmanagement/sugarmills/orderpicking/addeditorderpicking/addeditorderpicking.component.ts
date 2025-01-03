import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';
import { AlertService } from '@app/services';


@Component({
  selector: 'app-addeditorderpicking',
  templateUrl: './addeditorderpicking.component.html',
  styleUrls: ['./addeditorderpicking.component.scss']
})
export class AddeditorderpickingComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;

  orderpickingObj: any = {
  stock: '',
  orderId: '',
  quantity: '',
  status: false
  };
  date: any;
  orderrequestList: any = [];
  locationlist = [{id: 1, name: 'Lucknow'}, {id: 2, name: 'Patna'}];
  gradeList = [{id: 1, name: 'A'}, {id: 2, name: 'B'}, {id: 3, name: 'C'}, {id: 4, name: 'D'}];
  messurementlist = [{id: 1, name: 'ltr'}, {id: 2, name: 'mltr'}];

  editId: any;
  formSubmitted = false;
  constructor(private route: ActivatedRoute, private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService, private alert: AlertService) {
    // this.date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy')
  }

  ngOnInit() {
    // this.orderpickingObj.status = false;
    this.getorderrequest();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';

  }

  getorderrequest() {
    this.apiService.get('orderrequest/').then((responceData: any) => {
      if (responceData.status == 's') {
        console.log(responceData);
        this.orderrequestList = responceData;
      }
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  // setData(id) {
  //   this.apiService.get('orderpickinglist/' + id).then(responceData => {
  //     console.log(responceData);
  //     this.orderpickingObj = responceData;
  //   }).catch((err: any) => {
  //     console.log('\n err...', err);
  //   });
  // }

  // api integration :: ss
  setData(id) {
    this.apiService.get('/orderPicking/getOrderPickingById?id=' + id).then((responceData: any) => {
      if (responceData.status == 's') {
        console.log(responceData);
        this.orderpickingObj = responceData.data;
      }

    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getorder(Zerosearch) {
    // alert('hi')
    const Searchvalue = Zerosearch;
    const value = Searchvalue.length;
    if (value >= 4 ) {
     const orderrequestobj = this.orderrequestList.filter((item) => {
        return item.orderid == Searchvalue;
      });
     this.orderpickingObj.stock = orderrequestobj[0].stock;
     this.orderpickingObj.quantity = orderrequestobj[0].quantity;

    } else {

    }
  }
  Addorderpicking(orderpickingForm) {
    this.formSubmitted = false;
    // console.log(countryForm.valid);
    if (orderpickingForm.valid === false) {
      this.formSubmitted = true;
    } else {
      // console.log(this.countryObject);
      if (this.editId) {
        const postParam = {
          id: this.editId,
          // stock: this.orderpickingObj.stock,
          stock: 'molasis',
          orderId: this.orderpickingObj.orderId,
          // quantity: this.orderpickingObj.quantity,
          quantity: '1000',
          status: this.orderpickingObj.status,
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.orderpickingObj.status
        };

        console.log(postParam);
        // const url = 'orderpickinglist/' + this.editId;
        const url = '/orderPicking/updateOrderPicking';
        this.apiService.put(url, postParam).then((responceData: any) => {
          if (responceData.status == 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/sugarmills/orderpicking/list']);
          } else {
            this.alert.showError(responceData.userDisplayMesg, 'error');
          }
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        const postParam = {
          // stock: this.orderpickingObj.stock,
          stock: 'molasis',
          orderId: this.orderpickingObj.orderId,
          // quantity: this.orderpickingObj.quantity,
          quantity: '1000',
          status: this.orderpickingObj.status,
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
        };

        console.log(postParam);

        this.apiService.post('/orderPicking/addOrderPicking ', postParam).then((responceData: any) => {
          if (responceData.status == 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/sugarmills/orderpicking/list']);
            console.log(responceData);
          } else {
            this.alert.showError(responceData.userDisplayMesg, 'error');
          }

        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }
  }
  navigateCategoryList() {
    this.router.navigate(['/supplychainmanagement/sugarmills/orderpicking/list']);
  }


}
