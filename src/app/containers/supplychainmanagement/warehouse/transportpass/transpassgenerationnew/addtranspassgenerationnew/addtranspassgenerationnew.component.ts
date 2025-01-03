import { Component, OnInit, ViewChild } from '@angular/core';
import { WarehouseTrnsportPassGenService } from '@app/services/ware-house';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { DatePipe } from '@angular/common';
import { apiUrls } from '@appEnv/apiurls';



@Component({
  selector: 'app-addtranspassgenerationnew',
  templateUrl: './addtranspassgenerationnew.component.html',
  styleUrls: ['./addtranspassgenerationnew.component.scss']
})
export class AddtranspassgenerationnewComponent implements OnInit {
  Transitpassobj = {
    indentNo:'',
    issueDate:'',
    routeValue:'',
    transportDate:'',
    routeDetails:'',
    majorDistrict:'',
    gpsid:'',
    vehicleNumber:'',
    vehicleDriver:'',
    vehicleAgencyName:'',
    routeRange:'',
    validDateUpTo:'',
    unitName:''
  }
  @ViewChild('tabRef', {static: false}) tabSet;
  totCasesRequested:any
  formSubmitted: boolean;
  maxDate: Date = new Date();  
  Transportgatepassform;
  indentdetailstable:any=[]
  indentgetbydetails:any={}
  qrcodetailsobj: any = {
   licenseType: "",
        unitName: "",
        unitAddress: "", 
        totCasesRequested:'',
        totCasesScanned:'',
        totNoOfCasesPending:'',
        totBulkLitresScanned:'',
        id:'',
    indentNumberDetails: [
      { 
        noofCasesSupplied: "200",
        // totCasesScanned:0,
        // totNoOfCasesPending:0,
        totalNumberOfBottlesSupplied: "2000",
        // totBulkLitresScanned:0,
        stockindetails: [{
          brandname: 'Jack Daniels (Black)',
          packagetype: 'Glass Bottle',
          packagesize: '750ml',
          totCasesRequested: "20",
          totBottlesRequested: "300",
          noofCasesSupplied: "20",
          totalNumberOfBottlesSupplied: "300"
        }, {
          brandname: 'Johnny Walker (White)',
          packagetype: 'Glass Bottle',
          packagesize: '750ml',
          totCasesRequested: "50",
          totBottlesRequested: "500",
          noofCasesSupplied: "50",
          totalNumberOfBottlesSupplied: "500"
        }, {
          brandname: 'Bacardi Lemon',
          packagetype: 'Glass Bottle',
          packagesize: '900ml',
          totCasesRequested: "35",
          totBottlesRequested: "350",
          noofCasesSupplied: "35",
          totalNumberOfBottlesSupplied: "350"
        },
        {
          brandname: 'Signature',
          packagetype: 'Glass Bottle',
          packagesize: '900ml',
          totCasesRequested: "35",
          totBottlesRequested: "350",
          noofCasesSupplied: "35",
          totalNumberOfBottlesSupplied: "350"
        }
      ]


      },

    

    ]
  }
  indentNumberDetails: any=
    { 
      noofCasesSupplied: "200",
      // totCasesScanned:0,
      // totNoOfCasesPending:0,
      totalNumberOfBottlesSupplied: "2000",
      // totBulkLitresScanned:0,
      stockindetails: [{
        brandname: 'Jack Daniels (Black)',
        packagetype: 'Glass Bottle',
        packagesize: '750ml',
        totCasesRequested: "20",
        totBottlesRequested: "300",
        noofCasesSupplied: "20",
        totalNumberOfBottlesSupplied: "300"
      }, {
        brandname: 'Johnny Walker (White)',
        packagetype: 'Glass Bottle',
        packagesize: '750ml',
        totCasesRequested: "50",
        totBottlesRequested: "500",
        noofCasesSupplied: "50",
        totalNumberOfBottlesSupplied: "500"
      }, {
        brandname: 'Bacardi Lemon',
        packagetype: 'Glass Bottle',
        packagesize: '900ml',
        totCasesRequested: "35",
        totBottlesRequested: "350",
        noofCasesSupplied: "35",
        totalNumberOfBottlesSupplied: "350"
      },
      {
        brandname: 'Signature',
        packagetype: 'Glass Bottle',
        packagesize: '900ml',
        totCasesRequested: "35",
        totBottlesRequested: "350",
        noofCasesSupplied: "35",
        totalNumberOfBottlesSupplied: "350"
      }
    ]


    }

