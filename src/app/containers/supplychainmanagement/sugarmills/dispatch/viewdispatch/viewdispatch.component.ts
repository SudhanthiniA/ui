import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';

@Component({
  selector: 'app-viewdispatch',
  templateUrl: './viewdispatch.component.html',
  styleUrls: ['./viewdispatch.component.scss']
})
export class ViewdispatchComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;

  dispatchObj: any = {
  stock: '',
  orderid: '',
  quantity: '',
  location: '',
  vehicaltype: ''
  // status: false
  };
  date: any;
  orderrequestList: any = [];
  vehicaltypelist = [{id: 1, name: 'van'}, {id: 2, name: 'Truck'}, {id: 3, name: 'Train'}, {id: 2, name: 'Flight'}, {id: 5, name: 'Ship'}];
  locationlist = [{id: 1, name: 'Lucknow'}, {id: 2, name: 'Patna'}];
  gradeList = [{id: 1, name: 'A'}, {id: 2, name: 'B'}, {id: 3, name: 'C'}, {id: 4, name: 'D'}];
  messurementlist = [{id: 1, name: 'ltr'}, {id: 2, name: 'mltr'}];
  sugarmillslist = [{name: 'name1'}, {name: 'name2'}, {name: 'name3'}];
  tanklist = [{name: 'name1'}, {name: 'name2'}, {name: 'name3'}];

  editId: any;
  formSubmitted = false;
  constructor(private route: ActivatedRoute, private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService) {
    // this.date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy')
  }

  ngOnInit() {
    // this.dispatchObj.status = false;
    // this.getorderrequest();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';

  }

  getorderrequest() {
    this.apiService.get('orderrequest/').then(responceData => {
      console.log(responceData);
      this.orderrequestList = responceData;


    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  setData(id) {
    this.apiService.get('dispatchlist/' + id).then(responceData => {
      console.log(responceData);
      this.dispatchObj = responceData;
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
     this.dispatchObj.stock = orderrequestobj[0].stock;
     this.dispatchObj.quantity = orderrequestobj[0].quantity;

    } else {

    }
  }
  Addtransport(dispatchForm) {
    this.formSubmitted = false;

    const postParam = {
      mfdate: this.dispatchObj.mfdate,
          transportpassno: this.dispatchObj.transportpassno,
          sugarmillname: this.dispatchObj.sugarmillname,
          address: this.dispatchObj.address,

          orderid: this.dispatchObj.orderid,
          orderdate: this.dispatchObj.orderdate,
          stock: this.dispatchObj.stock,
          distillery: this.dispatchObj.distillery,
          quantity: this.dispatchObj.quantity,

          vehicaltype: this.dispatchObj.vehicaltype,
          vehicalno: this.dispatchObj.vehicalno,
          drivername: this.dispatchObj.drivername,
          vehiclequantity: this.dispatchObj.vehiclequantity,
          location: this.dispatchObj.location,
          route: this.dispatchObj.route,

          tank: this.dispatchObj.tank,
          reportdate: this.dispatchObj.reportdate,
          sendtowhom: this.dispatchObj.sendtowhom,
          trs: this.dispatchObj.trs,
          brix: this.dispatchObj.brix,
          grade: this.dispatchObj.grade,
          beforeloadingofmolasses: this.dispatchObj.beforeloadingofmolasses,
          afterloadingofmolases: this.dispatchObj.afterloadingofmolases,
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
    };

    this.apiService.post('transportgenerationlist', postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/sugarmills/dispatch/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

    }
    // this.router.navigate(['/supplychainmanagement/sugarmills/dispatch/list']);

  navigateCategoryList() {
    this.router.navigate(['/supplychainmanagement/sugarmills/dispatch/list']);
  }


}
