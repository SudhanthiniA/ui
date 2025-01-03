import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TankConversionService } from '@app/services/distillery/tankconversion.service';
import { AlertService, DistileryService, WorkflowcofigService, PreviewService,TankRegistrationService } from '@app/services';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  dipbookObj: any;
  userId: any;
  entityType: any;
  viewId: any;
  addedit: any;
  logactive: boolean = false;
  logshow: any[] = [];
  workflowdata: any;
  formSubmitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: TankConversionService,
    private worfFlowService: WorkflowcofigService,
    private distilleryservice: DistileryService,
    private alert: AlertService,
    private preview: PreviewService,
    private TankRegistrationService: TankRegistrationService
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
      this.distilleryservice.getDipBookById(id).subscribe((responceData: any) => {
        this.dipbookObj = responceData.content;
        this.dipbookObj.requestDate = responceData.content.dipBookDetails.inspectionDate;
        this.dipbookObj.fromRawMaterial = responceData.content.dipBookDetails.tankRawMaterialDto.name;
        this.dipbookObj.fromUsageGroup = responceData.content.dipBookDetails.tankUsageGroupDto.name;
        this.dipbookObj.dip = responceData.content.dipBookDetails.wetDip;
        this.dipbookObj.bulkLtr =responceData.content.dipBookDetails.closingBalanceBL;
        this.dipbookObj.strength =responceData.content.dipBookDetails.strength;
        this.dipbookObj.temperature =responceData.content.dipBookDetails.temperature;
        this.dipbookObj.indication =responceData.content.dipBookDetails.indication;
        this.dipbookObj.alcohalLtr = responceData.content.dipBookDetails.alcoholicLitre
        this.dipbookObj.tankName = responceData.content.dipBookDetails.distilleryTankRegistration.tankRegistrationDetails.tankName;
        if (this.dipbookObj.applicationNumber) {
          this.worfFlowService.getapprovallogs(this.dipbookObj.applicationNumber)
            .subscribe((resp: any) => {
              if (resp) {
                if (resp.length > 0) {
                  this.logactive = true;
                  this.logshow = resp;
                }
              }
            })
        }
        this.worfFlowService.getworkflowbydesignation('DISTILLERY', 'DISTILLERY_DIP_BOOK').subscribe((resp: any) => {
          this.workflowdata = resp.content
        });
      });
    }
    else {
      this.dipbookObj = this.preview.setData;
      this.viewId= this.preview.setData.id
      

      // if(this.dipbookObj.tankId){
      //   this.TankRegistrationService.getTanRegById(this.dipbookObj.tankId).subscribe((responceData: any) => {

      //     if(responceData.content){
      //       this.dipbookObj.tankName = responceData.content.tankRegistrationDetails.tankName?responceData.content.tankRegistrationDetails.tankName:'';
      //     }})

      // }

    }
  }

  feedback(data) {
    // this.formSubmitted = false;
    // if (form.valid === false) {
    //   this.formSubmitted = true;
    // } else {
      const approveObj = {
        comments: 'sample',
        event: data,
        status:data,
        id: parseInt(this.viewId),
        level: this.workflowdata?this.workflowdata.level:'',
        applicationNumber: this.dipbookObj.applicationNumber,
        isDigitalSignature: this.workflowdata?this.workflowdata.isDigitalSignature:'',
      };
      this.distilleryservice.addDipbook(approveObj).subscribe((responseData: any) => {
        if (responseData.responseCode == 200) {
          this.alert.showSuccess(responseData.responseMessage, 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/dipbook/list']);
        } else {
          this.alert.showError(responseData.userDisplayMesg, 'error');
        }
      })
    
  }

}
