import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { WholesaleImportPermitService,
  WorkflowcofigService} from '@app/services';
import { parse } from 'querystring';

@Component({
  selector: 'app-viewimportpermit',
  templateUrl: './viewimportpermit.component.html',
  styleUrls: ['./viewimportpermit.component.scss']
})
export class ViewimportpermitComponent implements OnInit {
  importpermitobj:any={}
  importdetailsobj:any;
  viewPreview="Preview"
  indentid:any
  dutydetailsobj:any={}
  unitdetailsobj:any={};
  consigneedetailsobj:any={};
    productobj: any;
  unitLicenseList: any;
  unitLicenseDetails: any;
  workflowobj: any;
    constructor(
      private route: ActivatedRoute,
      private router:Router,
      private wholesaleImportPermitService: WholesaleImportPermitService,
      private WorkflowcofigService: WorkflowcofigService,

    ) { }

  ngOnInit() {
    this.getUnitLicenseType()
    this.workflow()

  }


  
  workflow() {
    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer)
    this.WorkflowcofigService.getworkflowbydesignation('WHOLESALE', 'WHOLESALE_IMPORT_PERMIT').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }

  getUnitLicenseType() {

    this.wholesaleImportPermitService.unitLicenseTypes().subscribe((resp: any) => {
      this.unitLicenseList = resp.content
      if (this.unitLicenseList) {
        this.route.params.subscribe(params => {
          if (params.id) {
            this.getIndentById(params.id);
            this.indentid = params.id;
            this.viewPreview=" View"
          } else {
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
    this.wholesaleImportPermitService.getImportPemitById(id)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
        this.importpermitobj = resp.data;
        this.unitdetailsobj=resp.data.importPermitIndentDetails
        this.consigneedetailsobj=resp.data.importPermitIndentDetails
        this.importdetailsobj=resp.data.importPermitIndentDetails.importPermitProdDetails
        this.dutydetailsobj=resp.data.importPermitIndentDetails.importPermitPaymentDetails
        this.licenseSelect(this.unitdetailsobj.unitLicenseType)
        }
      });
  }

  getFromLocal(){
    this.importpermitobj= JSON.parse(sessionStorage.getItem('indentReq'))
    console.log(this.importpermitobj);
    this.importdetailsobj=this.importpermitobj.importPermitIndentDetails.importPermitProdDetails
    this.unitdetailsobj=this.importpermitobj.importPermitIndentDetails
     this.consigneedetailsobj=this.importpermitobj.importPermitIndentDetails
     this.licenseSelect(this.unitdetailsobj.unitLicenseType)
  }

  backtoEdit(){
    let id=this.importpermitobj.id
    if(this.indentid){
      this.router.navigate(['/supplychainmanagement/wholesale/importpermit/list'])
    }else if(id){
      this.router.navigate(['/supplychainmanagement/wholesale/importpermit/edit/'+id])
    }
    else{
      this.router.navigate(['/supplychainmanagement/wholesale/importpermit/add'])
    }
  }
}
