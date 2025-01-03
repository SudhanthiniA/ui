import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService, DistileryService, WorkflowcofigService, PreviewService } from '@app/services';

@Component({
  selector: 'app-viewbottlingprocess',
  templateUrl: './viewbottlingprocess.component.html',
  styleUrls: ['./viewbottlingprocess.component.scss']
})
export class ViewbottlingprocessComponent implements OnInit {
  bottlingObj: any;
  viewId: any;
  addedit: any;
  workflowdata: any;
  logactive: boolean = false;
  logshow: any[] = [];
  formSubmitted = false;
  curDate = new Date();
  userId: any;
  entityType: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private worfFlowService: WorkflowcofigService,
    private distilleryservice: DistileryService,
    private alert: AlertService,
    private modalService: NgbModal,
    private preview: PreviewService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('USER_ID');
    this.entityType = localStorage.getItem('EntityType');
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.viewId = params.id
        this.setData(this.viewId);
      } else {
        this.setData();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }

  setData(id?) {
    if (id) {
      this.distilleryservice.getBottlingProcess(id).subscribe((responceData: any) => {
        const data = responceData.content;
        this.bottlingObj = data;
        this.bottlingObj.planId = data.bottlingProcessDetails.bottlingProductionPlan.applicationNumber
        this.bottlingObj.date = data.bottlingProcessDetails.requestedDate
        this.bottlingObj.liquorType = data.bottlingProcessDetails.bottlingProductionPlan.bottlingPlanDetails.brandDetails.liquorTypeValue
        this.bottlingObj.licenseNo = data.bottlingProcessDetails.bottlingProductionPlan.licenseNumber
        this.bottlingObj.quantityBl = data.bottlingProcessDetails.bottlingProductionPlan.bottlingPlanDetails.quantityBL
        this.bottlingObj.strength = data.bottlingProcessDetails.bottlingProductionPlan.bottlingPlanDetails.brandDetails.brandStrength
        this.bottlingObj.brandName = data.bottlingProcessDetails.bottlingProductionPlan.bottlingPlanDetails.brandDetails.brandName
        this.bottlingObj.size = data.bottlingProcessDetails.bottlingProductionPlan.bottlingPlanDetails.labelDetails.cartonSize
        this.bottlingObj.plannedBottles = data.bottlingProcessDetails.bottlingProductionPlan.bottlingPlanDetails.numberOfBottles
        this.bottlingObj.noOfCases = data.bottlingProcessDetails.bottlingProductionPlan.bottlingPlanDetails.numberOfCases
        this.bottlingObj.noOfBottle = data.bottlingProcessDetails.numberOfBottlesFilled
        this.getBottlingPlanDetails(data.bottlingProcessDetails.bottlingProductionPlan.id)
        this.bottlingObj.wastageBottlingBl = data.bottlingProcessDetails.wastageQuantityBL
        this.bottlingObj.balanceBlend = data.bottlingProcessDetails.balQtyOfBlend
        this.calAl();

        if (this.bottlingObj.applicationNumber) {
          this.worfFlowService.getapprovallogs(this.bottlingObj.applicationNumber)
            .subscribe((resp: any) => {
              if (resp) {
                if (resp.length > 0) {
                  this.logactive = true;
                  this.logshow = resp;
                }
              }
            })
        }
        this.worfFlowService.getworkflowbydesignation('DISTILLERY', 'DISTILLERY_BOTTLING_PROCESS').subscribe((resp: any) => {
          this.workflowdata = resp.content
        });
      });
    }
    else {
      this.bottlingObj = this.preview.setData;
      this.viewId = this.preview.setData.id;
    }
  }

  calAl(){
    this.bottlingObj.bottlingAl = (this.bottlingObj.wastageBottlingBl * this.bottlingObj.strength)/100
  }

  getBottlingPlanDetails(data?) {
    this.distilleryservice.getboxingProcessId(data).subscribe((resp: any) => {
      this.bottlingObj.quantityBottled = resp.content.quantityBottled;
      this.bottlingObj.casesScanned = resp.content.noOfCasesScanned;
      this.bottlingObj.bottledScanned = resp.content.noOfBottleScanned;
    })
  }

  feedback(data, form) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const approveObj = {
        comments: '',
        event: data,
        id: parseInt(this.viewId),
        level: this.workflowdata ? this.workflowdata.level : 'Level 2',
        applicationNumber: this.bottlingObj.applicationNumber,
        isDigitalSignature: this.workflowdata ? this.workflowdata.isDigitalSignature : true,
      };
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          this.distilleryservice.addBottlingProcess(approveObj).subscribe((responseData: any) => {
            if (responseData.responseCode == 200) {
              this.alert.showSuccess(responseData.responseMessage, 'Success');
              this.router.navigate(['/supplychainmanagement/distillery/bottlingprocess/list']);
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
