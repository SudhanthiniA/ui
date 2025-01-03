import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, WholesaleDispatchService } from '@app/services';
import { WarehouseTrnsportPassCancellService } from '@app/services/ware-house/warehouseTpRequestCancell.service';
@Component({
  selector: 'app-viewrequestfortpcancelation',
  templateUrl: './viewrequestfortpcancelation.component.html',
  styleUrls: ['./viewrequestfortpcancelation.component.scss']
})
export class ViewrequestfortpcancelationComponent implements OnInit {

  @ViewChild('tabSet', { static: false }) tabSet;

  viewCancelData: any;
  editId: any;
  status: any;
  arrayvalue: any;
  preview:any;

  indentDtlsCalculated ={
    totNoOfCasesDispatched:0,
    totNoOfBottlesDispatched:0,
    bulkLitresScanned:0
  };
  indentDetails: any;

  constructor(
    private AC: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private alert: AlertService,
    private tpCancelService: WarehouseTrnsportPassCancellService,
    private dispatchService: WholesaleDispatchService,
  ) { }

  ngOnInit() {
    this.AC.params.subscribe(params => {
      if (params.id) {
        // this.BrandNewObj.id = params.id;
        this.TransitpassCancelobj['id'] = params['id']
        this.editId = params.id;
        this.getById(this.editId);
        // this.addedit = 'Edit';
        this.preview = "View"
        
      }
    });
    this.preview = "Preview"
  }

  getById(id) {
    this.tpCancelService.getByIdTranCancellation(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.viewCancelData = response.data
        this.arrayvalue =this.viewCancelData.transportPassDetails.indentOrderPickUpDetailsLst;
        this.status= response.data.status
        this.TransitpassCancelobj.transportPassNo = response.data.transportPassDetails.transportNo,
        this.TransitpassCancelobj.noOfCasesRequested = response.data.transportPassDetails.indentOrderPickUpDetailsLst[0].noOfCasesRequested,
        this.TransitpassCancelobj.noOfBottlesRequested = response.data.transportPassDetails.indentOrderPickUpDetailsLst[0].noOfBottlesRequested,
        this.TransitpassCancelobj.noOfBulkLitres = response.data.transportPassDetails.indentOrderPickUpDetailsLst[0].noOfBulkLitres
        
      }
    })
  }



  getIndent(indentNo) {
    let postParam = {
      transportNo: this.TransitpassCancelobj.transportPassNo,
      indentNo: indentNo
      
    }
    this.tpCancelService.getIndentbyid(postParam).subscribe((responceData: any) => {
      if (responceData.status === "s") {
        this.indentDetails = responceData.data
        this.IndentDtlsCalz(this.indentDetails)
        this.tabSet.select(indentNo);

      } else {
        this.alert.showError(responceData.userDisplayMesg, "Error")
      }
    })
  }

  IndentDtlsCalz(data) {
    let totNoOfCasesDispatched = 0;
    let totNoOfBottlesDispatched = 0;
    let bulkLitresScanned = 0

    data.forEach(element => {
      totNoOfCasesDispatched = totNoOfCasesDispatched + element.totCasesScanned
      totNoOfBottlesDispatched = totNoOfBottlesDispatched + element.totBottlesScanned
      bulkLitresScanned = bulkLitresScanned + element.bulkLitresScanned
    });
    this.indentDtlsCalculated.totNoOfCasesDispatched = totNoOfCasesDispatched;
    this.indentDtlsCalculated.totNoOfBottlesDispatched = totNoOfBottlesDispatched
    this.indentDtlsCalculated.bulkLitresScanned = bulkLitresScanned

  }


  // back() {
  //   this.router.navigate(['/supplychainmanagement/warehouse/transportpass/requestfortpcancelation'], { queryParams: { status: this.status} })
  // }

  TransitpassCancelobj = {
    transportPassNumber: '',
    applicationDate: '',

    transportPassType: '',
    transportPassDate: '',
    transportPassNo: '',
    Reason: '',
    requestType: '',
    premisesType: '',
    unitName: '',
    unitLicenseType: '',
    unitAddress: '',
    transportDate: '',
    issueDate: '',
    routeCode: '',
    routeDetails: '',
    majorDistrict: '',
    routeRange: '',
    validDateUpTo: '',
    gpsid: '',
    vehicleNumber: '',
    vehicleDriver: '',
    vehicleAgencyName: '',
    routeValue: '',
    indentNo: '',
    indentDate: '',
    noOfCasesRequested: '',
    noOfBottlesRequested: '',
    noOfBulkLitres: ''
  }
}
