import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WholesaleDispatchService } from '@app/services';
@Component({
  selector: 'app-viewdispatch',
  templateUrl: './viewdispatch.component.html',
  styleUrls: ['./viewdispatch.component.scss']
})
export class ViewdispatchComponent implements OnInit {

  @ViewChild('tabSet', {static: false}) tabSet;

  dispatchId: any;
  dispatchData: any;
  calculatedData={
    totNoOfCasesRequested:0,
    totScannedCases:0,
    noOfCasesPending:0,
    totBulkLitres:0,
  }
  indentDtlsList: any=[];
  transportPassDetails: any={};
  transportRouteDetails: any={};
  indentDetails: any;
  indentDtlsCalculated ={
    totNoOfCasesDispatched:0,
    totNoOfBottlesDispatched:0,
    bulkLitresScanned:0
  };

  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dispatchService: WholesaleDispatchService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getIndentById(params.id);
        this.dispatchId = params.id;
      }
    })
  }



  getIndentById(id) {
    this.dispatchService.getDispatchById(id).subscribe((responceData: any) => {
      if (responceData.errorCode == 200) {
        this.dispatchData = responceData.data
        this.indentDtlsList= this.dispatchData.indentOrderPickUpDetailsLst
        this.transportPassDetails=this.dispatchData
        this.transportRouteDetails=this.dispatchData.transportRouteDetails
        this.casesBottlesCalculation(this.dispatchData)
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

  getIndent(indentNo){
    let postParam={
      transportNo:this.transportPassDetails.transportNo,
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

}
