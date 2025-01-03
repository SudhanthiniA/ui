import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import{IndentAcceptanceService} from '@app/services/wholesale';
import {AlertService, ApiService} from '@app/services'

@Component({
  selector: 'app-viewindentacceptance',
  templateUrl: './viewindentacceptance.component.html',
  styleUrls: ['./viewindentacceptance.component.scss']
})
export class ViewindentacceptanceComponent implements OnInit {
  IndentAcceptanceObj:any={}
  IndentAcceptanceObj1:any;
  IndentAcceptanceOrderStatus:any;
  addedit:any
  Indentprodlist:any;
  balanceamaount:any;
  IndentorderStatus = false;
  indentOrderstatus:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private alert: AlertService,
    private IndentAcceptanceService: IndentAcceptanceService,
    private apiservice:ApiService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getIndentAcceptanceById(params.id);
        this.IndentAcceptanceObj.id = params.id;
       console.log(this.IndentAcceptanceObj.id)
        // this.addedit = 'Edit';

      }
      if(params.orderStatus){
        this.IndentAcceptanceOrderStatus = params.orderStatus;
        console.log( this.IndentAcceptanceOrderStatus)
      //   if( this.IndentAcceptanceOrderStatus === 'ACCEPTED' || this.IndentAcceptanceOrderStatus === 'REJECTED'){
      //     this.IndentorderStatus = true;
      // }
      }
      
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'view';
    console.log('router url--->>',this.addedit);
  }
  getIndentAcceptanceById(id) {
    // const url = 'IndentAcceptanceList'+'/'+id
    this.IndentAcceptanceService.getindent(id).subscribe((response:any)=>{
      this.IndentAcceptanceObj = response.data;
      this.IndentAcceptanceObj1 = this.IndentAcceptanceObj.indentRequest;
      this.indentOrderstatus = response.data.indentRequest.orderStatus
      console.log( 'mystat==', this.indentOrderstatus)
     if(this.indentOrderstatus == 'ACCEPTED' || this.indentOrderstatus == 'REJECTED'){
       this.IndentorderStatus = true;
     }
      this.Indentprodlist = this.IndentAcceptanceObj.indentRequest.indentProductList;
      this.balanceamaount = this.IndentAcceptanceObj.indentRequest.indentPaymentDetails.totalCost-this.IndentAcceptanceObj.indentRequest.indentPaymentDetails.advancedAmt
      console.log(this.IndentAcceptanceObj);
    })
  }
  Accept(){
   let params = {
        "approvalStatus": "ACCEPTED",
        "indentNo": this.IndentAcceptanceObj.indentNo,
        // "completedStatus": "COMPLETED",
        "indentDate": this.IndentAcceptanceObj.indentDate,
        "totBottlesRequested": this.IndentAcceptanceObj.indentRequest.totalNoOfBottles,
        "totCasesRequested": this.IndentAcceptanceObj.indentRequest.totalNoOfCases,
        "unitName": this.IndentAcceptanceObj.indentRequest.unitName,
        "transportPassStatus": "PENDING",
        "orderPickUpStatus": "PENDING",
    }
    console.log(params)
    this.IndentAcceptanceService.addindent(params).subscribe((response:any)=>{
      if(response.status == "s"){
        this.alert.showSuccess(response.userDisplayMesg, "Success");
        this.router.navigate(['/supplychainmanagement/wholesale/indentacceptance/list']) 
      }
      else{
        this.alert.showError(response.userDisplayMesg, "Error");
      }
    }) 
  }
  Reject(){
    let params = {
      "approvalStatus": "REJECTED",
      "indentNo": this.IndentAcceptanceObj.indentNo,
        // "completedStatus": "PARTIALLYCOMPLETED",
        "indentDate": this.IndentAcceptanceObj.indentDate,
        "totBottlesRequested": this.IndentAcceptanceObj.indentRequest.totalNoOfBottles,
        "totCasesRequested": this.IndentAcceptanceObj.indentRequest.totalNoOfCases,
        "unitName": this.IndentAcceptanceObj.indentRequest.unitName,
        "transportPassStatus": "PENDING",
        "orderPickUpStatus": "PENDING",
  }
  console.log(params)
  this.IndentAcceptanceService.addindent(params).subscribe((response:any)=>{
    if(response.status == "s"){
      this.alert.showSuccess(response.userDisplayMesg, "Success");
      this.router.navigate(['/supplychainmanagement/wholesale/indentacceptance/list']) 
    }
    else{
      this.alert.showError(response.userDisplayMesg, "Error");
    }
  }) 
  }
}
