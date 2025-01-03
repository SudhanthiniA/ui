import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WholesaleDispatchService, WholesaleTrasportpassCancelService } from '@app/services/wholesale';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-viewtransport',
  templateUrl: './viewtransport.component.html',
  styleUrls: ['./viewtransport.component.scss']
})
export class ViewtransportComponent implements OnInit {
  @ViewChild('tabSet', {static: false}) tabSet;
  listvalue:any;
  workflowobj: any;
  arrayvalue:any;
  applicationDate1:any;
  date1:boolean= false;
  datecheck:boolean = false;
  preview:any;
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
  indentDetails: any;
  constructor(
    private route: ActivatedRoute,private WorkflowcofigService:WorkflowcofigService,
    private wholesaleTrasportpassCancelService: WholesaleTrasportpassCancelService,
    private datePipe: DatePipe,
    private dispatchService: WholesaleDispatchService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['Id']) {
        // console.log(params['Id'])
        let params1 = params['Id'];
        console.log(params1);
        
        this.getbyId(params1);
        this.datecheck = true;
        this.date1 = false;
        this.preview = "View"
        // this.show=false
      }
    });
    this.listvalue = JSON.parse(sessionStorage.getItem('cancelpass'));
   // this.arrayvalue =this.listvalue.transportPassDetails.indentOrderPickUpDetailsLst;
    this.applicationDate1= this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.date1 = true;
    this.preview = "Preview"
  }
  getbyId(id) {  
    // let Id= {
    //   id : id
    // }
    this.wholesaleTrasportpassCancelService.getByIdTransportPass(id).toPromise().then((response: any) => {
      // if (response.status== true) {
      console.log(response);
      // response.results.forEach((element,index) => {
        this.listvalue = response.data;
        this.arrayvalue =this.listvalue.transportPassDetails.indentOrderPickUpDetailsLst;
        this.casesBottlesCalculation(this.listvalue)
      // }); 
      // }
      this.WorkflowcofigService.getworkflowbydesignation('WHOLESALE','WHOLESALE_TRANSPORT_CANCELLATION').subscribe((resp: any) => {
        this.workflowobj = resp.content
      })
    }).catch((err: any) => {
    });
  } 
  casesBottlesCalculation(data){

    let totNoOfCasesRequested=0;
    let totScannedCases = 0;
    let noOfCasesPending=0;
    let totBulkLitres=0
    let indentDatas=data.transportPassDetails.indentOrderPickUpDetailsLst

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
  getIndent(indentNo){
    let postParam={
      transportNo:this.listvalue.transportPassDetails.transportNo,
      indentNo:indentNo
    }
    this.dispatchService.getIndentbyid(postParam).subscribe((responceData:any)=>{
      if(responceData.status==="s"){
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
  back(){
    this.router.navigate(['/supplychainmanagement/wholesale/transportpasscancel/list',])
  }
}
