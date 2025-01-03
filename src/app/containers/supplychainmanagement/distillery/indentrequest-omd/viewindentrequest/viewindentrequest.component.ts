import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, UserManagmentService, DistileryService,WorkflowcofigService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-viewindentrequest',
  templateUrl: './viewindentrequest.component.html',
  styleUrls: ['./viewindentrequest.component.scss']
})
export class ViewindentrequestComponent implements OnInit {

  indentRequestObject: any = {};
  approvalobj: any = {
    remarks: '',
    quantity: '',
  };
  sentback ='';

  logshow: any[] =[];
  indentRequestLogs: any[] = [];
  formSubmitted = false;
  curDate = new Date();
  entityType: any;
  hiding = false;
  logactive = false;
  loginfo: any = {};
  productgrade: any;
  addedit: any;
  workflowdata: any

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private distileryService: DistileryService,
    private userManageService: UserManagmentService,
    private modelservice: NgbModal,
    private workflowconfig:WorkflowcofigService

  ) { }

  ngOnInit() {
    // this.remarks = this.indentRequestObject.remarks;
    this.entityType = localStorage.getItem('EntityType');
    this.pagecontrol(this.entityType);

    this.route.params.subscribe(params => {
      if (params.id) {
        this.getIndentRequestById(params.id);
        this.indentRequestObject.id = params.id;
      } else {
        this.getIndentRequestById();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }

  pagecontrol(entityType) {
    if (entityType === 'UP_EXCISE') {
      this.hiding = true;
    }
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  getIndentRequestById(id?) {
    if (id) {
      this.distileryService.getindentbyid(id).subscribe((response: any) => {
        if (response.status === 's') {
          this.indentRequestObject = response['data'];
          if (this.indentRequestObject.indentNumber){
            this.workflowconfig.getapprovallogs(this.indentRequestObject.indentNumber)
            .subscribe((resp: any) => {
              
              if (resp.length > 0) {
                this.logactive = true;;
                this.logshow = resp
                // debugger;
              }
            })
          }
          this.approvalobj.quantity = this.indentRequestObject.quantity,
          this.gettankcapacity();
          this.getautodata(response.data.allotmentId);
          // this.productgrade = this.indentRequestObject.productType.name;
          // if (response.data.status === 'APPROVED' || response.data.status === 'REJECTED' || response.data.status === 'SUGARMILL_APPROVED') {
          //   this.getloggerdetails(response.data.updatedBy);
          // }
        }
        // this.workflowconfig.getapprovallogs('')
      });
   
        this.workflowconfig.getworkflowbydesignation('DISTILLERY','Indent Request').subscribe((resp: any) => {
          this.workflowdata = resp.content
          
        })
      
      
     
    } else {
      this.indentRequestObject = this.distileryService.setPreview;
      this.indentRequestObject.indentDate = this.indentRequestObject.indentdate;
      // productTypeId: '',
      // consumptionTypeId: '',
      // stockTypeId: '',
    }
  }

  gettankcapacity() {
    const payload = {
      productTypeId: this.indentRequestObject.productTypeId ? this.indentRequestObject.productTypeId : '',
      gradeId: this.indentRequestObject.gradeId ? this.indentRequestObject.gradeId : ''
    };
    const data = 'productTypeId=' + payload.productTypeId + '&' + 'gradeId=' + payload.gradeId+ '&' + 'indentEntityId='+ this.indentRequestObject.distilleryEntityId;
    this.distileryService.gettankexistingcapacitydata(data).subscribe((resp: any) => {
      if (resp.status === 's') {
        if (resp.data) {
          this.indentRequestObject.molassestankcapacity = resp.data.totalTankCapacity;
          this.indentRequestObject.molassesAvailableForNoofdays = resp.data.availableDays;
          this.indentRequestObject.pendingquantityagainestpreviousrequests = resp.data.pendingQuantityLifted;
          this.indentRequestObject.currentmolassestankcapacity = resp.data.currentStock;
          this.indentRequestObject.dailyConsumption = resp.data.dailyConsumption;
          this.indentRequestObject.remaincapacity = this.indentRequestObject.molassestankcapacity -
          this.indentRequestObject.currentmolassestankcapacity;
        } else {
          this.indentRequestObject.molassestankcapacity = '';
          this.indentRequestObject.molassesAvailableForNoofdays = '';
          this.indentRequestObject.pendingquantityagainestpreviousrequests = '';
          this.indentRequestObject.currentmolassestankcapacity = '';
          this.indentRequestObject.dailyConsumption = '';
          this.indentRequestObject.remaincapacity = '';
        }
      }
    });
  }

  getloggerdetails(id?) {
    this.userManageService.getUserById(id).subscribe(responceData => {
      // this.logactive = true;
      // this.loginfo = responceData.data;
      console.log(this.loginfo);
    });
  }

  getautodata(data) {
    console.log('get auto populate data --->>>', data.value);
    const id = '?id=' + data + '&stockId=' + this.indentRequestObject.stockTypeId;
    this.distileryService.getautoresrveddata(id).subscribe((response: any) => {
      if (response.status === 's') {
        console.log('ssss-->>', response['data']);
        const autopopulate = response['data'];
        this.indentRequestObject.allotmentquantity = autopopulate.allotmentquantity;
        this.indentRequestObject.consumedquantity = autopopulate.consumedquantity;
        this.indentRequestObject.availablequantity = autopopulate.availablequantity;
      }
    });
  }

  userapproval(status, form) {
    this.formSubmitted = false;
    if (this.approvalobj.remarks === '' && (status === 'REJECTED' || status === 'SENDBACK')) {
      this.formSubmitted = true;
    } else {
      const modalRef = this.modelservice.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          this.approvalobj.status = status;
          const payload = {
            id: parseInt(this.indentRequestObject.id),
            comments: this.approvalobj.remarks,
            indentNumber:this.indentRequestObject.indentNumber,
            // status: this.approvalobj.status,
            // quantity: this.approvalobj.quantity,
            event: status,
            level: this.workflowdata.level,
            sentBackLevel: this.sentback?this.sentback:'',
          };
          
          this.distileryService.approvalindent(payload).subscribe((response: any) => {
            if (response.status === 's') {
              this.alert.showSuccess(response.userDisplayMesg, 'Success')
              this.router.navigate(['/supplychainmanagement/distillery/indentrequest/list']);
            } else {
              this.alert.showError(response.userDisplayMesg, 'error')
            }
          });

        }else {

        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }
}
