import { Component, OnInit, ViewChild } from '@angular/core';
import { WarehouseTrnsportPassGenService } from '@app/services/ware-house/warehouse-transportpassgeneration.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-viewtranspassgenerationnew',
  templateUrl: './viewtranspassgenerationnew.component.html',
  styleUrls: ['./viewtranspassgenerationnew.component.scss']
})
export class ViewtranspassgenerationnewComponent implements OnInit {
  @ViewChild('tabRef', { static: false }) tabSet;
  editId: any;
  transitpassdata: any = {};
  transportroutedata: any;
  indentdetails: any = {};
  indentdetailstable: any = []
  indentgetbydetails: any = {}
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private warehouseTrnsportPassGenService: WarehouseTrnsportPassGenService
  ) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(params => {
      console.log('active route', params)
      if (params.id) {
        this.editId = params.id;
        this.setdata(this.editId)
      }
    });
  }
  
  setdata(id) {
    this.warehouseTrnsportPassGenService.getransportPassGenbyid(id).subscribe((res: any) => {
      this.transitpassdata = res.data
      this.transportroutedata = res.data.transportRouteDetails
      this.transitpassdata.issueDate = res.data.issueDate
      this.transitpassdata.transportDate = res.data.transportDate
      this.transitpassdata.indentNo = res.data.indentOrderPickUpDetailsLst[0].indentNo,
        this.transitpassdata.unitName = res.data.unitName,
        this.transitpassdata.licenseType = res.data.indentOrderPickUpDetailsLst[0].licenseType,
        this.transitpassdata.unitAddress = res.data.unitAddress,
        console.log(this.transitpassdata.indentNo)
      this.indentdetailstable = res.data.indentOrderPickUpDetailsLst
      this.indentdetails.totCasesRequested = res.data.indentOrderPickUpDetailsLst[0].noOfCasesRequested,
      this.indentdetails.totBottlesRequested = res.data.indentOrderPickUpDetailsLst[0].noOfBottlesRequested,

        this.indentdetails.totScannedCases = res.data.indentOrderPickUpDetailsLst[0].noOfCasesScanned,
        this.indentdetails.totNoOfCasesPending = res.data.indentOrderPickUpDetailsLst[0].noOfCasesRequested - res.data.indentOrderPickUpDetailsLst[0].noOfCasesScanned,
        this.indentdetails.totBulkLitresScanned = res.data.indentOrderPickUpDetailsLst[0].noOfBulkLitres,
        // this.indentdetails=res.data.orderpickUp[0].indentAcceptance
        console.log(this.indentdetails)
    })

  }
  getIndent(indentNo) {

    // transportNo:this.TransportCancelForm.value.passNo,
    "indentNo"; this.transitpassdata.indentNo

    this.warehouseTrnsportPassGenService.getindentbyid(indentNo).subscribe((responceData: any) => {
      if (responceData.status === "s") {
        this.indentgetbydetails = responceData.data
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

  // {{transitpassdata.transportPassStatus}}

}
