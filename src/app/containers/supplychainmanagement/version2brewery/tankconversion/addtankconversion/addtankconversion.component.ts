import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import {
  AlertService,
  DistileryService,
  PreviewService,
  TankregistartionService,
  WorkflowcofigService,
  PatternService
} from '@app/services';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TankConversionService } from '@app/services/distillery/tankconversion.service';

interface Post {
  startDate: Date;
}
@Component({
  selector: 'app-addtankconversion',
  templateUrl: './addtankconversion.component.html',
  styleUrls: ['./addtankconversion.component.scss']
})
export class AddtankconversionComponent implements OnInit {
  post: Post = {
    startDate: new Date(Date.now())
  }

  addedit: any;
  curDate = new Date();
  tankConversionList: Array<any> = [];
  tankConversionObj: any = {
    comments: "",
  };
  tankList: any;
  tankGrade: any;
  tankRegList: any;
  tankUsage: any;
  editId: any;
  formSubmitted = false;
  tankrawMaterial: any;
  tankapplicationnumber: any;
  workflowobj: any;
  tankarray: [];
  tanktypeid: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private alert: AlertService,
    private tankRegService: TankregistartionService,
    private distilleryService: DistileryService,
    private service: TankConversionService,
    private datePipe: DatePipe,
    private preview: PreviewService,
    private workflowService: WorkflowcofigService,
    public pattern: PatternService
  ) { }

  ngOnInit() {
    sessionStorage.setItem('nextId', 'TR')
    this.getTankRegList();
    this.getworkflow();
    this.getapplicationnumber();
    this.tankConversionObj.tankId = '';
    this.tankConversionObj.requestDate = this.datePipe.transform(this.curDate, 'yyyy-MM-dd');
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else if (this.preview.setData) {
        this.tankConversionObj = this.preview.setData
        if (this.tankConversionObj.tankId) {
          this.changeTankName(this.tankConversionObj.tankId)
        }
      }
    });
    this.getTankList();
    this.tanktypeid = sessionStorage.getItem('tankid');
    this.tankConversionObj.tankId = parseInt(this.tanktypeid);
    if (this.tanktypeid) {
      this.changeTankName(this.tanktypeid);
    }
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) {
    this.service.getTankConversionById(id).subscribe((responceData: any) => {
      const data = responceData.content
      this.tankConversionObj.requestDate = this.datePipe.transform(data.requestDate, 'yyyy-MM-dd');
      this.tankConversionObj.tankId = data.distTankRegistration.id;
      this.tankConversionObj.tankRegId = "1";
      this.tankConversionObj.reasonForConvestion = data.reason;
      this.changeTankName(data.distTankRegistration.id);
      if (this.tankConversionObj.tankRegId) {
        this.tankConversionObj.toUsageGroupId = data.toTankUsageGroupDto ? data.toTankUsageGroupDto.id : null;
        this.tankConversionObj.toRawMaterialId = data.toTankRawMaterialDto ? data.toTankRawMaterialDto.id : null;
      }
    });
  }

  // Only AlphaNumeric with space 
  alphaNumeric(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9 ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  getTankList() {
    this.distilleryService.getAllTankRegis().subscribe((resp: any) => {
      this.tankList = resp.content;
    });
  }

  changeTankName(id) {
    this.tankRegService.getTankGrade(id).subscribe((resp: any) => {
      if(resp.status !='f'){
        this.tankGrade = resp.data;
        this.tankConversionObj.fromRawMaterial = this.tankGrade.tankRawMaterialName;
        this.tankConversionObj.fromUsageGroup = this.tankGrade.tankUsageGroupName;
        this.tankConversionObj.fromRawMaterialId = this.tankGrade.tankRawMaterialId;
        this.tankConversionObj.fromUsageGroupId = this.tankGrade.tankUsageGroupId;
        this.tankConversionObj.balance = this.tankGrade.openingBalance;
        this.tankConversionObj.toUsageGroupId = this.tankGrade.tankUsageGroupName;
        this.gettankrwmetirel(this.tankGrade.tankUsageGroupId);
      }else{
        this.alert.showError(resp.userDisplayMesg, 'error');
      }
    

    });
  }

  getTankRegList() {
    this.service.getAllTank().subscribe((resp: any) => {
      this.tankRegList = resp.data;
    });
  }

  gettankusage(data) {
    let id = data;
    this.distilleryService.gettankusage(id).subscribe((res: any) => {
      if (res.status == 's') {
        this.tankUsage = res.data;
      }
    });
  }

  gettankrwmetirel(data) {
    let id = data
    // debugger;
    this.distilleryService.gettankrawmetirel(id).subscribe((res: any) => {
      if (res.status == 's') {
        this.tankrawMaterial = res.data;
      }
    })
  }

  getapplicationnumber() {
    this.distilleryService.getapplicationnumbers('TC').subscribe((res: any) => {
      this.tankapplicationnumber = res.content;
    })
  }

  getworkflow() {
    this.workflowService.getworkflowbydesignation('DISTILLERY', 'DISTILLERY_TANK_CONVERSION').subscribe((resp: any) => {
      this.workflowobj = resp.content;
      console.log(this.workflowobj, 'Workflow Object data');
    })
  }

  addTankConversion(tankForm, status) {
    this.formSubmitted = true;
    const postParam = {
      applicationNumber: this.tankapplicationnumber,
      comments: '',
      event: status,
      isDigitalSignature: this.workflowobj ? this.workflowobj.isDigitalSignature : false,
      level: this.workflowobj ? this.workflowobj.level : 'Level 1',
      status: status,
      fromRawMaterialId: parseInt(this.tankConversionObj.fromRawMaterialId),
      fromUsageGroupId: parseInt(this.tankConversionObj.fromUsageGroupId),
      reason: this.tankConversionObj.reasonForConvestion,
      distTankRegistrationId: parseInt(this.tankConversionObj.tankId),
      toRawMaterialId: parseInt(this.tankConversionObj.toRawMaterialId),
      toUsageGroupId: parseInt(this.tankGrade.tankUsageGroupId),
      requestDate: this.tankConversionObj.requestDate
      // registrationTypeCode: "PORTABLE_TANK",
      // registrationTypeDesc: "Portable Tank Registration",
    };
    if (this.editId) {
      postParam['id'] = parseInt(this.editId);
    }
    else {
      postParam['applicationNumber'] = this.tankapplicationnumber
    }
    if (tankForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.service.addTankConversion(postParam) : this.service.addTankConversion(postParam))
            .subscribe((responceData: any) => {
              if (responceData.responseCode == 200) {
                this.alert.showSuccess(responceData.responseMessage, 'Success');
                this.router.navigate(['/supplychainmanagement/distillery/tankoverview']);
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

  navigatetankconverstionList() {
    this.router.navigate(['supplychainmanagement/distillery/tankoverview']);
  }
  
  async gettankname() {
    this.tankConversionObj.applicationNumber = this.tankapplicationnumber;
    if (this.tankConversionObj.tankId) {
      await this.tankRegService.getTanRegById(this.tankConversionObj.tankId).subscribe((responceData: any) => {

        if (responceData.content) {

          this.tankConversionObj.tankName = responceData.content.tankRegistrationDetails.tankName ? responceData.content.tankRegistrationDetails.tankName : '';
        }
      })

      return this.tankConversionObj.tankName

    }
  }
  async navigatePreview(form) {
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      const tankName = await this.gettankname()
      this.preview.setData = this.tankConversionObj;
      if (this.editId != '') {
        this.preview.setData.id = this.editId
      }

      this.router.navigate(['/supplychainmanagement/distillery/tankconversion/preview']);
    }
  }
}
