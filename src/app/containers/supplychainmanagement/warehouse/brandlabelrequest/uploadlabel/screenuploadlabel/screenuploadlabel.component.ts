import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService } from '@app/services';
import { LabelregestrationService, WarehouseNewbrandService } from '@app/services/ware-house';
import { FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-screenuploadlabel',
  templateUrl: './screenuploadlabel.component.html',
  styleUrls: ['./screenuploadlabel.component.scss']
})
export class ScreenuploadlabelComponent implements OnInit {
  labelobject = {
    "brandRegistrationId": '',
    "description": "",
    "isactive": true,
    "uploadAffidavit": "",
    "uploadApprovalBrand": "",
    "uploadApprovalLable": "",
    "uploadImage": "",
    applicationnumber:'',
    uploadBpic:'',
    nolable:'',
    packagetype:'',
    sizee:'',
    brand:'',
    domainname:'',
    licencetype:'',
    liqcategory:'',
    reqdate:'',
  }
  boxingForm:any;
  labeldata: any;
  constructor(private route: ActivatedRoute,
    private router: Router,public labelservice:LabelregestrationService,
    private datepipe: DatePipe,  private alert: AlertService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('paramid',params);
       if (params.id) {
       console.log('param id',params.id)
            this.getbyid(params.id)
       }
     });
  }
   getbyid(id){
      this.labelservice.getlablebyid(id).subscribe((responceData:any) =>{
        this.labeldata = responceData.data;
        this.labelobject.applicationnumber = this.labeldata.applicationNumber
        this.labelobject.brandRegistrationId = this.labeldata.brandRegistrationId
        this.labelobject.reqdate = this.datepipe.transform(this.labeldata.createdDate,'yyyy-MM-dd')
        this.labelobject.liqcategory = this.labeldata.liquorCategory
        this.labelobject.licencetype = this.labeldata.licenseType
        this.labelobject.domainname = this.labeldata.domainResponseDto.name
        this.labelobject.brand = this.labeldata.brandRegistrationId
        this.labelobject.sizee = this.labeldata.requestLabelDetlist[0].sizeId
        this.labelobject.packagetype = this.labeldata.licenseType
        this.labelobject.nolable = this.labeldata.requestLabelDetlist[0].numberLables
      })
      
   }
   
   addlable(){
    const data = {
      "applicationNumber": this.labelobject.applicationnumber?this.labelobject.applicationnumber:3,
      "brandRegistrationId": this.labelobject.brandRegistrationId?this.labelobject.brandRegistrationId:3,
      "description": this.labelobject.description,
      // "id": 0,
      "isactive": true,
      "uploadAffidavit": this.labelobject.uploadAffidavit?this.labelobject.uploadAffidavit:'qwere',
      "uploadApprovalBrand": this.labelobject.uploadApprovalBrand?this.labelobject.uploadApprovalBrand:'kgfghuy',
      "uploadApprovalLable": this.labelobject.uploadApprovalLable?this.labelobject.uploadApprovalLable:'jhfghj',
      "uploadImage": this.labelobject.uploadImage?this.labelobject.uploadImage:'iuytfgh'
    }
    this.labelservice.addlabell(data).subscribe((responceData:any) => {
      // console.log('res',responceData )
      if (responceData.status == "s") {
        this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
        this.router.navigate(['/supplychainmanagement/warehouse/brandlabelrequest/uploadlabel/list']);
      }
      else {
        this.alert.showError(responceData['userDisplayMesg'], 'error')
      }
    })
   }
}
