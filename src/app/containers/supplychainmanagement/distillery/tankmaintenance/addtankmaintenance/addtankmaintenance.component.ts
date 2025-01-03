import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, TankregistartionService, WorkflowcofigService, DistileryService, PatternService, PreviewService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { TankMaintainancesService } from '@app/services/distillery/tankmaintainance.service';
import { CommonStockServices } from '@app/services/distillery/commonstock.service';
import * as moment from 'moment';

@Component({
  selector: 'app-addtankmaintenance',
  templateUrl: './addtankmaintenance.component.html',
  styleUrls: ['./addtankmaintenance.component.scss']
})
export class AddtankmaintenanceComponent implements OnInit {
  formSubmitted = false;
  editId: any;
  addedit: string;
  tankObj: any;
  tankreqObj: any = {
    requestDate: '',
    tankEmpty: '',
    tankId: '',
    capacity: '',
    tankUsage: '',
    reasonForMaintanence: '',
    durationOfMaintenance: '',
    tankMaterial: '',
    maintanenceType: '',
    scheduleDate: ''
  };
  tankList: any;
  Scheduled = false;
  tankEmpty: boolean;

  workflowdata: any;
  tankapplicationnumber: any;
  tanktypeid: any;
  mindate: string;

  constructor(
    private router: Router,
    private alert: AlertService,
    private modalService: NgbModal,
    private TankmaintainanceService: TankMaintainancesService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    public pattern: PatternService,
    private commonservices: CommonStockServices,
    private workflowService: WorkflowcofigService,
    private distileryService: DistileryService,
    private preview: PreviewService,
    private tankRegService: TankregistartionService
  ) { }
  curDate = new Date();
  ngOnInit() {
    sessionStorage.setItem('nextId', 'TR')
    this.getapplicationnumber();
    this.getworkflow();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
      else if (this.preview.setData) {
        this.tankreqObj = this.preview.setData
        if (this.tankreqObj.tankId) {
          this.gettankdetails(this.tankreqObj.tankId)
          this.tankreqObj.requestDate = this.datePipe.transform(this.preview.setData.requestDate, 'yyyy-MM-dd')
        }
      }
    });
    this.mindate = moment(this.mindate).format('yyyy-MM-DD');
    this.tankreqObj.requestDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

    this.distileryService.getAllTankRegis().subscribe((responceData: any) => {
      this.tankList = responceData.content;
    });
    this.tanktypeid = sessionStorage.getItem('tankid');
    this.tankreqObj.tankId = parseInt(this.tanktypeid);
    if (this.tanktypeid) {
      this.gettankdetails(this.tanktypeid);
    }


    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';

  }
  setData(id) {
    this.TankmaintainanceService.getTanById(id).subscribe((responceData: any) => {
      let data = responceData.content
      this.tankreqObj = responceData.content;
      this.tankreqObj.tankId = data.toDistTankRegistration ? data.toDistTankRegistration.id : null;
      this.tankreqObj.reasonForMaintanence = data.reasonForMaintenance
      this.tankreqObj.durationOfMaintenance = data.durationOfMaintenance
      this.tankreqObj.scheduleDate = this.datePipe.transform(data.scheduleDate, 'yyyy-MM-dd');
      let reqdate = data.toDistTankRegistration.tankRegistrationDetails.requestDate;
      this.tankreqObj.requestDate = this.datePipe.transform(reqdate, 'yyyy-MM-dd')
      //  this.tankreqObj.scheduleDate = this.datePipe.transform(data.scheduleDate, 'yyyy-MM-dd')

      if (this.tankreqObj.maintanenceType == 'Scheduled') {
        this.Scheduled = true;
      }else{
        this.Scheduled = true;
      }
      this.gettankdetails(this.tankreqObj.tankId);
      console.log(responceData);

      
    });
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  gettankdetails(id) {
    this.commonservices.getTanById(id).subscribe((responceData: any) => {
      if(responceData.status !='f'){

        this.tankreqObj.capacity = responceData.data.tankCapacity ? responceData.data.tankCapacity : null;
        this.tankreqObj.tankUsage = responceData.data.tankUsageGroupName ? responceData.data.tankUsageGroupName : null;
        this.tankreqObj.tankMaterial = responceData.data.tankRawMaterialName ? responceData.data.tankRawMaterialName : null;
        this.tankreqObj.tankEmpty = responceData.data.openingBalance ? responceData.data.openingBalance : null;
        const obj = this.tankreqObj.tankEmpty;
        if (obj === 1000) {
          this.tankreqObj.tankEmpty = 'yes';
        } else {
          this.tankreqObj.tankEmpty = 'no';
        }
      }else{
        this.alert.showError(responceData.responseMessage, 'error');

      }
     
    });
  }

  show($event) {
    this.tankreqObj.scheduleDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd')
    const show = $event.target.value;
    console.log($event.target.value);
    if (show == 'Scheduled') {
      this.Scheduled = true;

    }
    else {
      this.tankreqObj.scheduleDate = '';
      this.tankreqObj['durationOfMaintenance'] = '';
      this.Scheduled = false;

    }
  }
  getworkflow() {
    this.workflowService.getworkflowbydesignation('DISTILLERY', 'DISTILLERY_TANK_MAINTENANCE').subscribe((resp: any) => {
      this.workflowdata = resp.content
    });
  }

  getapplicationnumber() {

    this.distileryService.getapplicationnumbers('TM').subscribe((res: any) => {
      this.tankapplicationnumber = res.content;
    })
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

  addtank(Pd25Form, method) {
    this.formSubmitted = true;
    const postParam = {
      requestDate:this.tankreqObj.requestDate,
      scheduleDate: this.tankreqObj.scheduleDate,
      toDistTankRegistrationId: this.tankreqObj.tankId,
      reasonForMaintenance: this.tankreqObj.reasonForMaintanence,
      durationOfMaintenance: this.tankreqObj.durationOfMaintenance,
      maintanenceType: this.tankreqObj.maintanenceType,
      // applicationNumber: this.tankapplicationnumber,
      comments: '',
      event: method,

      isDigitalSignature: this.workflowdata ? this.workflowdata.isDigitalSignature : false,
      level: this.workflowdata ? this.workflowdata.level : 'Level 1',
    };
    if (this.editId) {
      postParam['id'] = this.editId;
    }else{
      postParam['applicationNumber'] = this.tankapplicationnumber
    }
    if (Pd25Form.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {

          const tankMainSer = this.TankmaintainanceService;
          const tankMainSerIns = (this.editId) ? tankMainSer.addTank(postParam) : tankMainSer.addTank(postParam);

          tankMainSerIns.subscribe(
            (responceData: any) => {
              if (responceData.responseCode === 200) {
                this.alert.showSuccess(responceData.responseMessage, 'success');
                sessionStorage.removeItem('nextId')
                this.router.navigate(['/supplychainmanagement/distillery/tankoverview']);
              }
              else {
                this.alert.showError(responceData.responseMessage, 'error');
              }

            },
            (err: any) => {
              console.log('\n err...', err);
            }
          );
        }
      });
    }
  }
  async gettankname() {
    this.tankreqObj.applicationNumber = this.tankapplicationnumber;
    if (this.tankreqObj.tankId) {
      await this.tankRegService.getTanRegById(this.tankreqObj.tankId).subscribe((responceData: any) => {

        if (responceData.content) {

          this.tankreqObj.tankId = responceData.content.tankRegistrationDetails.tankName ? responceData.content.tankRegistrationDetails.tankName : '';
        }
      })

      return this.tankreqObj.tankId

    }
  }
  async navigatetankPreview(form) {
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      const tankName = await this.gettankname()
      this.preview.setData = this.tankreqObj;
      if (this.editId != '') {
        this.preview.setData.id = this.editId
      }

      this.router.navigate(['/supplychainmanagement/distillery/tankmaintenance/preview']);
    }

  }
}