import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, WholesaleDispatchService } from '@app/services';
import { WarehouseTrnsportPassCancellService } from '@app/services/ware-house/warehouseTpRequestCancell.service';

@Component({
  selector: 'app-addrequestfortpcancelation',
  templateUrl: './addrequestfortpcancelation.component.html',
  styleUrls: ['./addrequestfortpcancelation.component.scss']
})
export class AddrequestfortpcancelationComponent implements OnInit {

  @ViewChild('tabSet', { static: false }) tabSet;
  formSubmitted = false;
  requestType: string;
  params1: any;
  id: any;
  workflowobj: any;
  noofcaseReq: any;
  noofBottelesReq: any;
  passNO: any;
  bulklitres: any;
  rejectid: any;
  getByIdData: any;
  routeDetails: any;
  transPortRouteDetails: any;
  transportPassCancelForm: FormGroup;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  transPortDetails: any;
  indentDetails: any;
  editeddata: any;
  //TransitpassCancelobj: any;
  qrcodetailsobj: any;
  //orderPickUpIdList: any;
  indentdetailstable: any;
  TransportCancellationform;
  table: any;
  constructor(
    private wrHouseTraPortPassCancel: WarehouseTrnsportPassCancellService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private dispatchService: WholesaleDispatchService
  ) { }
  indentDtlsCalculated = {
    totNoOfCasesDispatched: 0,
    totNoOfBottlesDispatched: 0,
    bulkLitresScanned: 0
  };

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

  // qrcodetailsobj = {
  //   indentNo:'',
  //   indentDate:'',
  //   noOfCasesRequested:'',
  //   noOfBottlesRequested:''
  // }
  // 
  createFormGrp() {
    this.transportPassCancelForm = this.formBuilder.group({
      transportPassNumber: [''],
      applicationDate: ['',],
      // requestType: ['', Validators.required],
      transportPassType: [''],
      transportPassDate: [''],
      transportPassNo: [''],
      Reason: [''],
      premisesType: [''],
      // cancel:[''],
      // modify:['']

    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.params1 = params['id'];
        this.TransitpassCancelobj['id'] = params['id']
        console.log(this.params1);
        this.getTPCancelById(this.TransitpassCancelobj['id'])
      }
    })
    this.createFormGrp();
    // this.getById(this.params1)

