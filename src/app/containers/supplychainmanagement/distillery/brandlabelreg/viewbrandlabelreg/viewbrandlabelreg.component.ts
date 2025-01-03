import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BrandlabelregService, AlertService, DocumentUploadService, WorkflowcofigService } from '@app/services';
import * as fileSaver from 'file-saver';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-viewbrandlabelreg',
  templateUrl: './viewbrandlabelreg.component.html',
  styleUrls: ['./viewbrandlabelreg.component.scss']
})
export class ViewbrandlabelregComponent implements OnInit {
  @ViewChild('rejectModal', { static: false }) rejectModal;
  @ViewChild('tabSet', { static: false }) tabSet;

  Obj: any;
  uploadDocList: any;
  rawList: any;
  labelList:any;
  formSubmitted: boolean = false;
  uploadList: any;
  totalfees: any;
  license: any;
  address: any;
  remark: boolean = false;
  remark1: boolean = false;
  remark2: boolean = false;
  totallabelfee: any;
 
  rejectConfirmation() {
    this.rejectModal.show()
  }
  reqObj: any;
  viewid: any;
  logactive: boolean = false;
  logshow: any[] = [];
  workflowdata: any;
  Obj1: any = {
    remark:'',
    
  };
  rejectid: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private brandlabelregService: BrandlabelregService,
    private worfFlowService: WorkflowcofigService,
    private alert: AlertService, private documentUploadService: DocumentUploadService,
   
   
  ) { }

  ngOnInit() {
    this.getworkflow();
    this.route.params.subscribe((param) => {
      if (param.Id) {
        this.viewid = param.Id;
         this.setData(this.viewid);
      
      }
      else {
        this.setData(this.viewid);
      }
    });
  }

  downloadDocument(uuid, documentName) {

    if (uuid && documentName) {
      this.documentUploadService.downloadDocument(uuid, documentName).subscribe((resp: any) => {
        // const blob: any = new Blob([resp], { type: 'image/jpeg; charset=utf-8' });
        fileSaver.saveAs(resp, documentName);
      },
        (error: any) => this.alert.showError('Error downloading the file', 'Error'),
        () => console.info('File downloaded successfully')
      );
    } else {
      this.alert.showError('File not available', 'Error');
    }

  }
  
  setData(id) {

   
    this.brandlabelregService.getById(id).subscribe((responceData: any) => {

    //  responceData.data.labelDetailList


      responceData.data.labelDetailList.forEach((element,i) => {
        this.totalfees = element.labelFees;
       
      })
       this.reqObj = responceData.data;
       this.uploadDocList = this.reqObj.brandDetailDocumentsList;
       this.rawList = this.reqObj.brandRawMaterialList;
       this.labelList = this.reqObj.labelDetailList;
       console.log(this.labelList)
       this.totallabelfee = this.labelList.reduce((a, b) => (
        {labelFees: a.labelFees + b.labelFees}));
        console.log(this.totallabelfee.labelFees)
      this.license =  responceData.data.licenseDetailsResponse;
      this.address = responceData.data.licenseDetailsResponse.street.concat(responceData.data.licenseDetailsResponse.districtDesc,responceData.data.licenseDetailsResponse.tahsilDesc,responceData.data.licenseDetailsResponse.pinCode);
      // this.uploadList = this.reqObj.labelDetailList[0].labelDetailDocumentList
      if (this.reqObj.applicationNumber) {
        this.worfFlowService.getapprovallogs(this.reqObj.applicationNumber)
          .subscribe((resp: any) => {
            if (resp) {
              if (resp.length > 0) {
                this.logactive = true;
                this.logshow = resp;
              }
            }
          })
      }
      });
      // var totallabelfee = [{labelFees: 20,age:27},{labelFees:30,age:25}];
      // let t1 = [];
      // t1= totallabelfee.reduce((a, b) => (
      // {labelFees: a.labelFees + b.labelFees}));
      // console.log(t1.labelFees);
    

       
        }
   
        getworkflow(){
          this.worfFlowService.getworkflowbydesignation('PARENT_UNIT', 'PARENT_UNIT_BRAND_REGISTRATION').subscribe((resp: any) => {
            this.workflowdata = resp.content;

            if (this.workflowdata.level != 'level 1') {
              this.remark = true;
               } 
          });
        }
  feedback(data, form) {
  
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
      
    } else {
      const approveObj = {
        applicationNumber: this.reqObj.applicationNumber,
        id: parseInt(this.viewid),
        isDigitalSignature: this.workflowdata ? this.workflowdata.isDigitalSignature : true,
         event: data,
        stage: this.reqObj.stage,
      stageDesc: this.reqObj.stageDesc,
      comments:this.Obj1.remark,
       status:data,
      sentBackLevels: this.rejectid ? this.rejectid : '',
      level: this.workflowdata ? this.workflowdata.level : 'Level 2', 
       };
     
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          this.brandlabelregService.addetails(approveObj).subscribe((responceData: any) => {
            if (responceData.errorCode == 201) {
              this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
              this.router.navigate(['/supplychainmanagement/distillery/brandlabelreg/list']);
            } else {
              this.alert.showError(responceData.userDisplayMesg, 'error');
            }
          })
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

}
 
