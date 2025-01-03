import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService, TankregistartionService, DistileryService, WorkflowcofigService, PreviewService } from '@app/services';

interface Post {
  startDate: Date;
}
@Component({
  selector: 'app-addmstistofspirit',
  templateUrl: './addmstistofspirit.component.html',
  styleUrls: ['./addmstistofspirit.component.scss']
})
export class AddmstistofspiritComponent implements OnInit {
  post: Post = {
    startDate: new Date(Date.now())
  }
  
  addedit: any;
  curDate = new Date();
  mstObj: any = {};
  tankList: any;
  editId: any;
  formSubmitted = false;
  workflowobj: any;
  applicationNumber: any;
  tankGrade: any;
  tankOpeningBalance: any;
  closingBalance: any;
  openingBalance = 500;
  hideflag:boolean;
  mst:boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private alert: AlertService,
    private datePipe: DatePipe,
    private workflowService: WorkflowcofigService,
    private tankRegService: TankregistartionService,
    private distilleryService: DistileryService,
    private preview: PreviewService
  ) { }

  ngOnInit() {
    this.mstObj.tankId = '';
    this.mstObj.inspectionType = '';
    
    this.mstObj.inspectionDate = this.datePipe.transform(this.curDate, 'yyyy-MM-dd');
    this.getTankList();
    this.getworkflow();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
        this.hideflag = true;
      } else if (this.preview.setData) {
        this.mstObj = this.preview.setData
        if (this.mstObj.tankId) {
          this.changeTankName(this.mstObj.tankId)
          this.getInspectionType(this.mstObj.inspectionType);
        }
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) {
    this.distilleryService.getDipBookById(id).subscribe((responceData: any) => {
      const data = responceData.content;
      this.mstObj.inspectionType = data.dipBookDetails.inspectionType;
      this.mstObj.perfomedBy = data.dipBookDetails.performedBy;
      this.mstObj.requestedBy = data.dipBookDetails.requestedBy;
      this.mstObj.tankId = data.dipBookDetails.distilleryTankRegistration.id;
      this.changeTankName(this.mstObj.tankId);
      this.mstObj.dryDip = data.dipBookDetails.dryDip;
      this.mstObj.indication = data.dipBookDetails.indication;
      this.mstObj.strength = data.dipBookDetails.strength;
      this.mstObj.temperature = data.dipBookDetails.temperature;
      this.mstObj.wetdip = data.dipBookDetails.wetDip;
      this.mstObj.wastage = data.dipBookDetails.wastage;
      this.mstObj.closingBalanceBL = data.dipBookDetails.closingBalanceBL;
      // this.mstObj.tankCategory = data.dipBookDetails.tankUsageGroupDto.tankCatagory.name;
      this.hideflag = true;
      this.getInspectionType(this.mstObj.inspectionType);
    });
  }

  getTankList() {
    this.distilleryService.getAllTankRegis().subscribe((resp: any) => {
      this.tankList = resp.content;
    });
  }

  changeTankName(id) {
    this.tankRegService.getTankGrade(id).subscribe((resp: any) => {
      this.tankGrade = resp.data;
        this.mstObj.tankCategory = this.tankGrade.tankUsageGroupDto.tankCatagory.name;
        this.mstObj.rawMaterial = this.tankGrade.tankRawMaterialName;
        this.mstObj.usageGroup = this.tankGrade.tankUsageGroupName;
        this.mstObj.tankRawMaterialId = this.tankGrade.tankRawMaterialId;
        this.mstObj.tankUsageGroupId = this.tankGrade.tankUsageGroupId;
        this.getOpeningBalance(id);
    });
  }

  getOpeningBalance(id) {
    this.distilleryService.getOpeningBalance(id).subscribe((resp: any) => {
      this.tankOpeningBalance = resp.content;
      this.mstObj.openingBalance = resp.content ? resp.content.closingBalanceBL : 0;
    })
  }

  getworkflow() {
    this.workflowService.getworkflowbydesignation('DISTILLERY', 'DISTILLERY_TANK_INSPECTION_MST_IST').subscribe((resp: any) => {
      this.workflowobj = resp.content;
      console.log(this.workflowobj, 'Workflow Object data');
    })
  }

  changeInspectionType(data) {
    this.getInspectionType(data);
    this.getapplicationnumber(data);
  }

  getInspectionType(data) {
    if (data == 'MST' || data == '') {
      this.mst = true;
    } else {
      this.mst = false;
    }
  }

  getapplicationnumber(data) {
    this.distilleryService.getapplicationnumbers(data).subscribe((res: any) => {
      this.applicationNumber = res.content;
    })
  }

  calculateWastage(event) {
    this.closingBalance = parseInt(event.target.value);
    const wastage = this.mstObj.openingBalance - this.closingBalance;
    if (wastage <= 0) {
      this.mstObj.wastage = 0;
    }
    else {
      this.mstObj.wastage = wastage;
    }
  }

  addTank(tankForm, status) {
    this.formSubmitted = true;
    const postParam = {
      applicationNumber: this.applicationNumber,
      comments: '',
      event: status,
      isDigitalSignature: this.workflowobj ? this.workflowobj.isDigitalSignature : false,
      level: this.workflowobj ? this.workflowobj.level : 'Level 1',
      dipBookDetails: {
        inspectionDate: this.mstObj.inspectionDate,
        inspectionType: this.mstObj.inspectionType,
        performedBy: this.mstObj.perfomedBy,
        requestedBy: this.mstObj.requestedBy,
        tankRawMaterialId: this.mstObj.tankRawMaterialId,
        tankUsageGroupId: this.mstObj.tankUsageGroupId,
        distTankRegistrationId: parseInt(this.mstObj.tankId),
        wetDip: this.mstObj.wetdip,
        dryDip: this.mstObj.dryDip,
        indication: this.mstObj.indication,
        strength: this.mstObj.strength,
        temperature: this.mstObj.temperature,
        wastage: this.mstObj.wastage,
        closingBalanceBL: this.mstObj.closingBalanceBL,
        status: status,
      }
    }
    if (this.editId) {
      postParam['id'] = parseInt(this.editId);
    }
    else {
      postParam['applicationNumber'] = this.applicationNumber;
    }
    if (tankForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.distilleryService.addDipbook(postParam) : this.distilleryService.addDipbook(postParam))
            .subscribe((responceData: any) => {
              if (responceData.responseCode == 200) {
                this.alert.showSuccess(responceData.responseMessage, 'Success');
                this.router.navigate(['/supplychainmanagement/distillery/mstistofspirit/list']);
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

  navigateTankList() {
    this.router.navigate(['supplychainmanagement/distillery/mstistofspirit/list']);
  }

  async gettankname(){

    if(this.mstObj.tankId){
      await this.tankRegService.getTanRegById(this.mstObj.tankId).subscribe((responceData: any) => {

        if(responceData.content){
          this.mstObj.tankName = responceData.content.tankRegistrationDetails.tankName?responceData.content.tankRegistrationDetails.tankName:'';
        }})

      return this.mstObj.tankName

    }
  }

  async navigatePreview(form) {
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      const tankName = await this.gettankname()
      this.preview.setData = this.mstObj;
      if(this.editId != ''){
        this.preview.setData.id = this.editId
      }

      this.router.navigate(['/supplychainmanagement/distillery/mstistofspirit/preview']);
    }
    
    // sessionStorage.setItem('formdata', JSON.stringify(this.dipbookObj));
    // this.router.navigate(['/supplychainmanagement/distillery/dipbook/preview']);
  }

}
