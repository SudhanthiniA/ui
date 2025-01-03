import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { AlertService, PreviewService, PatternService, DistileryService, WorkflowcofigService } from '@app/services';

@Component({
  selector: 'app-addbottlingprocess',
  templateUrl: './addbottlingprocess.component.html',
  styleUrls: ['./addbottlingprocess.component.scss']
})
export class AddbottlingprocessComponent implements OnInit {
  addedit: any;
  bottlingObj: any = {};
  formSubmitted = false;
  editId: any;
  bottlingPlans: any;
  licenseTypes: any;
  bottlingPlanList: any[]=[]
  bottlingPlanDetails: any[]=[]
  applicationNumber: any;
  workflowobj: any;
  curDate = new Date();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private alert: AlertService,
    private preview: PreviewService,
    public pattern: PatternService,
    private distService: DistileryService,
    private workflowService: WorkflowcofigService,
    private datepipe: DatePipe

  ) { }

  ngOnInit() {
    this.bottlingObj.planId = '';
    this.getapplicationnumber();
    this.getBottlingplan();
    this.bottlingObj.date = this.datepipe.transform(this.curDate, 'yyyy-MM-dd');
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      } else if (this.preview.setData) {
        this.bottlingObj = this.preview.setData;
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) {
    if (id) {
      this.distService.getBottlingProcess(id).subscribe((responceData: any) => {
        const data = responceData.content;
        this.bottlingObj = data;
        this.bottlingObj.planId = data.bottlingProcessDetails.bottlingProductionPlan.id
        // this.bottlingObj.date = this.datepipe.transform(data.bottlingProcessDetails.requestedDate, 'yyyy-MM-dd');
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
        this.getBottlingPlan(data.bottlingProcessDetails.bottlingProductionPlan.id)
        this.bottlingObj.wastageBottlingBl = data.bottlingProcessDetails.wastageQuantityBL
        this.bottlingObj.balanceBlend = data.bottlingProcessDetails.balQtyOfBlend
      });
    }
  }

  getBottlingplan() {
    this.distService.getbotllingPlanId().subscribe((resp: any) => {
      this.bottlingPlanList = resp.content;
    });
  }

  getworkflow(){
    this.workflowService.getworkflowbydesignation('DISTILLERY','DISTILLERY_BOTTLING_PROCESS').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }

  getapplicationnumber() {
    this.distService.getAppNumber('BOTTLING').subscribe((res: any) => {
      this.applicationNumber = res.content;
    })
  }

  getBottlingPlan(data?) {
    if (data) {
      this.distService.getPBBById(data).subscribe((resp: any) => {
        this.bottlingPlans = resp.content;
        // if (typeof this.bottlingPlans === 'undefined') {
        //   // this.alert.showWarning('This Production Plan ID is not Valid', 'Warning');
        // } else {
          this.bottlingObj.liquorType = resp.content.bottlingPlanDetails.brandDetails.liquorTypeValue;
          this.bottlingObj.quantityBl = resp.content.bottlingPlanDetails.quantityBL;
          this.bottlingObj.strength = resp.content.bottlingPlanDetails.brandDetails.brandStrength;
          this.bottlingObj.brandName = resp.content.bottlingPlanDetails.brandDetails.brandValue;
          this.bottlingObj.noOfCases = resp.content.bottlingPlanDetails.numberOfCases;
          this.bottlingObj.plannedBottles = resp.content.bottlingPlanDetails.numberOfBottles;
          this.bottlingObj.size = resp.content.bottlingPlanDetails.labelDetails.cartonSize;
          this.bottlingObj.licenseNo = resp.content.licenseNumber;
        // }
        this.getBottlingPlanDetails(data);
        if ( this.bottlingObj.wastageBottlingBl) {
          this.calAl();
        }
        
      })
    }
  }

  getBottlingPlanDetails(data?) {
    this.distService.getboxingProcessId(data).subscribe((resp: any) => {
      this.bottlingObj.quantityBottled = resp.content.quantityBottled;
      this.bottlingObj.casesScanned = resp.content.noOfCasesScanned;
      this.bottlingObj.bottledScanned = resp.content.noOfBottleScanned;
    })
  }

  calAl(){
    this.bottlingObj.bottlingAl = (this.bottlingObj.wastageBottlingBl * this.bottlingObj.strength)/100
  }


  addBottling(bottlingForm, status) {
    this.formSubmitted = true;
    const postParam = {
      applicationNumber: this.applicationNumber,
      comments: '',
      event: status,
      status: status,
      isDigitalSignature: this.workflowobj ? this.workflowobj.isDigitalSignature : false,
      level: this.workflowobj ? this.workflowobj.level : 'Level 1',
      bottlingProcessDetails: {
        bottlingProductionPlanId: this.bottlingObj.planId,
        balQtyOfBlend: this.bottlingObj.balanceBlend,
        numberOfBottlesFilled: this.bottlingObj.noOfBottle,
        requestedDate: this.datepipe.transform(this.curDate, 'dd-MM-yyyy'),
        numberOfBottlesScanned: this.bottlingObj.bottledScanned,
        numberOfCaseScanned: this.bottlingObj.casesScanned,
        wastageQuantityBL: this.bottlingObj.wastageBottlingBl
      }
    }
    if (this.editId) {
      postParam['id'] = parseInt(this.editId);
    }
    else {
      postParam['applicationNumber'] = this.applicationNumber;
    }
    if (bottlingForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.distService.addBottlingProcess(postParam) : this.distService.addBottlingProcess(postParam))
            .subscribe((responceData: any) => {
              if (responceData.responseCode == 200) {
                this.alert.showSuccess(responceData.responseMessage, 'Success');
                this.router.navigate(['/supplychainmanagement/distillery/bottlingprocess/list']);
              } else {
                this.alert.showError(responceData.userDisplayMesg, 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  navigateBottlingList() {
    this.router.navigate(['supplychainmanagement/distillery/bottlingprocess/list']);
  }

  async navigatePreview(form) {
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      this.preview.setData = this.bottlingObj;
      if (this.editId != '') {
        this.preview.setData.id = this.editId
      }

      this.router.navigate(['/supplychainmanagement/distillery/bottlingprocess/preview']);
    }
  }

}
