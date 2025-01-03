import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Router, ActivatedRoute } from '@angular/router';
import { TanktransferService, } from '@app/services/sugarmill/tanktransfer.service';
import { AlertService, StockInService, DistileryService, WorkflowcofigService, PatternService,PreviewService } from '@app/services';
import { TankregistartionService } from '@app/services/distillery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import * as moment from 'moment';
import { formatDate, DatePipe } from '@angular/common';
import { NgForm, Form } from '@angular/forms';


interface Post {
  startDate: Date;
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @ViewChild('tankTransferForm', { static: false }) public tankTransferForm: NgForm

  post: Post = {
    startDate: new Date(Date.now())
  }
  tanktransfer: any = {
    reqdate: [formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
    comments: '',
    fromtankId: '',
    toTankId: '',
    reason: ''
  }
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  tankList: any;
  editId: any;
  stockavailabilityObj: any;
  tankData: any;
  tankDetails: any;
  gradeData: any;
  toGradeData: any;
  formSubmitted: boolean;
  mindate: any = new Date();
  workflowobj: any;
  tankapplicationnumber: any;
  workflowdata: any;
  tankid: any;
  tanktypeid: any;

  constructor(private router: Router, private route: ActivatedRoute, private apiservice: TanktransferService,
    private alert: AlertService, private StockInService: StockInService, private modalService: NgbModal,
    private datepipe: DatePipe, private distileryService: DistileryService, private tankregService: TankregistartionService,
    private worfFlowService: WorkflowcofigService, public pattern: PatternService,
    private preview: PreviewService,
  ) { }

  ngOnInit() {
    // sessionStorage.setItem('nextId','TR')
    this.getTankLists();
    this.getworkflow();
    this.getapplicationnumber();
    this.tanktypeid = sessionStorage.getItem('tankid');
    this.tanktransfer.fromtankId = parseInt(this.tanktypeid);
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else if (this.preview.setData) {
        this.tanktransfer = this.preview.setData;
        if (this.tanktransfer.toTankId) {
          this.getToTankByGradeId(this.tanktransfer.toTankId);
        }
      }
    });

