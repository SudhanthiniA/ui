import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { WholesaleDispatchService, WholesaleTrasportpassCancelService } from '@app/services/wholesale';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';
@Component({
  selector: 'app-addtransport',
  templateUrl: './addtransport.component.html',
  styleUrls: ['./addtransport.component.scss']
})
export class AddtransportComponent implements OnInit {
  @ViewChild('tabRef', {static: false}) tabSet;
  requestType: string;
  premisesType: string;
  canceldata: any;
  id:any
  TransportCancelForm: FormGroup;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  formSubmitted = false;
  params1: any;
  indentdetais: any;
  noofcase: any;
  noofcasescanne: any;
  casepending: any;
  bulklitres: any;
  bottle: any;
  cancModify='CANCELLATION';
  isApprover = false;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  workflowobj: any;
  editeddata: any;
  indentDetails:any;
  indentDtlsCalculated ={
    totNoOfCasesDispatched:0,
    totNoOfBottlesDispatched:0,
    bulkLitresScanned:0
  };
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private wholesaleTrasportpassCancelService: WholesaleTrasportpassCancelService,
    private route: ActivatedRoute,
    private WorkflowcofigService: WorkflowcofigService,
    private datePipe: DatePipe,
    private dispatchService: WholesaleDispatchService
  ) { }
  rejectid;
  ngOnInit() {
    this.workflow();
    this.createFormGrp();
    if (this.createObj) {
      this.setData();
    }
   
    this.route.params.subscribe(params => {
      if (params['Id']) {
        // console.log(params['Id'])
        this.params1 = params['Id'];
        console.log(this.params1);

        this.getbyId(this.params1)
        // this.show=false
      }
    });
  }
  draftbutton=true
  workflow(){
    let iscustomer=localStorage.getItem('IS_CUSTOMER');
    if(iscustomer == 'false'){
      this.WorkflowcofigService.getworkflowbydesignation('WHOLESALE', 'WHOLESALE_TRANSPORT_CANCELLATION').subscribe((resp: any) => {
        this.workflowobj = resp.content
        if (this.workflowobj.isEditable == true) {
          this.draftbutton = false
          this.isApprover = true;
          this.TransportCancelForm.controls['premisesType'].disable();
          this.TransportCancelForm.controls['applicationDate'].disable();
          this.TransportCancelForm.controls['Reason'].disable();
          // this.TransportCancelForm.controls['premisesType'].disable();
          // this.TransportCancelForm.controls['premisesType'].disable();
        }
      })
    }
    
  }
  createFormGrp() {
    this.TransportCancelForm = this.formBuilder.group({
      passNo: ['', Validators.required],
      applicationDate: ['', Validators.required],
      // requestType: ['', Validators.required],
      // transportPassType:['', Validators.required],
      transportPassDate: ['', Validators.required],
      transportPassNumber: ['', Validators.required],
      Reason: ['', Validators.required],
      premisesType: [''],
      // cancel:[''],
      // modify:['']
      
    });
  }
  setData() {
    this.TransportCancelForm.patchValue(this.createObj);
  }
  getbyId(id) {
   

    this.wholesaleTrasportpassCancelService.getByIdTransportPass(id).subscribe((res:any)=>{
      console.log('res', res);
      this.editeddata = res.data
      this.IndentDetails(this.editeddata.transportPassDetails.transportNo);
      this.TransportCancelForm.patchValue({
        applicationDate:this.editeddata.applicationDate,
        transportPassNumber:this.editeddata.transportPassDetails.transportNo,
        Reason:this.editeddata.reason,
        premisesType: 'Within the Premises',
        transportPassDate: new Date(),
        passNo:this.editeddata.transportPassDetails.transportNo
      })
    })
  }
  onClickChange(value) {
    console.log(value);

    if (value == 'CANCELLATION') {
      this.requestType = 'CANCELLATION';
    } else {
      this.requestType = 'MODIFICATION';
    }
  }
  barcodeevent(event, value) {
    console.log(value);

    if (value == 'Within Premises') {
      this.premisesType = 'Within Premises';
    } else {
      this.premisesType = 'Outside Premises';
    }
  }
  addTrnsportCancel(form) {
    console.log(form)
    if (form.valid === false) {
      this.formSubmitted = true;
    }
    else {
      const postData = this.TransportCancelForm.value;
      if (!this.params1) {
        this.wholesaleTrasportpassCancelService.createTransportPass(postData).subscribe(
          (responceData) => {
            this.alert.showSuccess('Record Created Successfully', 'Success');
            this.TransportCancelForm.reset();
            this.router.navigate(['/supplychainmanagement/wholesale/transportpasscancel/list'])
          }
        );
      }
      else if (this.params1) {
        this.wholesaleTrasportpassCancelService.updateTransportPass(postData, this.params1).subscribe(
          (responceData) => {
            this.alert.showSuccess('Record Updated Successfully', 'Success');
            this.TransportCancelForm.reset();
            this.router.navigate(['/supplychainmanagement/wholesale/transportpasscancel/list'])
          }
        );
      }
    }
  }
