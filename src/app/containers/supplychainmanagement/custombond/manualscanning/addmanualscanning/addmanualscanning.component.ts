import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService, PreviewService, DistileryService, WorkflowcofigService, PatternService } from '@app/services';

@Component({
  selector: 'app-addmanualscanning',
  templateUrl: './addmanualscanning.component.html',
  styleUrls: ['./addmanualscanning.component.scss']
})
export class AddmanualscanningComponent implements OnInit {

  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  curDate = new Date();
  manualscanObj: any = {
  };
  scanObj: any = {
    barcode: '',
    qrcode: []
  }
  logshow: any[] = [];

  formSubmitted = false;
  scanLoginfo: boolean = false;
  addedit: any;
  editId: any;
  applicationNumber: any;
  workflowobj: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private alert: AlertService,
    private datePipe: DatePipe,
    private preview: PreviewService,
    private workflowService: WorkflowcofigService,
    private distService: DistileryService,
    public pattern: PatternService
  ) { }

  ngOnInit() {
    // this.getapplicationnumber();
    // this.getworkflow();

    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else if (this.preview.setData) {
        this.manualscanObj = this.preview.setData
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) {

    this.distService.getManualScanById(id).subscribe((responceData: any) => {
      const data = responceData.content;
      this.manualscanObj = data;
      this.logshow = data.qrcodeBarcodeScanList;
      this.manualscanObj.bottlingType = data.bottlingProductionPlan.bottlingPlanDetails.bottlingType;
      this.manualscanObj.productionLine = data.bottlingProductionPlan.bottlingPlanDetails.productionLineValue;
      this.manualscanObj.bpplan = data.bottlingProductionPlan.applicationNumber;
      this.manualscanObj.brandName = data.bottlingProductionPlan.bottlingPlanDetails.brandDetails.brandValue;
      this.manualscanObj.packageSize = data.bottlingProductionPlan.bottlingPlanDetails.labelDetails.packageSizeName;
      this.manualscanObj.scannedcases = data.scannedNumberOfCases;
      this.manualscanObj.noofCases = data.numberOfCases;
      this.manualscanObj.noofBottlesPerCase = data.cartonSize;
      this.manualscanObj.noOfBottle = data.numberOfBottles;
      this.manualscanObj.scanPending = data.numberOfCases - data.scannedNumberOfCases;
      this.manualscanObj.status = data.status;
      this.manualscanObj.requestDate = this.datePipe.transform(data.bottlingProductionPlan.bottlingPlanDetails.requestDate, 'dd-MMM-yyyy');

    });
  }

  getworkflow() {
    this.workflowService.getworkflowbydesignation('DISTILLERY', 'Manual Scaning').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }

  getapplicationnumber() {
    this.distService.getAppNumber('MANUALSCAN').subscribe((res: any) => {
      this.applicationNumber = res.content;
    })
  }

  // printstatus() {
  //   let i = 1;

  //   this.count.forEach((item) => {

  //     if (item) {
  //       this.qrbarcode.push(item);

  //       const postParam = this.qrbarcode

  //       this.distService.addprintStatus(postParam).subscribe((responseData: any) => {

  //         this.index = i++;
  //         console.log(this.index);
  //         // this.index = responseData.findIndex(x =>x.isPrinted == true );

  //       })

  //     }
  //   })

  // }


  // printlog(editId) {
  //   this.distService.getQrById(editId).subscribe((responceData: any) => {
  //     let data = responceData.content
  //     this.Obj = responceData.content;
  //     this.Obj.startDatetime = this.datePipe.transform(this.myDate, 'yyyy-MM-dd h:mm:ss');
  //     this.Obj.endDatetime = this.datePipe.transform(this.myDate, 'yyyy-MM-dd h:mm:ss');
  //     this.Obj.Status = data.qrcodeBarcodePrint[0].status
  //     this.Obj.printedBarCodes = data.qrcodeBarcodePrint[0].printedBarCodes
  //     this.Obj.submittedBarCodes = data.qrcodeBarcodePrint[0].submittedBarCodes
  //     console.log(responceData);
  //   });
  // }



  qrcodesdata = [];

  scanBottle() {
    const modalRef = this.modalService.open(CommonPopupComponent);
    modalRef.result.then(respData => {
      if (respData) {
        if (this.editId) {
          const postParam = {
            bottlesPerCase: this.manualscanObj.noofBottlesPerCase,
            bottlingType: this.manualscanObj.bottlingType,
            qrcodeBarcodePrintId: parseInt(this.editId)
          }

          this.distService.scanBarcodeQr(postParam).subscribe((responseData: any) => {

            if (responseData.responseCode == 200) {
              this.exampleModalCenter.show();

              this.scanObj = {
                barcode: '',

                qrCodeBarCodeScanId: responseData.content.id


              }


            } else {
              this.alert.showError(responseData.responseMessage, 'error');
            }
          }

          )
        }
      }
    }).catch(err => {
      console.log('\n err...', err);
    });


  }

  scanDetails() {
    var qrCodeArr = this.scanObj.qrcode.split(',');
    let qrlength = qrCodeArr.length;
    // let qrlength = this.scanObj.qrcode.length;
    // if(qrlength>parseInt(this.manualscanObj.noofBottlesPerCase)){
    //   this.alert.showError('Please Check Qrcode its greater than No of Bottle per Case','error')

    // }
    if (this.scanObj.barcode !== '' && this.scanObj.qrcode !== '') {
      if (qrlength == parseInt(this.manualscanObj.noofBottlesPerCase)) {
        const data = '?barcode=' + this.scanObj.barcode + '&qrCodeBarCodeScanId=' + this.scanObj.qrCodeBarCodeScanId
        const postParam = qrCodeArr
        this.distService.scanStatus(postParam, data).subscribe((responseData: any) => {
          if (responseData.responseCode == 200) {
            // this.exampleModalCenter.hide();
            this.alert.showSuccess(responseData.responseMessage, 'success');
            this.scanObj.qrcode = '';
            this.scanObj.barcode = '';
            this.exampleModalCenter.show();
            // this.router.navigate(['supplychainmanagement/distillery/manualscanObj/list']);
          } else {
            this.alert.showError(responseData.responseMessage, 'error');
            // this.exampleModalCenter.hide();

          }

        })
      } else {
        this.alert.showError('Please Check Qrcode its greater than No of Bottle per Case','error')
      }

    } else {
      this.alert.showError('Please Give Barcode and Qrcode', 'error');
    }



  }

  navigateList() {
    this.router.navigate(['supplychainmanagement/distillery/manualscanObj/list']);
  }
}
