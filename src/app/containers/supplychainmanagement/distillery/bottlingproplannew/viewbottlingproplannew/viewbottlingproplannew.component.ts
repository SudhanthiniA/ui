import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, DistileryService, WorkflowcofigService, PreviewService } from '@app/services';


@Component({
  selector: 'app-viewbottlingproplannew',
  templateUrl: './viewbottlingproplannew.component.html',
  styleUrls: ['./viewbottlingproplannew.component.scss']
})
export class ViewbottlingproplannewComponent implements OnInit {

  exportObj: any;
  bppObj: any ={};
  logInfo: boolean = false;
  addedit: any;
  viewId: any;
  workflowdata: any;

  logactive: boolean = false;
  logshow: any;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private workflow: WorkflowcofigService,
    private preview: PreviewService,
    private distilleryService: DistileryService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params.Id) {
        this.viewId = params.Id
        this.setData(this.viewId);
      } else {
        this.setData();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';

  }

  setData(id?) {
    if (id) {
      this.distilleryService.getPBBById(id).subscribe((responceData: any) => {
        this.bppObj = responceData.content;
        this.getTankdetailsbyAPplicationnumber(this.bppObj.bottlingPlanDetails.tankRegApplicationNumber)


        if (this.bppObj.applicationNumber) {
          this.workflow.getapprovallogs(this.bppObj.applicationNumber)
            .subscribe((resp: any) => {
              if (resp) {
                if (resp.length > 0) {
                  this.logactive = true;
                  this.logshow = resp;
                }
              }
            })
        }
        this.workflow.getworkflowbydesignation('DISTILLERY', 'DISTILLERY_BOTTLING_PRO_PLAN').subscribe((resp: any) => {
          this.workflowdata = resp.content
        });
      })
    } else {

    }
  }
  getTankdetailsbyAPplicationnumber(applicationNo){
    let data ='?applicationNumber='+applicationNo
    this.distilleryService.getTankDetailsbyApplicatioin(data).subscribe((responceData: any) => {
      let tankDetails = responceData.content;
      this.bppObj.tank=tankDetails.tankRegistrationDetails.tankUsageGroupDto.name;
      this.bppObj.tankRawMaterialId=tankDetails.tankRegistrationDetails.tankRawMaterialDto.name;
      this.bppObj.tankName=tankDetails.tankRegistrationDetails.tankName;

     
    })


  }

  feedback(data) {
    // this.formSubmitted = false;
    // if (form.valid === false) {
    //   this.formSubmitted = true;
    // } else {
    const approveObj = {
      comments: 'sample',
      event: data,
      status: data,
      id: parseInt(this.viewId),
      level: this.workflowdata ? this.workflowdata.level : 'Level 2',
      applicationNumber: this.bppObj.applicationNumber,
      isDigitalSignature: this.workflowdata ? this.workflowdata.isDigitalSignature : true,
    };
    this.distilleryService.addBpp(approveObj).subscribe((responseData: any) => {
      if (responseData.responseCode == 200) {
        this.alert.showSuccess(responseData.responseMessage, 'Success');
        this.router.navigate(['/supplychainmanagement/distillery/bottlingproplannew/list']);
      } else {
        this.alert.showError(responseData.userDisplayMesg, 'error');
      }
    })

  }

}
