import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, PreviewService, DistileryService, TankregistartionService, WorkflowcofigService } from '@app/services';
import { DatePipe } from '@angular/common';
import { TankConversionService } from '@app/services/distillery/tankconversion.service';
@Component({
  selector: 'app-tanktransferview',
  templateUrl: './tanktransferview.component.html',
  styleUrls: ['./tanktransferview.component.scss']
})
export class TanktransferviewComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  tankconverstionList: Array<any> = [];
  requestdate: any;
  tankconverstionObj: any = {
    // applicationNumber:'',
    applicationNumber: '',
    requestdate: '',
    tankName: '',
    transferQty: '',
    totank: '',
    toTankAvailableCapacity: '',
    reason: '',
    status: '',
    remarks: '',
    isShowButtons:'',
  };
  formSubmitted = false;
  gradeList: any;
  tankList: any;
  viewId;
  workflowdata: any;
  logactive: boolean = false;
  logshow: any[] = [];
  entitylist: any;
  userId: any;
  entityType: any;
  tankapplicationnumber: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private preview: PreviewService,
    private tankConService: TankConversionService,
    private worfFlowService: WorkflowcofigService,
    private datePipe: DatePipe,
    private distilleryservice: DistileryService,
    private tankregService: TankregistartionService,
  ) { }

  ngOnInit() {
    sessionStorage.setItem('nextId', 'TT')
    this.userId = localStorage.getItem('USER_ID');
    this.entityType = localStorage.getItem('EntityType');
    console.log('entity type-->>', this.entityType);
    this.route.params.subscribe(params => {
      if (params.id) {
        this.viewId = params.id;
        this.getbyid(this.viewId);
      } else {
        this.getbyid();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }

  getbyid(id?) {
    if (id) {
      this.distilleryservice.getbyiddata(id).subscribe((responceData: any) => {
        console.log('getby id respoence',responceData);
        let trasferviewdata = responceData.content;
        // // this.requestdate =`${this.tankconverstionObj.requestDate[0]}/${this.tankconverstionObj.requestDate[1]}/${this.tankconverstionObj.requestDate[2]}`;
        // this.requestdate = trasferviewdata.requestDate;

        this.tankconverstionObj.applicationNumber = trasferviewdata.fromDistTankRegistration.applicationNumber;
        this.tankconverstionObj.requestdate = this.datePipe.transform(trasferviewdata.requestDate, 'dd-MM-yyyy');
        this.tankconverstionObj.tankName = trasferviewdata.fromDistTankRegistration.tankRegistrationDetails.tankName;
        this.tankconverstionObj.transferQty = trasferviewdata.transferQty;
        this.tankconverstionObj.totank = trasferviewdata.toDistTankRegistration.tankRegistrationDetails.tankName;
        this.tankconverstionObj.toTankAvailableCapacity = trasferviewdata.toTankAvailableCapacity;
        this.tankconverstionObj.reason = trasferviewdata.reason;
        this.tankconverstionObj.status = trasferviewdata.status;
        this.tankconverstionObj.isShowButtons = trasferviewdata.isShowButtons;
        console.log('approved buttion handling -->>',this.tankconverstionObj.isShowButtons);
        

        if (this.tankconverstionObj.applicationNumber) {
          this.worfFlowService.getapprovallogs(this.tankconverstionObj.applicationNumber)
            .subscribe((resp: any) => {
              if (resp) {
                if (resp.length > 0) {
                  this.logactive = true;
                  this.logshow = resp;
                }
              }
            })
        }
        this.worfFlowService.getworkflowbydesignation('DISTILLERY', 'DISTILLERY_TANK_TRANSFER').subscribe((resp: any) => {
          this.workflowdata = resp.content
          console.log('approved buttion handling workflowdata -->>',this.workflowdata.isRejected);

        });

      });
    }
    else {
      // this.tankconverstionObj = JSON.parse(sessionStorage.getItem('formdata'));
      this.tankconverstionObj = this.preview.setData;
      console.log('tank transfer obj==>>', this.preview.setData);
      this.viewId = this.preview.setData.id;
      if (this.tankconverstionObj.fromtankId) {
        this.tankregService.getTanRegById(this.tankconverstionObj.fromtankId).subscribe((resp: any) => {
          if (resp.content) {
            console.log(resp.content, '=======from tank details======')
            this.tankconverstionObj.requestdate = this.datePipe.transform(this.tankconverstionObj.reqdate, 'dd-MM-yyyy');
            this.tankconverstionObj.tankName = resp.content.tankRegistrationDetails.tankName ? resp.content.tankRegistrationDetails.tankName : '';
          }
        })
      }
      if (this.tankconverstionObj.toTankId) {
        const totank = parseInt(this.tankconverstionObj.toTankId)
        this.tankregService.getTankGrade(totank).subscribe((resp: any) => {
          if (resp.data) {
            this.tankconverstionObj.totank = resp.data.tankRegName;
            this.tankconverstionObj.toRawMaterial = resp.data.tankRawMaterialName;
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
        "applicationNumber": this.tankapplicationnumber,
        "comments": "approved",
        "event": data,
        "isDigitalSignature": this.workflowdata ? this.workflowdata.isDigitalSignature : true,
        "level": this.workflowdata ? this.workflowdata.level : 'Level 2',
        "id": parseInt(this.viewId)
      };
      this.tankConService.approveTankTransfer(approveObj).subscribe((responseData: any) => {
        if (responseData.responseCode == '200') {
          this.alert.showSuccess(responseData.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/tankoverview']);
        } else {
          this.alert.showError(responseData.userDisplayMesg, 'error');
        }
      })
    }
  }

  getapplicationnumber() {

    this.distilleryservice.getapplicationnumbers('TT').subscribe((res: any) => {
      this.tankapplicationnumber = res.content;
    })
  }

  // setData(id?: any) {
  //   if (id) {
  //     const data = `?id=${id}`;
  //     this.apiService.get(`${apiUrls.tankConAddGetById}${data}`).then((responceData: any) => {
  //       this.tankconverstionObj = responceData.data;
  //     }).catch((err: any) => {
  //       console.log('\n err...', err);
  //     });
  //   } else {
  //     if (this.preview.setData) {
  //       this.tankconverstionObj = this.preview.setData;
  //       if (this.preview.setData.tankId) {
  //         const data = `?id=${this.preview.setData.tankId}`;
  //         this.masterapiService.get(`${apiUrls.getTankTypeById}${data}`).then((responceData: any) => {
  //           this.tankconverstionObj.tankName = responceData.data ? responceData.data.name : null;
  //         }).catch((err: any) => {
  //           console.log('\n err...', err);
  //         });
  //       }
  //       if (this.preview.setData.fromGradeId) {
  //         const data = `?id=${this.preview.setData.fromGradeId}`;
  //         this.masterapiService.get(`${apiUrls.getGradeById}${data}`).then((responceData: any) => {
  //           this.tankconverstionObj.fromGrade = responceData.data ? responceData.data.name : null;
  //         }).catch((err: any) => {
  //           console.log('\n err...', err);
  //         });
  //       }
  //       if (this.preview.setData.toGradeId) {
  //         const data = `?id=${this.preview.setData.toGradeId}`;
  //         this.masterapiService.get(`${apiUrls.getGradeById}${data}`).then((responceData: any) => {
  //           this.tankconverstionObj.toGrade = responceData.data ? responceData.data.name : null;
  //         }).catch((err: any) => {
  //           console.log('\n err...', err);
  //         });
  //       }
  //     }
  //   }
  // }

  // Approvredform(tankconvertionForm, status) {
  //   if (tankconvertionForm.valid === false) {
  //     this.formSubmitted = true;
  //   } else {
  //     const postParam = {
  //       tankConversionId: this.tankconverstionObj.id,
  //       status,
  //       remarks: this.tankconverstionObj.remarks,
  //       feedback: this.tankconverstionObj.feedback
  //     };
  //     this.apiService.post(apiUrls.stockAppRej, postParam).then((responseData: any) => {
  //       if (responseData.status == 's') {
  //         this.alert.showSuccess(responseData.userDisplayMesg, 'Success');
  //         this.router.navigate(['/supplychainmanagement/sugarmills/tanktransfer/list']);
  //       } else {
  //         this.alert.showError(responseData.userDisplayMesg, 'error');
  //       }
  //     }).catch((err: any) => {
  //       console.log('\n err...', err);
  //     });
  //   }
  // }

  // getPrint() {
  //   const url = `transportgeneration/generatePrintViewById?id=403&code=MF4`;
  //   this.apiService.postPrint(url).then((responceData: any) => {
  //     const newBlob = new Blob([responceData], { type: 'application/pdf' });
  //     if (window.navigator && window.navigator.msSaveOrOpenBlob) {
  //       window.navigator.msSaveOrOpenBlob(newBlob);
  //       return;
  //     }
  //     const data = window.URL.createObjectURL(newBlob);
  //     const link = document.createElement('a');
  //     link.href = data;
  //     link.download = 'TankConversion'
  //     link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
  //     return true;
  //   }).catch((err: any) => {
  //     console.log('\n err...', err);
  //   });
  // }

}
