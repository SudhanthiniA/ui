import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { WholesaleDispatchService, AlertService } from '@app/services';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-editdispatch',
  templateUrl: './editdispatch.component.html',
  styleUrls: ['./editdispatch.component.scss']
})
export class EditdispatchComponent implements OnInit {

  @ViewChild('tabSet', {static: false}) tabSet;


  dispatchGroup: FormGroup;
  dispatchForm:any;
  editId: any;
  addedit = 'Add';
  totCasesScanned=0
  barCodes: any;
  scannedBarcodes: any=[];
  dispatchObj: any;
  indentDetails: any;
  constructor(
    private formBuilder: FormBuilder,
    private wholesaleDispatchService:WholesaleDispatchService,
    private alert:AlertService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  transportdetailobj:any={
    issueDate:'',
    transportDate:'',
    transportNo:'',
    unitLicenseType:'',
    unitName:'',
    unitAddress:'',
    routeValue:'',
    routeDetails:'',
    viaValue:'',
    majorDistrict:'',
    routeRange:'',
    validDateUpTo:'',
    gpsid:'',
    vehicleNumber:'',
    vehicleDriver:'',
    vehicleAgencyName:'',
    totCasesRequested:'',
    totCasesScanned:'',
    totNoOfCasesRequested:'',
    totScannedCases:'',
    totBulkLitresScanned:'',
    barCode:''
  }

  calculatedData={
    totNoOfCasesRequested:0,
    totScannedCases:0,
    noOfCasesPending:0,
    totBulkLitres:0,
  }

  indentDtlsCalculated ={
    totNoOfCasesDispatched:0,
    totNoOfBottlesDispatched:0,
    bulkLitresScanned:0
  };

  indentlistdata:any;
  dispatchData: any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.transportdetailobj['id'] = params['id']
        this.getDetailsById(this.transportdetailobj['id']);
        // this.IndentAcceptanceObj.id = params.id;
        // this.getIndentDetails(params.id);

      //  console.log(this.IndentAcceptanceObj.id)
        // this.addedit = 'Edit';

      }
      
    });
  }



  scanCases() {
    // let temp = 0
    let data = this.transportdetailobj.barCode;
    let keys = Object.keys(this.barCodes);
    
    if(this.totCasesScanned < this.calculatedData.totScannedCases){
      if (keys.indexOf(data) !== -1) {
        this.totCasesScanned = this.totCasesScanned + 1
        delete this.barCodes[data]
        this.scannedBarcodes.push({bardCode:data})
      } else {
        this.alert.showError("Barcode Already Scanned", "Error")
      }
      }else{
        this.alert.showWarning("Reached Maximum Scan", "Note")
      }


    

  }

  getDetailsById(id){

    this.wholesaleDispatchService.getDispatchById(id).subscribe((resp: any) => { 
      console.log(resp);
      
      if(resp.status== "s"){
        this.transportdetailobj.issueDate=resp.data.issueDate
        this.transportdetailobj.transportDate=resp.data.transportDate
        this.transportdetailobj.transportNo=resp.data.transportNo
     
        this.transportdetailobj.unitLicenseType=resp.data.unitLicenseType
        this.transportdetailobj.unitName=resp.data.unitName
        this.transportdetailobj.unitAddress=resp.data.unitAddress
       
        this.transportdetailobj.routeValue=resp.data.transportRouteDetails.routeValue
        this.transportdetailobj.routeDetails=resp.data.transportRouteDetails.routeDetails
        this.transportdetailobj.viaValue=resp.data.transportRouteDetails.viaValue
        this.transportdetailobj.majorDistrict=resp.data.transportRouteDetails.majorDistrict
        this.transportdetailobj.routeRange=resp.data.transportRouteDetails.routeRange,
        this.transportdetailobj.validDateUpTo=resp.data.transportRouteDetails.validDateUpTo,
        this.transportdetailobj.gpsid=resp.data.transportRouteDetails.gpsid
        this.transportdetailobj.vehicleNumber=resp.data.transportRouteDetails.vehicleNumber,
        this.transportdetailobj.vehicleDriver=resp.data.transportRouteDetails.vehicleDriver,
        this.transportdetailobj.vehicleAgencyName=resp.data.transportRouteDetails.vehicleAgencyName,


        this.transportdetailobj.totNoOfCasesRequested=resp.data.totNoOfCasesRequested
        this.transportdetailobj.totScannedCases=resp.data.totScannedCases
        this.transportdetailobj.totBulkLitresScanned=resp.data.totBulkLitresScanned,

        this.indentlistdata=resp.data.indentOrderPickUpDetailsLst
        this.dispatchData = resp.data.indentOrderPickUpDetailsLst
        this.casesBottlesCalculation(resp.data)
        this.barCodes=resp.data.barCodeMap
        this.dispatchObj=resp.data
    }
    else{
      this.alert.showError(resp.userDisplayMesg, 'error');
    }
    })
  }
  submit(status) {
      let orderpickup;
      orderpickup = this.dispatchObj.indentOrderPickUpDetailsLst.map((ele:any)=>{
        return {

        }
      })
      let postParams = {
        "createdBy": this.dispatchObj.createdBy,
        "createdDate": this.dispatchObj.createdDate,

        "dispatchBarCodes":this.scannedBarcodes,

        "entityId": this.dispatchObj.entityId,
        "id": this.dispatchObj.id,
        "transportPassNo": this.dispatchObj.transportNo,
        "unitName": this.transportdetailobj.unitName,
        "indentNo": this.dispatchObj.indentOrderPickUpDetailsLst[0].indentNo,
        "modifiedBy": this.dispatchObj.modifiedBy,
        "modifiedDate": this.dispatchObj.modifiedDate,
        "status": status,
        "totBulkLitresScanned": this.dispatchObj.orderpickUp[0].totBulkLitresScanned,
        "totScannedBottles": this.dispatchObj.orderpickUp[0].totScannedBottles,
        // "totBulkLitresScanned": '',
        // "totScannedBottles":'',
        "totScannedCases": this.totCasesScanned,
        "transportDate": this.dispatchObj.transportDate,
        
        "transportPassDetails": {
          "barCodeMap":this.barCodes,
          "createdBy": this.dispatchObj.createdBy,
          "createdDate": this.dispatchObj.createdDate,
          "entityId": this.dispatchObj.entityId,
          "id": this.dispatchObj.id,
          "indentOrderPickUpDetailsLst":this.dispatchObj.indentOrderPickUpDetailsLst,
          "issueDate": this.dispatchObj.issueDate,
          "modifiedBy": this.dispatchObj.modifiedBy,
          "modifiedDate": this.dispatchObj.modifiedDate,

          "orderpickUp":this.dispatchObj.orderpickUp,

          "totBulkLitresTransported": this.dispatchObj.totBulkLitresTransported,
          "totNoOfBottlesRequested": this.dispatchObj.totNoOfBottlesRequested,
          "totNoOfCasesRequested": this.dispatchObj.totNoOfCasesRequested,
          "transportDate": this.dispatchObj.transportDate,
          "transportNo": this.dispatchObj.transportNo,
          "transportPassStatus": this.dispatchObj.transportPassStatus,

          
          "transportRouteDetails": {

            
            "routeValue":this.transportdetailobj.routeValue,
            "routeDetails":this.transportdetailobj.routeDetails,
            "viaValue":this.transportdetailobj.viaValue,
            "majorDistrict":this.transportdetailobj.majorDistrict,
            "routeRange":this.transportdetailobj.routeRange,
            "validDateUpTo":this.transportdetailobj.validDateUpTo,
            "gpsid":this.transportdetailobj.gpsid,
            "vehicleNumber":this.transportdetailobj.vehicleNumber,
            "vehicleDriver":this.transportdetailobj.vehicleDriver,
            "vehicleAgencyName":this.transportdetailobj.vehicleAgencyName,

            "createdBy": this.dispatchObj.transportRouteDetails.createdBy,
            "createdDate":this.dispatchObj.transportRouteDetails.createdDate,
            "id": this.dispatchObj.transportRouteDetails.id,
            "modifiedBy": this.dispatchObj.transportRouteDetails.modifiedBy,
            "modifiedDate":this.dispatchObj.transportRouteDetails.modifiedDate,
            "routeCode": this.dispatchObj.transportRouteDetails.routeCode,
            "viaCode": this.dispatchObj.transportRouteDetails.viaCode,
          },
          
          "unitLicenseType":this.transportdetailobj.unitLicenseType,
          "unitName":this.transportdetailobj.unitName,
          "unitAddress":this.transportdetailobj.unitAddress,
        },
      }
      if(status ==="SUBMITTED"){
         if(this.totCasesScanned>0){
          this.wholesaleDispatchService.adddispatch(postParams).subscribe((resp: any) => {
    
            if(resp.status==="s"){
              this.alert.showSuccess(resp.userDisplayMesg, 'Success');
    
              this.router.navigate(['/supplychainmanagement/wholesale/transitgatepass/list'])
    
            }else{
              this.alert.showError(resp.userDisplayMesg, 'Error')
            }
    
            })
         }else{
           this.alert.showWarning("Scan Min 1 Cases","Note")
         }
      }else{
        this.wholesaleDispatchService.adddispatch(postParams).subscribe((resp: any) => {
    
          if(resp.status==="s"){
            this.alert.showSuccess(resp.userDisplayMesg, 'Success');
  
            this.router.navigate(['/supplychainmanagement/wholesale/transitgatepass/list'])
  
          }else{
            this.alert.showError(resp.userDisplayMesg, 'Error')
          }
  
          })
      }
      

  }
  Method(){
    console.log("data");
    
  }

  getIndent(indentNo){
    let postParam={
      transportNo:this.transportdetailobj.transportNo,
      indentNo:indentNo
    }
    this.wholesaleDispatchService.getIndentbyid(postParam).subscribe((responceData:any)=>{
      if(responceData.status==="s"){
        this.indentDetails=responceData.data
        this.IndentDtlsCalz(this.indentDetails)
        this.tabSet.select(indentNo);

      }else{
        this.alert.showError(responceData.userDisplayMesg,"Error")
      }
    })
  }

  casesBottlesCalculation(data){

    let totNoOfCasesRequested=0;
    let totScannedCases = 0;
    let noOfCasesPending=0;
    let totBulkLitres=0
    let indentDatas=data.indentOrderPickUpDetailsLst

    indentDatas.forEach(element => {
      totNoOfCasesRequested=totNoOfCasesRequested+element.noOfCasesRequested
      totScannedCases=totScannedCases+element.noOfCasesScanned
      noOfCasesPending=noOfCasesPending+(totNoOfCasesRequested-totScannedCases)
      totBulkLitres=totBulkLitres+element.noOfBulkLitres
    });
    this.calculatedData.totNoOfCasesRequested=totNoOfCasesRequested;
    this.calculatedData.totScannedCases=totScannedCases
    this.calculatedData.noOfCasesPending=noOfCasesPending
    this.calculatedData.totBulkLitres=totBulkLitres

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