    this.mindate = moment(this.mindate).format('yyyy-MM-DD');
    this.tanktransfer.reqdate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    if (this.tanktypeid) {
      this.getTankByGradeId(this.tanktypeid);
    }
  }

  setData(id) {
    this.distileryService.getbyiddata(id).subscribe((responceData: any) => {
      let fromdata = responceData.content.fromDistTankRegistration;
      let todata = responceData.content.toDistTankRegistration;

      this.tanktransfer.fromtankId = fromdata.id;
      this.getTankByGradeId(this.tanktransfer.fromtankId);
      this.tanktransfer.toTankId = todata.id;
      this.getToTankByGradeId(this.tanktransfer.toTankId);
      this.tanktransfer.reason = responceData.content.reason;
      this.tanktransfer.reqdate = this.datepipe.transform(responceData.content.requestDate, 'yyyy-MM-dd');

    })
  }

  getTankLists() {
    this.distileryService.getallfromtanks().subscribe((resp: any) => {
      this.tankList = resp.content;
    })
  }

  getTankByGradeId(id) {
    console.log('selected id-->>', id);
    this.tankid = id
    this.tankregService.getTankGrade(id).subscribe((resp: any) => {
      if(resp.status !='f'){
        this.gradeData = resp.data;
        this.tanktransfer.fromTankGrade = this.gradeData.tankRawMaterialName?this.gradeData.tankRawMaterialName:'';
        this.tanktransfer.fromTankGradeId = this.gradeData.tankRawMaterialId;
        this.tanktransfer.transferQty = this.gradeData.openingBalance;
        // this.tankDetails=[];
        this.getGradeByTankId(this.gradeData.tankRawMaterialId);
      }else{
        this.alert.showError(resp.responseMessage, 'error');

      }
    

    });
  }

  getGradeByTankId(id) {

    this.distileryService.getByRawMaterialId(id).subscribe((resp: any) => {
      this.tankDetails = resp.content;

      console.log(' tank details -->>', this.tankDetails);
      console.log('tank id==>>', this.tankid);

      if (this.tankDetails.length > 0) {
        var filteredObj = this.tankDetails.filter((item) => {
          return item.id != this.tankid
        });
      }

      console.log('filterd data ==>>', filteredObj);
      this.tankDetails = filteredObj;
      console.log('after filter ==>>', this.tankDetails);


    });
  }

  getToTankByGradeId(id) {
    this.tankregService.getTankGrade(id).subscribe((resp: any) => {
      this.toGradeData = resp.data;
      this.tanktransfer.ToTankGrade = this.toGradeData.tankRawMaterialName?this.toGradeData.tankRawMaterialName:'';
      this.tanktransfer.ToTankGradeId = this.toGradeData.tankRawMaterialId?this.toGradeData.tankRawMaterialId:'';
      this.tanktransfer.capacity = this.toGradeData.tankCapacity?this.toGradeData.tankCapacity:'';
      this.tanktransfer.toTankAvailableCapacity = this.toGradeData.availableCapacity?this.toGradeData.availableCapacity:'';
      this.tanktransfer.transOrEmpt = this.toGradeData.openingBalance?this.toGradeData.openingBalance:'';
      const obj = this.tanktransfer.transOrEmpt?this.tanktransfer.transOrEmpt:''
      if (obj == 0) {
        this.tanktransfer.transOrEmpt = 'yes';
      } else {
        this.tanktransfer.transOrEmpt = 'no';
      }
    });
  }

  getTankDetail(id) {
    this.StockInService.getTankDetail(id).subscribe((resp: any) => {
      this.tanktransfer.transferQty = resp.data ? resp.data.occupiedCapacity : null;
    })
  }
  getworkflow() {
    this.worfFlowService.getworkflowbydesignation('DISTILLERY', 'DISTILLERY_TANK_TRANSFER').subscribe((resp: any) => {
      this.workflowdata = resp.content
    });
  }


  tanktransferdata(tankTransferForm, status) {
  
    console.log('form validation ==>>',tankTransferForm.valid);
    
    const data = {
      // "applicationNumber": this.tankapplicationnumber,
      "comments": "",
      "event": status,
      "fromDistTankRegistrationId": parseInt(this.tanktransfer.fromtankId),
      "isDigitalSignature": this.workflowobj ? this.workflowobj.isDigitalSignature : false,
      "level": this.workflowobj ? this.workflowobj.level : 'Level 1',
      "reason": this.tanktransfer.reason,
      "requestDate": this.tanktransfer.reqdate,
      "toDistTankRegistrationId": parseInt(this.tanktransfer.toTankId),
      "toTankAvailableCapacity": this.tanktransfer.toTankAvailableCapacity,
      "transferQty": this.tanktransfer.transferQty,
    };

    console.log('tank transfer paylaod===>>', data);

    if (this.editId) {
      data['id'] = this.editId;
    } else {
      data['applicationNumber'] = this.tankapplicationnumber
    }
    if (tankTransferForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.distileryService.updateTanTransfer(data) : this.distileryService.tanktranscreate(data))
            .subscribe((res: any) => {
              if (res.status == 's') {
                this.handleResponse(res);
              } else {
                this.handleResponse(res);
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }else{
      this.formSubmitted = true
    }
  }

  handleResponse(responceData: any) {
    if (responceData.content) {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/distillery/tankoverview']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }

  getapplicationnumber() {

    this.distileryService.getapplicationnumbers('TT').subscribe((res: any) => {
      this.tankapplicationnumber = res.content;
    })
  }
  navigatetankPreview(form) {
    // sessionStorage.setItem('formdata', JSON.stringify(form.value));
    this.preview.setData = this.tanktransfer;
    this.router.navigate(['/supplychainmanagement/distillery/tanktransfer/preview']);
  }

  async navigatePreview(form) {
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      this.preview.setData = this.tanktransfer;
      if (this.editId != '') {
        this.preview.setData.id = this.editId
      }
      this.router.navigate(['/supplychainmanagement/distillery/tanktransfer/preview']);
    }
  }
}
