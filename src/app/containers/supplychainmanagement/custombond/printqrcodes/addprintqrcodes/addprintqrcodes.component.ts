import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, TankregistartionService, PreviewService, DistileryService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { DatePipe } from '@angular/common';

// import * as moment from 'moment';

@Component({
  selector: 'app-addprintqrcodes',
  templateUrl: './addprintqrcodes.component.html',
  styleUrls: ['./addprintqrcodes.component.scss']
})
export class AddprintqrcodesComponent implements OnInit {
  formSubmitted = false;
  editId: any;

  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;

  reqObj: any = {
    bottlingPlan: '',
    name: '',
    size: '',
    mapped: '',
    barcodeGenerate: '',
    numberBottles: '',
    date: '',
    type: '',
    subType: '',
    casses: '',
    range: '',
    printer: '',
    status: '',
    balancesBarcode: '',
    barcode: ''
  };

  // maxDate = moment().add(3,'days');
  // minDate =moment();
  bottlingPlans: any;
  applicationnumber: any;
  iD: any;
  PlanId: any;
  startDatetime: any;
  endDatetime: any;
  submittedBarcodes: any;
  printedBarcodes: any;
  Status: any;
  Obj: any;
  arr1 : any;
  myDate = new Date();
  totalQr: number;
  totalBr: number;
  qrcodeCount: any;
  arr2 :any;



  qrbarcode = [];
  index: any;
  count: any;
  timeObj: any;
  printedBarcode:any;
  printedQrcode:any;
  id: any;
  printiD: any;
  arr=[];

  constructor(private router: Router,
    private alert: AlertService,
    private modalService: NgbModal,
    private TankRegistrationService: TankregistartionService,
    private datePipe: DatePipe,
    private route: ActivatedRoute, private preview: PreviewService, private distService: DistileryService,) { }

  ngOnInit() {
    this.getapplicationnumber();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
       
      }

    });
 this.id  = this.printiD;
  }
  setData(id) {
    this.distService.getQrById(id).subscribe((responceData: any) => {
      let data = responceData.content
      this.Obj = responceData.content.qrcodeBarcodePrint;
      // this.reqObj = responceData.content;
      this.reqObj.bottlingPlan = data.bottlingProductionPlan ? data.bottlingProductionPlan.applicationNumber : null;
      this.reqObj.name = data.bottlingProductionPlan.bottlingPlanDetails.brandDetails ? data.bottlingProductionPlan.bottlingPlanDetails.brandDetails.brandName : null;
      this.reqObj.type = data.bottlingProductionPlan.bottlingPlanDetails.brandDetails ? data.bottlingProductionPlan.bottlingPlanDetails.brandDetails.liquorTypeValue : null;
      this.reqObj.subType = data.bottlingProductionPlan.bottlingPlanDetails.brandDetails ? data.bottlingProductionPlan.bottlingPlanDetails.brandDetails.subLiquorTypeValue : null;
      this.reqObj.mapped = data.bottlingProductionPlan.bottlingPlanDetails ? data.bottlingProductionPlan.bottlingPlanDetails.bottlingType : null;
      this.reqObj.numberBottles = data.bottlingProductionPlan.bottlingPlanDetails ? data.bottlingProductionPlan.bottlingPlanDetails.numberOfBottles : null;
      this.reqObj.cases = data.bottlingProductionPlan.bottlingPlanDetails ? data.bottlingProductionPlan.bottlingPlanDetails.numberOfCases : null;
      this.reqObj.size = data.bottlingProductionPlan.bottlingPlanDetails.labelDetails ? data.bottlingProductionPlan.bottlingPlanDetails.labelDetails.packageSizeName : null;
      this.reqObj.status = data.bottlingProductionPlan ? data.bottlingProductionPlan.status : null;
      this.reqObj.barcode = data.printedBarCodes;
      this.reqObj.balancesBarcode = data.balanceBarCodes;
      this.reqObj.barcodeGenerate = 'partial';
      this.reqObj.cartonSize = data.bottlingProductionPlan.bottlingPlanDetails.labelDetails ? data.bottlingProductionPlan.bottlingPlanDetails.labelDetails.cartonSize : null;
      this.reqObj.printer = 'Monic';
      this.reqObj.date = this.datePipe.transform(data.bottlingProductionPlan.bottlingPlanDetails.requestDate, 'dd-MMM-yyyy h:mm:ss a');
      this.PlanId = data.bottlingProductionPlan ? data.bottlingProductionPlan.id : null;
      
      console.log(responceData);
    });
  }
 
  getapplicationnumber() {
    this.distService.getapplicationnumbers('QR').subscribe((res: any) => {
      this.applicationnumber = res.content;

    })
  }
  // numberOnly(event): boolean {
  //   const charCode = (event.which) ? event.which : event.keyCode;
  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  //     return false;
  //   }
  //   return true;

  // }

  add(method) {

    if (this.reqObj.range > this.reqObj.balancesBarcode) {
      this.alert.showWarning('Enter Value Must Be lesser Than or Equal To BalancesBarcode', 'Warning');
       this.reqObj.range = '';
    }
    else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          if (this.editId) {
            const postParam = {

              "bottlingProductionPlanId": this.PlanId,
              "bottlingType": this.reqObj.mapped,
              "givenNumberOfCases": this.reqObj.range,
              "cartonSize": parseInt(this.reqObj.cartonSize),
              "printerAddress": "179.74.987.563",
              "printerName": "Monic",
              "status": method

            };

            this.distService.addQR(postParam).subscribe((responseData: any) => {

               this.timeObj = responseData.content;
               this.printiD = responseData.content.id;
              if (responseData.responseCode == 200) {
                this.printedBarcode = '';
                this.printedQrcode = '';
                this.exampleModalCenter.show();


              } else {
                this.alert.showError(responseData.userDisplayMesg, 'error');
              }

              this.count = responseData.content.qrcodeBarcodePrintDetails

              this.arr1 = this.count.filter((x) => x.isBarcode == true);
              this.totalBr = this.arr1.length;

              this.arr2 = this.count.filter((x) => x.isBarcode == false);
             
              this.totalQr = this.arr2.length;
              
            }

            )
          }
        }
      }).catch(err => {
        console.log('\n err...', err);
      });

    }


  }

 
     
   
printstatus() {
     
  let i = 0;
  let j = 0;
 let k,l,chunk = 1;

for (k=0,l=this.count.length; k<l; k+=chunk) {

  this.count[k].isPrinted = true;
this.qrbarcode = this.count.slice(k,k+chunk);
const postParam = this.qrbarcode

this.distService.addprintStatus(postParam,this.printiD).subscribe((responseData: any) => {

  if(this.arr1.length !== i ){
    this.printedBarcode = ++i;
    console.log(this.printedBarcode);
  }
if(this.arr2.length !== j ){
  this.printedQrcode = ++j;
  console.log(this.printedQrcode);
}  
  // this.index = i++;
  
  // this.index = responseData.findIndex(x =>x.isPrinted == true );


})
}
 
}
  }




