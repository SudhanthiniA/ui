import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addeditorderverification',
  templateUrl: './addeditorderverification.component.html',
  styleUrls: ['./addeditorderverification.component.scss']
})
export class AddeditorderverificationComponent implements OnInit {

  orderObj: any;
  curDate = new Date();
  formSubmitted = false;

  constructor(
    private apiservice: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private datepipe: DatePipe
  ) { }

  ngOnInit() {
  }

  // getDetails(){
  //   console.log(this.orderObj['requitionid']);
  // }

  getDetails() {
    this.apiservice.get('reqrawlist/' + this.orderObj.id).then(responceData => {
      console.log(responceData);
      this.orderObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  orderVerification(orderForm) {
    this.formSubmitted = false;
    // console.log(countryForm.valid);
    if (orderForm.valid === false) {
      this.formSubmitted = true;
    } else {
      // console.log(this.countryObject);
      const postParam = {
        requitionid: this.orderObj.id,
        productname: this.orderObj.productname,
        grade: this.orderObj.grade,
        requisitionqty: this.orderObj.requisitionqty,
        qtywighbridge: 400,
        created_by: 'Admin',
        created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
        modified_by: 'Admin',
        modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
      };

      console.log(postParam);

      this.apiservice.post('orderverificationlist', postParam).then(responceData => {
        this.router.navigate(['/supplychainmanagement/distillery/orderverification/list']);
        console.log(responceData);
      }).catch((err: any) => {
        console.log('\n err...', err);
      });


    }
  }

}
