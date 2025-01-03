import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService, DistileryService, TankRegistrationService, WorkflowcofigService, PreviewService } from '@app/services';

@Component({
  selector: 'app-viewmstistofspirit',
  templateUrl: './viewmstistofspirit.component.html',
  styleUrls: ['./viewmstistofspirit.component.scss']
})
export class ViewmstistofspiritComponent implements OnInit {
  mstObj: any;
  userId: any;
  entityType: any;
  viewId: any;
  addedit: any;
  logactive: boolean = false;
  logshow: any[] = [];
  workflowdata: any;
  formSubmitted = false;
  curDate = new Date();

  constructor(private router: Router,
    private route: ActivatedRoute,
    private worfFlowService: WorkflowcofigService,
    private distilleryservice: DistileryService,
    private alert: AlertService,
    private modalService: NgbModal,
    private datePipe: DatePipe,
    private TankRegistrationService: TankRegistrationService,
    private preview: PreviewService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('USER_ID');
    this.entityType = localStorage.getItem('EntityType');
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
        const data = responceData.content;
        this.mstObj = data;
        this.mstObj.inspectionDate = this.datePipe.transform(this.curDate, 'yyyy-MM-dd');
        this.mstObj.inspectionType = data.dipBookDetails.inspectionType;
        this.mstObj.perfomedBy = data.dipBookDetails.performedBy;
        this.mstObj.requestedBy = data.dipBookDetails.requestedBy;
        this.mstObj.tankId = data.dipBookDetails.distilleryTankRegistration.id;
        this.mstObj.tankName = data.dipBookDetails.distilleryTankRegistration.tankRegistrationDetails.tankName;
        this.mstObj.dryDip = data.dipBookDetails.dryDip;
        this.mstObj.indication = data.dipBookDetails.indication;
        this.mstObj.strength = data.dipBookDetails.strength;
        this.mstObj.temperature = data.dipBookDetails.temperature;
        this.mstObj.wetdip = data.dipBookDetails.wetDip;
        this.mstObj.wastage = data.dipBookDetails.wastage;
        this.mstObj.tankCategory = data.dipBookDetails.tankUsageGroupDto.tankCatagory.name;
        this.mstObj.rawMaterial = data.dipBookDetails.tankRawMaterialDto.name;
        this.mstObj.usageGroup = data.dipBookDetails.tankUsageGroupDto.name;
        this.mstObj.closingBalanceBL = data.dipBookDetails.closingBalanceBL;

        // this.calculateBalance(this.mstObj.wastage);
        
        if (this.mstObj.applicationNumber) {
          this.worfFlowService.getapprovallogs(this.mstObj.applicationNumber)
            .subscribe((resp: any) => {
              if (resp) {
                if (resp.length > 0) {
                  this.logactive = true;
                  this.logshow = resp;
                }
              }
            })
        }
        this.worfFlowService.getworkflowbydesignation('DISTILLERY', 'DISTILLERY_TANK_INSPECTION_MST_IST').subscribe((resp: any) => {
          this.workflowdata = resp.content
        });
      });
    }
    else {
      this.mstObj = this.preview.setData;
      this.viewId = this.preview.setData.id;
      this.mstObj.openingBalance = this.preview.setData.openingBalance;
      if (this.mstObj.tankId) {
        this.TankRegistrationService.getTanRegById(this.mstObj.tankId).subscribe((responceData: any) => {
          if (responceData.content) {
            this.mstObj.requestDate = this.datePipe.transform(this.curDate, 'yyyy-MM-dd');
            this.mstObj.tankName = responceData.content.tankRegistrationDetails.tankName ? responceData.content.tankRegistrationDetails.tankName : '';
          }
        })
      }
    }
  }

  // calculateBalance(data) {
  //   if (data > 0 ) {
  //     this.mstObj.openingBalance = this.mstObj.wastage + this.mstObj.closingBalanceBL;
  //   } else {
  //     this.mstObj.openingBalance = 0;
  //   }
  // }

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
        applicationNumber: this.mstObj.applicationNumber,
        isDigitalSignature: this.workflowdata ? this.workflowdata.isDigitalSignature : true,
      };
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          this.distilleryservice.addDipbook(approveObj).subscribe((responseData: any) => {
            if (responseData.responseCode == 200) {
              this.alert.showSuccess(responseData.responseMessage, 'Success');
              this.router.navigate(['/supplychainmanagement/distillery/mstistofspirit/list']);
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