    // this.TransitpassCancelobj.issueDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    // this.TransitpassCancelobj.transportDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    // this.TransitpassCancelobj.validDateUpTo = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    // if (this.createObj) {
    //   this.setData();
    // }
  }


  onClickChange(value) {
    console.log(value);

    if (value == 'CANCELLATION') {
      this.requestType = 'CANCELLATION';
    } else {
      this.requestType = 'MODIFICATION';
    }
  }

  setData() {
    this.transportPassCancelForm.patchValue(this.createObj);
  }

  transpassCancelbyId: any;

  getTPCancelById(id) {
    this.wrHouseTraPortPassCancel.getByIdTranCancellation(id).subscribe((resp: any) => {
      this.getByIdData = resp.data;
      if (resp.status == "s") {
        console.log(this.TransportCancellationform)
        this.id = resp.data.id
        this.transpassCancelbyId = resp.data
          this.table = resp.data.transportPassDetails.indentOrderPickUpDetailsLst
        this.TransitpassCancelobj.transportPassNumber = resp.data.transportPassDetails.transportNo,
          this.TransitpassCancelobj.transportPassNo = resp.data.transportPassDetails.transportNo,
          this.TransitpassCancelobj.premisesType = resp.data.premisesTypeValue,
          // this.TransitpassCancelobj.premisesType = (resp.data.premisesTypeValue == 'Within the Premises')? '1': '2' ,
          console.log("primeses type value",this.premisesType)
          this.TransitpassCancelobj.Reason = resp.data.reason,
          this.TransitpassCancelobj.applicationDate = this.datePipe.transform(resp.data.applicationDate, 'yyyy-MM-dd'),
          this.TransitpassCancelobj.transportPassDate = this.datePipe.transform(resp.data.transportPassDetails.transportDate, 'yyyy-MM-dd'),
          this.TransitpassCancelobj.issueDate = resp.data.transportPassDetails.issueDate,
          this.TransitpassCancelobj.transportDate = resp.data.transportPassDetails.transportDate,
          this.TransitpassCancelobj.unitName = resp.data.transportPassDetails.unitName,
          this.TransitpassCancelobj.unitLicenseType = resp.data.transportPassDetails.unitLicenseType,
          this.TransitpassCancelobj.unitAddress = resp.data.transportPassDetails.unitAddress,
          this.TransitpassCancelobj.routeCode = resp.data.transportPassDetails.transportRouteDetails.routeCode,

          this.TransitpassCancelobj.routeDetails = resp.data.transportPassDetails.transportRouteDetails.routeDetails,
          this.TransitpassCancelobj.majorDistrict = resp.data.transportPassDetails.transportRouteDetails.majorDistrict,
          this.TransitpassCancelobj.routeRange = resp.data.transportPassDetails.transportRouteDetails.routeRange,
          this.TransitpassCancelobj.validDateUpTo = resp.data.transportPassDetails.transportRouteDetails.validDateUpTo,
          this.TransitpassCancelobj.gpsid = resp.data.transportPassDetails.transportRouteDetails.gpsid,
          this.TransitpassCancelobj.vehicleNumber = resp.data.transportPassDetails.transportRouteDetails.vehicleNumber,
          this.TransitpassCancelobj.vehicleDriver = resp.data.transportPassDetails.transportRouteDetails.vehicleDriver,
          this.TransitpassCancelobj.vehicleAgencyName = resp.data.transportPassDetails.transportRouteDetails.vehicleAgencyName,
          this.TransitpassCancelobj.indentNo = resp.data.transportPassDetails.indentOrderPickUpDetailsLst[0].indentNo,
          this.TransitpassCancelobj.indentDate = resp.data.transportPassDetails.indentOrderPickUpDetailsLst[0].indentDate,
          this.TransitpassCancelobj.noOfCasesRequested = resp.data.transportPassDetails.indentOrderPickUpDetailsLst[0].noOfCasesRequested,
          this.TransitpassCancelobj.noOfBottlesRequested = resp.data.transportPassDetails.indentOrderPickUpDetailsLst[0].noOfBottlesRequested,
          this.TransitpassCancelobj.noOfBulkLitres = resp.data.transportPassDetails.indentOrderPickUpDetailsLst[0].noOfBulkLitres,
          this.indentdetailstable = resp.data.transportPassDetails.indentOrderPickUpDetailsLst


      }
      else {
        this.alert.showError(resp.userDisplayMesg, 'error');
      }
    })
  }

  getTpCaancellDetails() {
    this.indentdetailstable = [];
    let postParams = {
      "indentNo": this.TransitpassCancelobj.indentNo,
      "unitName": "Wholesale"
    }
    this.wrHouseTraPortPassCancel.getTransportPassDetails(this.TransitpassCancelobj.transportPassNumber).subscribe((resp: any) => {
      if (resp.status == "s") {
        this.transPortDetails = resp.data;
        this.table= resp.data.indentOrderPickUpDetailsLst
        this.id = resp.data.id;
        this.TransitpassCancelobj.transportPassNumber = resp.data.transportNo,
          this.TransitpassCancelobj.transportPassNo = resp.data.transportNo,
          this.TransitpassCancelobj.premisesType = resp.data.premisesTypeValue,
          this.TransitpassCancelobj.Reason = resp.data.reason,
          this.TransitpassCancelobj.applicationDate = this.datePipe.transform(resp.data.applicationDate, 'yyyy-MM-dd'),
          this.TransitpassCancelobj.transportPassDate = this.datePipe.transform(resp.data.transportDate, 'yyyy-MM-dd'),
          this.TransitpassCancelobj.issueDate = resp.data.issueDate,
          this.TransitpassCancelobj.transportDate = resp.data.transportDate,
          this.TransitpassCancelobj.unitName = resp.data.unitName,
          this.TransitpassCancelobj.unitLicenseType = resp.data.unitLicenseType,
          this.TransitpassCancelobj.unitAddress = resp.data.unitAddress,
          this.TransitpassCancelobj.routeCode = resp.data.transportRouteDetails.routeCode,
          this.TransitpassCancelobj.routeDetails = resp.data.transportRouteDetails.routeDetails,
          this.TransitpassCancelobj.majorDistrict = resp.data.transportRouteDetails.majorDistrict,
          this.TransitpassCancelobj.routeRange = resp.data.transportRouteDetails.routeRange,
          this.TransitpassCancelobj.validDateUpTo = resp.data.transportRouteDetails.validDateUpTo,
          this.TransitpassCancelobj.gpsid = resp.data.transportRouteDetails.gpsid,
          this.TransitpassCancelobj.vehicleNumber = resp.data.transportRouteDetails.vehicleNumber,
          this.TransitpassCancelobj.vehicleDriver = resp.data.transportRouteDetails.vehicleDriver,
          this.TransitpassCancelobj.vehicleAgencyName = resp.data.transportRouteDetails.vehicleAgencyName,
          this.TransitpassCancelobj.indentNo = resp.data.indentOrderPickUpDetailsLst[0].indentNo,
          this.TransitpassCancelobj.indentDate = resp.data.indentOrderPickUpDetailsLst[0].indentDate,
          this.TransitpassCancelobj.noOfCasesRequested = resp.data.indentOrderPickUpDetailsLst[0].noOfCasesRequested,
          this.TransitpassCancelobj.noOfBottlesRequested = resp.data.indentOrderPickUpDetailsLst[0].noOfBottlesRequested,
          this.TransitpassCancelobj.noOfBulkLitres = resp.data.indentOrderPickUpDetailsLst[0].noOfBulkLitres
        // newly added code
        const obj = {
          indentNo: resp.data.indentNo,
          indentDate: resp.data.indentDate,
          totCasesRequested: resp.data.noOfCasesRequested,
          totBottlesRequested: resp.data.noOfBottlesRequested
        }
        if (this.indentdetailstable.length < 5) {
          this.indentdetailstable.push(obj)
        } else {
          this.alert.showWarning("Can't add more than 5 Record", "Note")
        }
      }
      else {
        this.alert.showError(resp.userDisplayMesg, 'error')
      }
    })
  }

  // indentdetailstable:any=[]

  submitForm(form, status) {
    this.formSubmitted = false;
    if (!form.valid) {
      this.formSubmitted = true;
    }
    else {
      let event
      if (status == 'SUBMITTED' || status == 'SUBMITTED') {
        event = 'INITIATE'
      } else {
        event = status;
      }
      let params = {
     
         "id":this.params1?this.params1:'',
        "applicationDate": this.params1 ? this.transpassCancelbyId.applicationDate : '',
        "applicationNumber": this.params1 ? this.transpassCancelbyId.applicationNumber : '',
        "comment": "",
        "createdBy": 0,
        "createdDate": "",
        "event": this.params1 ? "INITIATE" : "IN_PROGRESS",
        "isDigitalSignature": true,
         "level": "Level 1",
        "modifiedBy": 0,
        "modifiedDate": "",
        "premisesTypeCode": "",
        "premisesTypeValue": this.TransitpassCancelobj.premisesType,
        "reason": this.TransitpassCancelobj.Reason,
        "requestType": this.requestType ? this.requestType : "CANCELLATION",
        "sentBackLevels": "",
        "stage": "string",
        "stageDesc": "string",
        "status": status,
        "transportPassDetails": {
          "indentOrderPickUpDetailsLst": this.indentDetails,
          "issueDate": this.params1 ? this.datePipe.transform(this.transpassCancelbyId.transportPassDetails.issueDate, 'yyyy-MM-dd') : this.datePipe.transform(this.transPortDetails.issueDate, 'yyyy-MM-dd'),
          "orderpickUp": [],
          "totBulkLitresTransported": this.bulklitres,
          "totNoOfBottlesRequested": this.noofBottelesReq,
          "totNoOfCasesRequested": this.noofcaseReq,
          "id": this.id ? this.id : '',
          "transportDate": this.params1 ? this.datePipe.transform(this.transpassCancelbyId.transportPassDetails.transportPassDate, 'yyyy-MM-dd') : this.datePipe.transform(this.transPortDetails.transportPassDate, 'yyyy-MM-dd'),
          "transportNo": this.params1 ? this.transpassCancelbyId.transportPassDetails.transportPassNumber : this.TransitpassCancelobj.transportPassNumber,
          "transportPassStatus": "INPROGRESS",
          "transportRouteDetails": {
            "gpsid": this.params1 ? this.transpassCancelbyId.transportPassDetails.transportRouteDetails.gpsid : this.TransitpassCancelobj.gpsid,
            "majorDistrict": this.params1 ? this.transpassCancelbyId.transportPassDetails.transportRouteDetails.majorDistrict : this.TransitpassCancelobj.majorDistrict,
            "routeCode": "",
            "routeDetails": this.params1 ? this.transpassCancelbyId.transportPassDetails.transportRouteDetails.routeDetails : this.TransitpassCancelobj.routeDetails,
            "routeRange": this.params1 ? this.transpassCancelbyId.transportPassDetails.transportRouteDetails.routeRange : this.TransitpassCancelobj.routeRange,
            "routeValue": this.params1 ? this.transpassCancelbyId.transportPassDetails.transportRouteDetails.routeValue : this.TransitpassCancelobj.routeValue,
            "validDateUpTo": this.params1 ? this.datePipe.transform(this.transpassCancelbyId.transportPassDetails.transportRouteDetails.validDateUpTo, 'yyyy-MM-dd') : this.datePipe.transform(this.TransitpassCancelobj.validDateUpTo, 'yyyy-MM-dd'),
            "vehicleAgencyName": this.params1 ? this.transpassCancelbyId.transportPassDetails.transportRouteDetails.vehicleAgencyName : this.TransitpassCancelobj.vehicleAgencyName,
            "vehicleDriver": this.params1 ? this.transpassCancelbyId.transportPassDetails.transportRouteDetails.vehicleDriver : this.TransitpassCancelobj.vehicleDriver,
            "vehicleNumber": this.params1 ? this.transpassCancelbyId.transportPassDetails.transportRouteDetails.vehicleNumber : this.TransitpassCancelobj.vehicleNumber,
            
          },
          "unitAddress": this.params1 ? this.transpassCancelbyId.transportPassDetails.transportRouteDetails.unitAddress : this.TransitpassCancelobj.unitAddress,
          "unitLicenseType": this.params1 ? this.transpassCancelbyId.transportPassDetails.transportRouteDetails.unitLicenseType : this.TransitpassCancelobj.unitLicenseType,
          "unitName": this.params1 ? this.transpassCancelbyId.transportPassDetails.transportRouteDetails.unitName : this.TransitpassCancelobj.unitName
        }
       }
      this.wrHouseTraPortPassCancel.addTransportpassCancell(params).subscribe((resp: any) => {
        if (resp.status == "s") {
          this.alert.showSuccess(resp.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/warehouse/transportpass/requestfortpcancelation'])
        }
        else {
          this.alert.showError(resp.userDisplayMesg, 'error')
        }
      })

    }

  }


  preview() {
    let params = {
      "id": this.params1 ? this.params1 : '',
      "applicationDate": this.params1 ? this.transpassCancelbyId.applicationDate : '',
      "applicationNumber": this.params1 ? this.transpassCancelbyId.applicationNumber : '',
      "premisesTypeValue": this.TransitpassCancelobj.premisesType,
      "requestType": this.requestType ? this.requestType : "CANCELLATION",
      "status": status,
      "transportPassStatus": "COMPLETED",
    }
    sessionStorage.setItem('previewData', JSON.stringify(params))
    this.router.navigate(['/supplychainmanagement/warehouse/transportpass/requestfortpcancelation/preview', this.params1])

  }

  getIndent(indentNo) {
    let postParam = {
      transportNo: this.TransitpassCancelobj.transportPassNo,
      indentNo: indentNo
      
    }
    this.wrHouseTraPortPassCancel.getIndentbyid(postParam).subscribe((responceData: any) => {
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

  barcodeevent(event, value) {
    console.log(value);

    if (value == 'Within Premises') {
      this.premisesType = 'Within Premises';
    } else {
      this.premisesType = 'Outside Premises';
    }
  }

  premisesType: any;
  WithinPremises: boolean;
  OutsidePremises: boolean;
  PrmisesChange(event) {
    let eventValue = event.target.value;
    if (eventValue === "Within the Premises") {
      this.WithinPremises = true;
      this.OutsidePremises = false;
    } if (eventValue === "Out side Premises") {
      this.WithinPremises = false;
      this.OutsidePremises = true;
    }
  }
}