//   onClickChange(value:any){
//  this.cancModify = value
//    console.log(this.cancModify)
    
//   }

  submit(form, status) {
    console.log(form);

    if (form.valid === false) {
      this.formSubmitted = true;
    }
    else {
      let eventt;
      if (status == 'SUBMITTED' || status == 'DRAFT') {
        eventt = "INITIATE"
      } else if (status == 'APPROVED') {
        eventt = "APPROVED"
      } else {
        eventt = status
      }
      let params = {
        //"id":this.params1?this.params1:'',
        "applicationDate":this.params1?this.editeddata.applicationDate:'',
        "applicationNumber":this.params1?this.editeddata.applicationNumber:"",
        "comment": "",
        "createdBy": 0,
        "createdDate": "",
        "event": eventt,
        "isDigitalSignature": true,
        "level": (this.workflowobj && this.workflowobj.level) ? this.workflowobj.level : 'Level 1',
        "modifiedBy": 0,
        "modifiedDate": "",
        "premisesTypeCode": "",
        "premisesTypeValue":  this.params1?this.editeddata.premisesTypeValue:form.value.premisesType,
        "reason": form.value.Reason || this.editeddata.reason,
        "requestType":this.requestType?this.requestType:"CANCELLATION",
        "sentBackLevels": (this.workflowobj && this.workflowobj.sendback) ? this.workflowobj.sendback : '',
        "stage": "string",
        "stageDesc": "string",
        // "applicationDate": this.TransportCancelForm.value.applicationDate
        "status": status,
        "transportPassDetails": {
          "indentOrderPickUpDetailsLst" :[{
            "indentDate": "2021-06-24T04:55:37.621Z",
            "indentNo": "string",
            "licenseType": "string",
            "noOfBottlesRequested": 0,
            "noOfBottlesScanned": 0,
            "noOfBulkLitres": 0,
            "noOfCasesRequested": 0,
            "noOfCasesScanned": 0,
          }] ,
          // this.indentdetais,
          "issueDate": this.datePipe.transform(this.canceldata.issueDate, 'yyyy-MM-dd'),
          "orderpickUp": [],
          "totBulkLitresTransported": this.bulklitres,
          "totNoOfBottlesRequested": this.bottle,
          "totNoOfCasesRequested": this.noofcase,
           "id":this.id?this.id:'',
          "transportDate": this.datePipe.transform(this.TransportCancelForm.value.transportPassDate, 'yyyy-MM-dd'),
          "transportNo": this.TransportCancelForm.value.transportPassNumber,
          "transportPassStatus": "INPROGRESS",
          "transportRouteDetails": {
            "gpsid": this.canceldata.transportRouteDetails.gpsid,
            "majorDistrict": this.canceldata.transportRouteDetails.majorDistrict,
            "routeCode": "string",
            "routeDetails": this.canceldata.transportRouteDetails.routeDetails,
            "routeRange": this.canceldata.transportRouteDetails.routeRange,
            "routeValue": this.canceldata.transportRouteDetails.routeValue,
            "validDateUpTo": this.datePipe.transform(this.canceldata.transportRouteDetails.validDateUpTo, 'yyyy-MM-dd'),
            "vehicleAgencyName": this.canceldata.transportRouteDetails.vehicleAgencyName,
            "vehicleDriver": this.canceldata.transportRouteDetails.vehicleDriver,
            "vehicleNumber": this.canceldata.transportRouteDetails.vehicleNumber,
            "viaCode": "string",
            "viaValue": "string"
          },
          "unitAddress": this.canceldata.unitAddress ? this.canceldata.unitAddress : "-",
          "unitLicenseType": this.canceldata.unitLicenseType ? this.canceldata.unitLicenseType : "-",
          "unitName": this.canceldata.unitName ? this.canceldata.unitName : '-'
        }
      }
      this.wholesaleTrasportpassCancelService.createtransportpasscancel(params).toPromise().then((response: any) => {
        if (response.status == "s") {
          this.alert.showSuccess(response.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/wholesale/transportpasscancel/list'])
        }
        else if(response.status == "f"){
          this.alert.showError(response.userDisplayMesg, 'error');
        }
        else {
          this.alert.showError(response.userDisplayMesg, 'error');
        }
      }).catch((err: any) => {
      });
    }
  }
  IndentDetails(idd?) {
    let id = this.TransportCancelForm.value.passNo;
    if(idd){
          id=idd
    }
   
    this.wholesaleTrasportpassCancelService.gettransportpassbyid(id).toPromise().then((response: any) => {
      if (response.status == "s") {

        this.canceldata = response.data;
        this.id=response.data.id,
        this.indentdetais = response.data.indentOrderPickUpDetailsLst;
        this.TransportCancelForm.patchValue({
          
          transportPassNumber: response.data.transportNo,
          transportPassDate: this.datePipe.transform(response.data.transportDate, 'yyyy-MM-dd'),
          applicationDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd')
        });
        
        this.noofcase = this.canceldata.indentOrderPickUpDetailsLst[0].noOfCasesRequested
        this.noofcasescanne =this.canceldata.indentOrderPickUpDetailsLst[0].noOfCasesScanned
        this.casepending = this.canceldata.indentOrderPickUpDetailsLst[0].noOfCasesRequested - this.canceldata.indentOrderPickUpDetailsLst[0].noOfCasesScanned
        this.bulklitres =this.canceldata.indentOrderPickUpDetailsLst[0].noOfBulkLitres
        // this.bottle = 15
      }
      else {
        this.alert.showError(response.userDisplayMesg, 'error');
      }
    }).catch((err: any) => {
    });
   // this.router.navigate(['/supplychainmanagement/wholesale/transportpasscancel/add',this.params1])

  }
  preview() {
    // let id = this.editId
    let params = {

      "comment": "string",
      "createdDate": "2021-05-19T15:07:16.554Z",
      "isDigitalSignature": true,
      "modifiedBy": 0,
      "level": (this.workflowobj && this.workflowobj.level) ? this.workflowobj.level : 'Level 1',
      "sentBackLevels": (this.workflowobj && this.workflowobj.sendback) ? this.workflowobj.sendback : '',
      "modifiedDate": "",
      "stage": "string",
      "stageDesc": "string", 
      "applicationDate": '',
      "applicationNumber": "",
      "premisesTypeCode": "string",
      "premisesTypeValue": this.TransportCancelForm.value.premisesType,
      "reason": this.TransportCancelForm.value.Reason,
      "requestType":this.requestType?this.requestType:"CANCELLATION",
      "status": status,

      "transportPassDetails": {
        "indentOrderPickUpDetailsLst": this.indentdetais,
        "issueDate": this.datePipe.transform(this.canceldata.issueDate, 'yyyy-MM-dd'),
        "orderpickUp": [],
        "totBulkLitresTransported": this.bulklitres,
        "totNoOfBottlesRequested": this.bottle,
        "totNoOfCasesRequested": this.noofcase,
        "id":this.id?this.id:'',
        "transportDate": this.datePipe.transform(this.TransportCancelForm.value.transportPassDate, 'yyyy-MM-dd'),
        "transportNo": this.TransportCancelForm.value.transportPassNumber,
        "transportPassStatus": "INPROGRESS",
        "transportRouteDetails": {
          "createdBy": 0,
          "createdDate": "2021-05-21T09:20:58.599Z",
          "gpsid": this.canceldata.transportRouteDetails.gpsid,
          "majorDistrict": this.canceldata.transportRouteDetails.majorDistrict,
          "routeCode": "string",
          "routeDetails": this.canceldata.transportRouteDetails.routeDetails,
          "routeRange": this.canceldata.transportRouteDetails.routeRange,
          "routeValue": this.canceldata.transportRouteDetails.routeValue,
          "validDateUpTo": this.datePipe.transform(this.canceldata.transportRouteDetails.validDateUpTo, 'yyyy-MM-dd'),
          "vehicleAgencyName": this.canceldata.transportRouteDetails.vehicleAgencyName,
          "vehicleDriver": this.canceldata.transportRouteDetails.vehicleDriver,
          "vehicleNumber": this.canceldata.transportRouteDetails.vehicleNumber,
          "viaCode": "string",
          "viaValue": "string"
        },
        "unitAddress": this.canceldata.unitAddress ? this.canceldata.unitAddress : "-",
        "unitLicenseType": this.canceldata.unitLicenseType ? this.canceldata.unitLicenseType : "-",
        "unitName": this.canceldata.unitName ? this.canceldata.unitName : '-'
      }
    }
    // if (id) {
    //   postParams['id'] = id
    //   postParams["indentNo"] = this.indendDtls.indentNo,
    //     postParams["indentDate"] = this.indendDtls.indentDate,
    //     postParams["status"] = this.indendDtls.status,

    //     sessionStorage.setItem('indentReq', JSON.stringify(postParams))
    //   this.router.navigate(['/supplychainmanagement/wholesale/indentrequestnew/preview'])

    // } else {
      sessionStorage.setItem('cancelpass', JSON.stringify(params))
      this.router.navigate(['/supplychainmanagement/wholesale/transportpasscancel/preview',this.params1])
    // }
  }
  getIndent(indentNo){
    let postParam={
      transportNo:this.TransportCancelForm.value.passNo,
      indentNo:indentNo
    }
    this.dispatchService.getIndentbyid(postParam).subscribe((responceData:any)=>{
      if(responceData.status ==="s"){
        this.indentDetails=responceData.data
        this.IndentDtlsCalz(this.indentDetails)
        this.tabSet.select(indentNo);
      }
    })
  }
  IndentDtlsCalz(data){

    let totNoOfCasesDispatched=0;
    let totNoOfBottlesDispatched = 0;
    let bulkLitresScanned=0

    data.forEach(element => {
      totNoOfCasesDispatched=totNoOfCasesDispatched+element.totCasesScanned
      totNoOfBottlesDispatched=totNoOfBottlesDispatched+element.totBottlesScanned
      bulkLitresScanned=bulkLitresScanned+element.bulkLitresScanned
    });
    this.indentDtlsCalculated.totNoOfCasesDispatched=totNoOfCasesDispatched;
    this.indentDtlsCalculated.totNoOfBottlesDispatched=totNoOfBottlesDispatched
    this.indentDtlsCalculated.bulkLitresScanned=bulkLitresScanned

  }
}