  transresp: any;
  id: any;
  orderPickUpIdList: any=[];
  transpassdetailsbyId: any;
  constructor(
    private warehouseTrnsportPassGenService: WarehouseTrnsportPassGenService,
    private alert: AlertService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.Transitpassobj['id'] = params['id']
        this.getIndentDetails(this.Transitpassobj['id']);
        // this.IndentAcceptanceObj.id = params.id;
        // this.getIndentDetails(params.id);

      //  console.log(this.IndentAcceptanceObj.id)
        // this.addedit = 'Edit';

      }
      
    });
    // this.datePipe.transform(new Date(), 'yyyy-MM-dd')
    this.Transitpassobj.issueDate=this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.Transitpassobj.transportDate=this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.Transitpassobj.validDateUpTo=this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }
  IndentDetails(){
    this.indentdetailstable=[];
    let postParams = {
      "indentNo":this.Transitpassobj.indentNo,
      "unitName":"Wholesale"
    }
    this.warehouseTrnsportPassGenService.getIndentDetails(this.Transitpassobj.indentNo,postParams.unitName).subscribe((resp: any) => {
      if(resp.errorCode==201){
        this.transresp= resp.data
      this.qrcodetailsobj.licenseType=resp.data.licenseType
      this.qrcodetailsobj.unitName=resp.data.unitName
      this.qrcodetailsobj.unitAddress=resp.data.unitAddress
      this.qrcodetailsobj.totCasesRequested=resp.data.noOfCasesRequested
      this.qrcodetailsobj.noOfBottlesRequested=resp.data.noOfBottlesRequested
      this.qrcodetailsobj.totCasesScanned=resp.data.noOfCasesScanned
      this.qrcodetailsobj.totNoOfCasesPending=resp.data.noOfCasesRequested-resp.data.noOfCasesScanned
      this.qrcodetailsobj.totBulkLitresScanned=resp.data.noOfBulkLitres
this.qrcodetailsobj.id=resp.data.orderPickUpIdList
      const obj={
        indentNo:resp.data.indentNo,
        indentDate:resp.data.indentDate,
        totCasesRequested:resp.data.noOfCasesRequested,
        totBottlesRequested:resp.data.noOfBottlesRequested
      }
     if(this.indentdetailstable.length < 5){
      this.indentdetailstable.push(obj)
     }else{
       this.alert.showWarning("Can't add more than 5 Record","Note")
     }
      // if(response.status==200){

      // this.router.navigate(['/supplychainmanagement/wholesale/transitgatepass/list'])
    }
    else{
      this.alert.showError(resp.userDisplayMesg, 'error');
    }
    })
  }
  submit(form,status) {
    console.log(form)
    if (form.valid === false) {
      this.formSubmitted = true;
    } 
    else {
      let orderpickdetails;
      let orderpickIds;
      if(this.id){
        orderpickIds = this.transpassdetailsbyId.orderpickUp.map((ele:any)=>{
          return ele.id
        })
      orderpickdetails= this.transpassdetailsbyId.indentOrderPickUpDetailsLst.map((ele:any)=>{
          return {
            "indentDate": ele.indentDate || '',
            "indentNo": ele.indentNo || '',
            "licenseType": ele.licenseType,
            "noOfBottlesRequested": ele.noOfBottlesRequested || '',
            "noOfBottlesScanned": ele.noOfBottlesScanned ||'',
            "noOfBulkLitres": ele.noOfBulkLitres || '',
            "noOfCasesRequested": ele.noOfCasesRequested ||'',
            "noOfCasesScanned": ele.noOfCasesScanned ||'',
            "orderPickUpIdList":orderpickIds,
            "unitAddress": ele.unitAddress ||"",
            "unitName": ele.unitName || this.transpassdetailsbyId.unitName
          }
        });
      
      }else{
        orderpickdetails=[{ 
          "indentDate": '',
          "indentNo": '',
          "licenseType": '',
          "noOfBottlesRequested":  '',
          "noOfBottlesScanned": '',
          "noOfBulkLitres": '',
          "noOfCasesRequested":'',
          "noOfCasesScanned": '',
          "orderPickUpIdList": this.transresp && this.transresp.orderPickUpIdList?this.transresp.orderPickUpIdList:null,
          "unitAddress": "",
          "unitName":"Wholesale"
        }];
      
      }
     
      let postParams = {
        "id":this.id?this.id:'',
        // "transportNo":this.Transitpassobj.indentNo,
        "issueDate":this.Transitpassobj.issueDate,
        "transportDate":this.Transitpassobj.transportDate,
        "transportRouteDetails":{
           "id":this.id ? this.transpassdetailsbyId.transportRouteDetails.id:'',
          "routeValue":this.Transitpassobj.routeValue,
          "routeDetails":this.Transitpassobj.routeDetails,
          "majorDistrict":this.Transitpassobj.majorDistrict,
          "routeRange":this.Transitpassobj.routeRange,
          "validDateUpTo":this.Transitpassobj.validDateUpTo,
          "gpsid":this.Transitpassobj.gpsid,
          "vehicleNumber":this.Transitpassobj.vehicleNumber,
          "vehicleDriver":this.Transitpassobj.vehicleDriver,
          "vehicleAgencyName":this.Transitpassobj.vehicleAgencyName
        },
        "indentOrderPickUpDetailsLst": orderpickdetails,
        "unitAddress":this.qrcodetailsobj.unitAddress,
        "unitLicenseType":this.qrcodetailsobj.unitLicenseType,
        "unitName":this.qrcodetailsobj.unitName,
         "orderpickUp": orderpickdetails,
         "transportPassStatus":status,
         "totBulkLitresScanned":'',
      }
      this.warehouseTrnsportPassGenService.addTransportPassGen(postParams).subscribe((resp: any) => {
          this.alert.showSuccess(resp.userDisplayMesg, 'Success');

          this.router.navigate(['/supplychainmanagement/warehouse/transportpass/transpassgenerationnew/list'])

        })
    } 

  }
  clearform(){
   this.Transitpassobj.indentNo='',
   this.qrcodetailsobj.licenseType='',
   this.qrcodetailsobj.unitName='',
   this.qrcodetailsobj.unitAddress='',
   this.qrcodetailsobj.totCasesRequested='',
   this.qrcodetailsobj.totCasesScanned='',
   this.qrcodetailsobj.totNoOfCasesPending='',
   this.qrcodetailsobj.totBulkLitresScanned=''
   this.indentdetailstable=[]
  }
  deleterow(i){
    // this.indentdetailstable.slice(0,i)
    this.indentdetailstable = this.indentdetailstable.splice(0,i);  
    this.qrcodetailsobj.totCasesRequested=0
    this.qrcodetailsobj.totCasesScanned=0
    this.qrcodetailsobj.totNoOfCasesPending=0
    this.qrcodetailsobj.totBulkLitresScanned=0
  }
  getIndentDetails(id){
    // this.indentdetailstable=[];
    // let postParams = {
    //   "indentNo":this.Transitpassobj.indentNo
    // }
    this.warehouseTrnsportPassGenService.getransportPassGenbyid(id).subscribe((resp: any) => { 
      console.log(resp);
       
      if(resp.status== "s"){
        this.id=resp.data.id
        this.transpassdetailsbyId=resp.data
        this.Transitpassobj.indentNo=resp.data.indentOrderPickUpDetailsLst[0].indentNo,
        this.qrcodetailsobj.unitName=resp.data.unitName,
        this.qrcodetailsobj.licenseType=resp.data.unitLicenseType,
        this.qrcodetailsobj.unitAddress=resp.data.unitAddress,
        console.log(this.Transitpassobj.indentNo)
        // this.IndentDetails()
        // this.indendDtls.indentRequestDetails.indentPaymentDetails.paymentDate,'yyyy-MM-dd'),
        this.Transitpassobj.issueDate=this.datePipe.transform(resp.data.issueDate,'yyyy-MM-dd'),
        this.Transitpassobj.transportDate=this.datePipe.transform(resp.data.transportDate,'yyyy-MM-dd'),
      
        this.Transitpassobj.routeDetails=resp.data.transportRouteDetails.routeDetails,
        console.log(this.Transitpassobj.routeDetails)
        this.Transitpassobj.majorDistrict=resp.data.transportRouteDetails.majorDistrict,
        this.Transitpassobj.gpsid=resp.data.transportRouteDetails.gpsid,
        this.Transitpassobj.vehicleNumber=resp.data.transportRouteDetails.vehicleNumber,
        this.Transitpassobj.vehicleDriver=resp.data.transportRouteDetails.vehicleDriver,
        this.Transitpassobj.vehicleAgencyName=resp.data.transportRouteDetails.vehicleAgencyName,
        this.Transitpassobj.routeRange=resp.data.transportRouteDetails.routeRange,
        this.Transitpassobj.validDateUpTo=resp.data.transportRouteDetails.validDateUpTo,
        this.Transitpassobj.routeValue=resp.data.transportRouteDetails.routeValue,
        this.qrcodetailsobj.totCasesRequested=resp.data.indentOrderPickUpDetailsLst[0].noOfCasesRequested,
        this.qrcodetailsobj.noOfBottlesRequested=resp.data.indentOrderPickUpDetailsLst[0].noOfBottlesRequested,
       this.qrcodetailsobj.totCasesScanned=resp.data.indentOrderPickUpDetailsLst[0].noOfCasesScanned,
       this.qrcodetailsobj.totNoOfCasesPending=resp.data.indentOrderPickUpDetailsLst[0].noOfCasesRequested-resp.data.indentOrderPickUpDetailsLst[0].noOfCasesScanned,
      this.qrcodetailsobj.totBulkLitresScanned=resp.data.indentOrderPickUpDetailsLst[0].noOfBulkLitres,
        this.indentdetailstable=resp.data.indentOrderPickUpDetailsLst,
        this.orderPickUpIdList= resp.data.indentOrderPickUpDetailsLst[0].orderPickUpIdList


      // if(response.status==200){

      // this.router.navigate(['/supplychainmanagement/wholesale/transitgatepass/list'])
    }
    else{
      this.alert.showError(resp.userDisplayMesg, 'error');
    }
    })
  }
  getIndent(indentNo){
    
      // transportNo:this.TransportCancelForm.value.passNo,
     "indentNo";this.Transitpassobj.indentNo
     this.warehouseTrnsportPassGenService.getindentbyid(indentNo).subscribe((responceData:any)=>{
      if(responceData.status==="s"){
        this.indentgetbydetails=responceData.data
    //     this.IndentDtlsCalz(this.indentDetails)
        this.tabSet.select(indentNo);
      }
    
    })
  // }
  // IndentDtlsCalz(data){

  //   let totNoOfCasesDispatched=0;
  //   let totNoOfBottlesDispatched = 0;
  //   let bulkLitresScanned=0

  //   data.forEach(element => {
  //     totNoOfCasesDispatched=totNoOfCasesDispatched+element.totCasesScanned
  //     totNoOfBottlesDispatched=totNoOfBottlesDispatched+element.totBottlesScanned
  //     bulkLitresScanned=bulkLitresScanned+element.bulkLitresScanned
  //   });
  //   this.indentDtlsCalculated.totNoOfCasesDispatched=totNoOfCasesDispatched;
  //   this.indentDtlsCalculated.totNoOfBottlesDispatched=totNoOfBottlesDispatched
  //   this.indentDtlsCalculated.bulkLitresScanned=bulkLitresScanned

  }
}
