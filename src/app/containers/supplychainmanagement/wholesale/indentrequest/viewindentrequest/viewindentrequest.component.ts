import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { WholesaleIndentRequestService} from '@app/services';
import { parse } from 'querystring';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';
@Component({
  selector: 'app-viewindentrequest',
  templateUrl: './viewindentrequest.component.html',
  styleUrls: ['./viewindentrequest.component.scss']
})
export class ViewindentrequestComponent implements OnInit {
indentobj:any={}
paymentobj:any={}
indentid:any
viewPreview="Preview"
//viewPreview = "पूर्व दर्शन"
productCases:any;
productBotteles:any;
productAmount:any;
unitdetailsobj:any;
consigneedetailsobj:any;
  productobj: any;
  workflowobj: any;
  unitLicenseList: any;
  unitLicenseDetails: any;
  indentcomments: any;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private wholesaleIndentRequestService: WholesaleIndentRequestService,
    private WorkflowcofigService:WorkflowcofigService
  ) { }

  ngOnInit() {
   this.getUnitLicenseType()
  }

  workflow() {
    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer)
    this.WorkflowcofigService.getworkflowbydesignation('WHOLESALE', 'WHOLESALE_IMPORT_PERMIT').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }

  getUnitLicenseType() {

    this.wholesaleIndentRequestService.unitLicenseTypes().subscribe((resp: any) => {
      this.unitLicenseList = resp.content
      if(this.unitLicenseList){
        this.route.params.subscribe(params => {
          if (params.id) {
            this.getIndentById(params.id);
            this.indentid = params.id;
            this.viewPreview="View"
            //this.viewPreview ="राय";
          }else{
           this.getFromLocal()
          }
        });
      }
    })
  }


  licenseSelect(eventValue){

    let unitObj=this.unitLicenseList.find(ele=>ele.licenseNumber===eventValue)
    if(unitObj){
      this.unitLicenseDetails=unitObj
    }
  }


  getIndentById(id) {
    this.wholesaleIndentRequestService.getIndentReqById(id)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
        this.indentobj = resp.data;
        debugger
        this.unitdetailsobj=resp.data.indentRequestDetails
        console.log(this.unitdetailsobj.unitAddress, '000000')
        this.consigneedetailsobj=resp.data.indentRequestDetails
        this.paymentobj=resp.data.indentRequestDetails.indentPaymentDetails
        this.indentcomments = resp.data.indentRequestDetails.indentComments
        for (let i = 0; i < this.indentcomments.length; i++) {
          if (this.indentcomments[i].comments === 'null') {
            this.indentcomments[i].comments = ''
          }
        }
        // this.productCases = resp.data.indentRequestDetails.indentProductList[0].noOfCases
        // this.productBotteles = resp.data.indentRequestDetails.indentProductList[0].noOfBottles
        // this.productAmount = resp.data.indentRequestDetails.indentProductList[0].amount
        this.productobj=resp.data.indentRequestDetails.indentProductList
        // this.paymentobj.balanceamount=this.paymentobj.totalCost-this.paymentobj.advancedAmt
        this.licenseSelect(this.unitdetailsobj.unitLicenseType)
        }
      });
      this.WorkflowcofigService.getworkflowbydesignation('WHOLESALE','WHOLESALE_INDENT_REQUEST').subscribe((resp: any) => {
        this.workflowobj = resp.content
      })
  }
  getFromLocal(){
    this.indentobj= JSON.parse(sessionStorage.getItem('indentReq'))
           console.log(this.indentobj);
           this.unitdetailsobj=this.indentobj.indentRequestDetails
            this.consigneedetailsobj=this.indentobj.indentRequestDetails
            this.paymentobj=this.indentobj.indentRequestDetails.indentPaymentDetails
           this.productobj=this.indentobj.indentRequestDetails.indentProductList
            this.paymentobj.balanceamount=this.paymentobj.totalCost-this.paymentobj.advancedAmt
            this.licenseSelect(this.unitdetailsobj.unitLicenseType)
  }
  backtoEdit(){
    let id=this.indentobj.id
    if(this.indentid){
      this.router.navigate(['/supplychainmanagement/wholesale/indentrequestnew/list'])
    }else if(id){
      this.router.navigate(['/supplychainmanagement/wholesale/indentrequestnew/edit/'+id])
    }
    else{
      this.router.navigate(['/supplychainmanagement/wholesale/indentrequestnew/add'])
    }
  }
}
