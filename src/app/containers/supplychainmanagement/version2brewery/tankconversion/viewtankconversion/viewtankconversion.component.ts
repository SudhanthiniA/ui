import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TankConversionService } from '@app/services/distillery/tankconversion.service';
import { AlertService, TankRegistrationService, DistileryService, WorkflowcofigService, PreviewService } from '@app/services';

@Component({
  selector: 'app-viewtankconversion',
  templateUrl: './viewtankconversion.component.html',
  styleUrls: ['./viewtankconversion.component.scss']
})
export class ViewtankconversionComponent implements OnInit {
  tankConversionObj: any;
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
    private tankRegService: TankRegistrationService,
    private alert: AlertService,
    private distillery: DistileryService,
    private preview: PreviewService
  ) { }

  ngOnInit() {
    sessionStorage.setItem('nextId','TC')
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
      this.service.getTankConversionById(id).subscribe((responceData: any) => {
        this.tankConversionObj = responceData.content;
        this.tankConversionObj.fromRawMaterial = responceData.content.fromTankRawMaterialDto.name;
        this.tankConversionObj.toRawName = responceData.content.toTankRawMaterialDto.name;
        this.tankConversionObj.fromUsageGroup = responceData.content.fromTankUsageGroupDto.name;
        this.tankConversionObj.toUsageName = responceData.content.toTankUsageGroupDto.name;
        this.tankConversionObj.tankName = responceData.content.distTankRegistration.tankRegistrationDetails.tankName;
        this.tankConversionObj.tankId = responceData.content.distTankRegistration.id;
        this.tankConversionObj.reasonForConvestion = responceData.content.reason;
        if (this.tankConversionObj.applicationNumber) {
          this.worfFlowService.getapprovallogs(this.tankConversionObj.applicationNumber)
            .subscribe((resp: any) => {
              if (resp) {
                if (resp.length > 0) {
                  this.logactive = true;
                  this.logshow = resp;
                }
              }
            })
        }
        this.worfFlowService.getworkflowbydesignation('DISTILLERY', 'DISTILLERY_TANK_CONVERSION').subscribe((resp: any) => {
          this.workflowdata = resp.content
        });
      });
    }
    else {
      this.tankConversionObj = this.preview.setData;
      console.log(this.tankConversionObj, '=======preview data========');
      this.viewId = this.preview.setData.id;
      if (this.tankConversionObj.tankId) {
        this.tankRegService.getTanRegById(this.tankConversionObj.tankId).subscribe((resp: any) => {
          if (resp.data) {
            this.tankConversionObj.status = "IN_PROGRESS";
            this.tankConversionObj.tankName = resp.data.tankRegistrationDetails.tankName ? resp.data.tankRegistrationDetails.tankName : '';
          }
        })
      }
      if (this.tankConversionObj.toUsageGroupId) {
        const ids = this.tankConversionObj.fromUsageGroupId;
        const data = parseInt(this.tankConversionObj.toRawMaterialId);
        this.distillery.gettankrawmetirel(ids).subscribe((resp: any) => {
          if (resp.data) {
            this.tankConversionObj.toRawName = resp.data.find(i => i.id === data).name;
            this.tankConversionObj.status = "IN_PROGRESS";
            this.tankConversionObj.toUsageName = resp.data[0].tankUsageGroup.name ? resp.data[0].tankUsageGroup.name : '';
          }
        })
      }
    }
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
        applicationNumber: this.tankConversionObj.applicationNumber,
        isDigitalSignature: this.workflowdata ? this.workflowdata.isDigitalSignature : true,
      };
      this.service.addTankConversion(approveObj).subscribe((responseData: any) => {
        if (responseData.responseCode == 200) {
          this.alert.showSuccess(responseData.responseMessage, 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/tankoverview']);
        } else {
          this.alert.showError(responseData.userDisplayMesg, 'error');
        }
      })
    }
  }

}
