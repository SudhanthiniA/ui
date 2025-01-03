import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService, DistileryService, WorkflowcofigService, PreviewService } from '@app/services';

@Component({
  selector: 'app-viewmanualscanning',
  templateUrl: './viewmanualscanning.component.html',
  styleUrls: ['./viewmanualscanning.component.scss']
})
export class ViewmanualscanningComponent implements OnInit {

  licenseTypes: any;
  indentforblend: any;
  userId: any;
  entityType: any;
  viewId: any;
  addedit: any;
  logactive: boolean = false;
  logshow: any[] = [];
  workflowdata: any;
  formSubmitted = false;
  curDate = new Date();
  manualscanObj: any={}

  constructor(private router: Router,
    private route: ActivatedRoute,
    private worfFlowService: WorkflowcofigService,
    private distilleryservice: DistileryService,
    private alert: AlertService,
    private modalService: NgbModal,
    private preview: PreviewService) { }

  ngOnInit() {
   
    this.route.params.subscribe((params) => {
      if (params.Id) {
        this.viewId = params.Id
        this.setData(this.viewId);
      } else {
      
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }


  setData(id) {

    this.distilleryservice.getManualScanById(id).subscribe((responceData: any) => {
      const data = responceData.content;
      this.logshow = data.qrcodeBarcodeScanList;
      this.manualscanObj = data;
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
      this.manualscanObj.requestDate = data.bottlingProductionPlan.bottlingPlanDetails.requestDate;

    });
  }

  feedback(data, form) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const approveObj = {
        comments: 'sample',
        event: data,
        id: parseInt(this.viewId),
        level: this.workflowdata ? this.workflowdata.level : 'Level 2',
        applicationNumber: this.indentforblend.applicationNumber,
        isDigitalSignature: this.workflowdata ? this.workflowdata.isDigitalSignature : true,
      };
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          this.distilleryservice.addIndent(approveObj).subscribe((responseData: any) => {
            if (responseData.responseCode == 200) {
              this.alert.showSuccess(responseData.responseMessage, 'Success');
              this.router.navigate(['/supplychainmanagement/distillery/indentforblend/list']);
            } else {
              this.alert.showError(responseData.userDisplayMesg, 'error');
            }
          })
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

}
