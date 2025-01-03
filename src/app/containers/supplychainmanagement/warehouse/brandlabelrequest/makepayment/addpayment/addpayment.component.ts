import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LabelregestrationService } from '@app/services/ware-house';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.component.html',
  styleUrls: ['./addpayment.component.scss']
})
export class AddpaymentComponent implements OnInit {
  paymentobj = {
    applicationIdd:'',
    appdatee:'',
    lecensecategoryy:''
   
  }

  labelregester:any;
  paymentform:any
  formSubmitted:any = false;
  labeldata: any;
  constructor( private formbuilder: FormBuilder, 
               public labelservice:LabelregestrationService,
               private router: Router,
               private route: ActivatedRoute, private datepipe: DatePipe) { }

  ngOnInit() {
    this.labelregester = this.formbuilder.group({
     lablepayment:this.formbuilder.array ([this.formbuilders()]),
     brandpayment:this.formbuilder.array ([this.formbuilders2()])
    } )
    this.route.params.subscribe(params => {
      console.log('paramid',params);
       if (params.id) {
       console.log('param id',params.id)
            this.getbyid(params.id)
       }
     });
  }

  formbuilders() {
    return this.formbuilder.group({
      mapChallanForBrand:'',
    });
  }
  formbuilders2() {
    return this.formbuilder.group({
      mapChallanForLabel:'',
    });
  }

  addrow(){
    this.labelregester.get('lablepayment').push(this.formbuilders())
  }
  addrow1(){
    this.labelregester.get('brandpayment').push(this.formbuilders2())
  }

  getbyid(id){
    this.labelservice.getlablebyid(id).subscribe((responceData:any) =>{
      // console.log('getlabelbyid',responceData);
      this.labeldata = responceData.data;
      this.paymentobj.applicationIdd = this.labeldata.applicationNumber
    })
 }
addlabelpayment(){

  const dat = (this.labelregester.value.lablepayment).filter((datas: any) => {
   
      console.log(datas);
      if (datas) {
      return datas;
      }
      });
  const data = {
    "appdate": "2021-03-02T04:02:50.132Z",
    "applicationNumber": "string",
    "brandFees": 0,
    "brandName": "string",
    "brandRegistrationId": 0,
    "domainId": 0,
    "entityId": 0,
    "id": 0,
    "isactive": true,
    "labelFees": 0,
    "licenseTypeId": 0,
    "liquorCategoryId": 0,
    "remarks": "string",
    "requestLabelDetlist": [
      {
        "entityId": 0,
        "id": 0,
        "isactive": true,
        "mapChallanForBrand": "string",
        "mapChallanForLabel": "string",
        "remarks": "string",
        "status": "DRAFT"
      }
    ],
    "status": "DRAFT",
    "totalNofLabel": 0
  }

  this.labelservice.addmakepayment(data).subscribe((resp:any) =>{
    console.log('resp', resp)
  })
}
}
