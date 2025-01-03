import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, DistileryService, TankregistartionService, WorkflowcofigService,PreviewService } from '@app/services';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TankConversionService } from '@app/services/distillery/tankconversion.service';

interface Post {
  startDate: Date;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  post: Post = {
    startDate: new Date(Date.now())
  }

  addedit: any;
  curDate = new Date();
  dipbookObj: any = {
    comments: "",
    tankId: ''

  };
  editId: any;
  formSubmitted = false;
  otnumberlist: any[] = [];
  tanktypelist: any[] = [];
  tanklist: any[] = [];

  workflowobj: any;
  dipapplicationnumber: any;
  tankdetailsdata: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private alert: AlertService,
    private tankRegService: TankregistartionService,
    private distilleryService: DistileryService,
    private service: TankConversionService,
    private datePipe: DatePipe,
    private workflowService: WorkflowcofigService,
    private preview: PreviewService
  ) { }

  ngOnInit() {
    // this.getTankRegList();
    this.getworkflow();
    this.getapplicationnumber();
    // this.dipbookObj.tankId = '';
    this.dipbookObj.requestDate = this.datePipe.transform(this.curDate, 'yyyy-MM-dd');
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }else if(this.preview.setData){
        this.dipbookObj = this.preview.setData
        if(this.dipbookObj.tankId){
          this.changeTankName(this.dipbookObj.tankId);

        }

      }
    });
    this.getTankList();
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }


  // async getotnumbers() {
  //   await this.distilleryService.getsenttostillOtnumber().subscribe((responceData: any) => {
  //     if (responceData.status === 's') {
  //       this.otnumberlist = responceData.data;
  //     }
  //   });
  // }

  calAl(){
    this.dipbookObj.alcohalLtr = (this.dipbookObj.bulkLtr * this.dipbookObj.strength)/100
  }

  setData(id) {
    this.distilleryService.getDipBookById(id).subscribe((responceData: any) => {
      const data = responceData.content
      this.dipbookObj.requestDate = this.datePipe.transform(data.dipBookDetails.inspectionDate, 'yyyy-MM-dd');
      this.dipbookObj.dip = responceData.content.dipBookDetails.wetDip;
      this.dipbookObj.bulkLtr =responceData.content.dipBookDetails.closingBalanceBL;
      this.dipbookObj.strength =responceData.content.dipBookDetails.strength;
      this.dipbookObj.temperature =responceData.content.dipBookDetails.temperature;
      this.dipbookObj.indication =responceData.content.dipBookDetails.indication;
      this.dipbookObj.alcohalLtr = responceData.content.dipBookDetails.alcoholicLitre
      this.dipbookObj.tankId = responceData.content.dipBookDetails.distilleryTankRegistration.id;
      this.changeTankName(this.dipbookObj.tankId);
      // if (this.dipbookObj.tankRegId) {
      //   this.dipbookObj.toUsageGroupId = data.toTankUsageGroupDto ? data.toTankUsageGroupDto.id : null;
      //   this.dipbookObj.toRawMaterialId = data.toTankRawMaterialDto ? data.toTankRawMaterialDto.id : null;
      // }
    });
  }

  getTankList() {
    this.distilleryService.getAllTankRegis().subscribe((resp: any) => {
      this.tanklist = resp.content;
    });
  }

  changeTankName(id) {
    if(id != ''){
      this.tankRegService.getTankGrade(id).subscribe((resp: any) => {
        this.tankdetailsdata = resp.data;
        this.dipbookObj.fromRawMaterial = this.tankdetailsdata.tankRawMaterialName;
        this.dipbookObj.fromUsageGroup = this.tankdetailsdata.tankUsageGroupName;
        this.dipbookObj.fromRawMaterialId = this.tankdetailsdata.tankRawMaterialId;
        this.dipbookObj.fromUsageGroupId = this.tankdetailsdata.tankUsageGroupId;
        if(!this.editId  ){
          this.dipbookObj.indication = '';
          this.dipbookObj.strength = '';
          this.dipbookObj.temperature = '';
          this.dipbookObj.alcohalLtr = '';
          this.dipbookObj.bulkLtr = '';
          this.dipbookObj.dip = '';
        }
   
        // this.dipbookObj.balance = this.tankdetailsdata.openingBalance;
      });

    }else{
      this.dipbookObj.fromRawMaterial = '';
      this.dipbookObj.fromUsageGroup = '';
      this.dipbookObj.fromRawMaterialId = '';
      this.dipbookObj.fromUsageGroupId = '';
      this.dipbookObj.indication = '';
      this.dipbookObj.strength = '';
      this.dipbookObj.temperature = '';
      this.dipbookObj.alcohalLtr = '';
      this.dipbookObj.bulkLtr = '';
      this.dipbookObj.dip = '';
    }

  }

  getTankRegList() {
    this.service.getAllTank().subscribe((resp: any) => {
      // this.tankRegList = resp.data;
    });
  }

  gettankusage(data) {
    let id = data;
    this.distilleryService.gettankusage(id).subscribe((res: any) => {
      if (res.status == 's') {
        // this.tankUsage = res.data;
      }
    });
  }

  gettankrwmetirel(data) {
    let id = data
    this.distilleryService.gettankrawmetirel(id).subscribe((res: any) => {
      if (res.status == 's') {
        // this.tankrawMaterial = res.data;
      }
    })
  }

  getapplicationnumber() {
    this.distilleryService.getapplicationnumbers('DB').subscribe((res: any) => {
      this.dipapplicationnumber = res.content;
    })
  }

  getworkflow() {
    this.workflowService.getworkflowbydesignation('DISTILLERY', 'DISTILLERY_DIP_BOOK').subscribe((resp: any) => {
      this.workflowobj = resp.content;
    })
  }

  addDipbook(dipbookForm, status) {
    this.formSubmitted = true;
    const postParam = {
      applicationNumber: this.dipapplicationnumber,
      comments: "Test",
      event: status,
      isDigitalSignature: this.workflowobj?this.workflowobj.isDigitalSignature:false,
      level: this.workflowobj?this.workflowobj.level:'Level 1',
      status: status,
      dipBookDetails: {
        inspectionDate:this.dipbookObj.requestDate,
        indication: this.dipbookObj.indication,
        strength: this.dipbookObj.strength,
        temperature: this.dipbookObj.temperature,
        alcoholicLitre: this.dipbookObj.alcohalLtr,
        closingBalanceBL: this.dipbookObj.bulkLtr,
        tankRawMaterialId: this.dipbookObj.fromRawMaterialId,
        tankUsageGroupId: this.dipbookObj.fromUsageGroupId,
        wetDip: this.dipbookObj.dip,
        distTankRegistrationId: parseInt(this.dipbookObj.tankId)
      }
    };

    console.log(postParam,'payloaddddddddddddddddddd');
    if (this.editId) {
      postParam['id'] = parseInt(this.editId);
    }
    else {
      postParam['applicationNumber'] = this.dipapplicationnumber
    }
    if (dipbookForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.distilleryService.addDipbook(postParam) : this.distilleryService.addDipbook(postParam))
            .subscribe((responceData: any) => {
              if (responceData.responseCode == 200) {
                this.alert.showSuccess(responceData.responseMessage, 'Success');
                this.router.navigate(['/supplychainmanagement/distillery/dipbook/list']);
              } else {
                this.alert.showError(responceData.responseMessage, 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }else{
      this.formSubmitted = true;
    }
  }

  navigatedipBookLIst() {
    this.router.navigate(['supplychainmanagement/distillery/dipbook/list']);
  }

 async gettankname(){

    if(this.dipbookObj.tankId){
      await this.tankRegService.getTanRegById(this.dipbookObj.tankId).subscribe((responceData: any) => {

        if(responceData.content){
          this.dipbookObj.tankName = responceData.content.tankRegistrationDetails.tankName?responceData.content.tankRegistrationDetails.tankName:'';
        }})

      return this.dipbookObj.tankName

    }
  }
 async navigateDipbookPreview(form) {
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      const tankName = await this.gettankname()
      this.preview.setData = this.dipbookObj;
      if(this.editId != ''){
        this.preview.setData.id = this.editId
      }

      this.router.navigate(['/supplychainmanagement/distillery/dipbook/preview']);
    }
  
  }
}
