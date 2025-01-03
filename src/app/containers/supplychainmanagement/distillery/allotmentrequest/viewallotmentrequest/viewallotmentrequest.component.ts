import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistileryService, AlertService, UserManagmentService } from '@app/services';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';


@Component({
  selector: 'app-viewallotmentrequest',
  templateUrl: './viewallotmentrequest.component.html',
  styleUrls: ['./viewallotmentrequest.component.scss']
})
export class ViewallotmentrequestComponent implements OnInit {
  userId: any;
  addedit: any;
  name: any;
  entityType: any;
  alertmeg: any;
  logshow:any;
  allotmentrequestobj: any = {};
  allotmentdeatils: any[] = []
  approvalobj: any = {
    remarks: '',
    status: '',
    unreserved: '',
    reserved: '',
    requestedReservedMolasses: '',
    consuptiontype:'',
    consuptiontypename:'',
    requestedDate:'',
    seasonYear:''
  };
  workflowobj:any;
  sentback ='';
  date: any;
  editId: any;
  entitylist: any;
  formSubmitted = false;
  logactive = false;
  loginfo: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private distileryService: DistileryService,
    private alert: AlertService,
    private userManageService: UserManagmentService,
    private wrokflowconfig: WorkflowcofigService

  ) { }

  ngOnInit() {
    this.getworkflow();
    this.userId = localStorage.getItem('USER_ID');
    this.entityType = localStorage.getItem('EntityType');
    console.log('entity type-->>', this.entityType);

    this.allotmentrequestobj.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.getAllotmentByid(this.editId);
      } else {
        this.getAllotmentByid();
      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }

  getAllotmentByid(id?) {
    if (id) {
      this.distileryService.getAllotmentById(id).subscribe(responceData => {
        console.log(responceData);
        this.allotmentrequestobj = responceData['data'];
        console.log(this.allotmentrequestobj , 'check log')
        this.allotmentdeatils = this.allotmentrequestobj.indentResponseDtoList;
        // this.approvalobj.unreserved = this.allotmentrequestobj.unreserved;
        // this.approvalobj.requestedReservedMolasses = this.allotmentrequestobj.requestedReservedMolasses;
        // this.approvalobj.reserved = this.allotmentrequestobj.reserved;
        // this.approvalobj.consuptiontype = this.allotmentrequestobj.consumptionType;
        // this.approvalobj.consuptiontypename = this.allotmentrequestobj.consumptionTypeDto.name
        // this.approvalobj.requestedDate = this.allotmentrequestobj.requestedDate;
        // this.approvalobj.seasonYear = this.allotmentrequestobj.seasonYear;
        this.approvalobj.allotmentNumber = this.allotmentrequestobj.allotmentNumber;
      if(responceData.data){
        this.allotmentrequestobj.unreserved = responceData.data.unreserved;
        this.allotmentrequestobj.reserved = responceData.data.reserved;
        this.allotmentrequestobj.consuptiontype = responceData.data.consumptionTypeDto.name;
        this.allotmentrequestobj.requestedDate = responceData.data.requestedDate;
        this.allotmentrequestobj.seasonYear = responceData.data.seasonYear;
        this.allotmentrequestobj.allotmentNumber = responceData.data.allotmentNumber;
      }else{
        this.allotmentrequestobj.unreserved = '';
        this.allotmentrequestobj.reserved = ''
        this.allotmentrequestobj.consuptiontype = ''
        this.allotmentrequestobj.requestedDate = ''
        this.allotmentrequestobj.seasonYear = ''
        this.allotmentrequestobj.allotmentNumber = ''    
      
      }

        if (this.approvalobj.allotmentNumber){
          this.wrokflowconfig.getapprovallogs(this.approvalobj.allotmentNumber)
          .subscribe((resp: any) => {
            
            if (resp.length > 0) {
              this.logactive = true;;
              this.logshow = resp
            }
          })
        }
      });
    } else {
      this.allotmentrequestobj = JSON.parse(sessionStorage.getItem('formdata'));
    }
  }

  getloggerdetails(id) {
    this.userManageService.getUserById(id).subscribe(responceData => {
      this.logactive = true;
      this.loginfo = responceData.data;
      console.log(this.loginfo);
    });
  }

  getworkflow(){
    this.wrokflowconfig.getworkflowbydesignation('DISTILLERY','Allotment Request').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }

  userapproval(status) {
    console.log('status ---->>>', status);
    // console.log('approvel obj -->>>>',data);
    

    const postData = {
      id:parseInt(this.editId),
      allotmentNumber:this.approvalobj.allotmentNumber,
      event:status,
      level:this.workflowobj.level,
      comments:this.approvalobj.remarks
    };
  

    this.distileryService.approvalAllotment(postData).subscribe(responceData => {
      if (responceData['status'] === 's') {
        this.alert.showSuccess(this.alertmeg, 'Success')
        sessionStorage.removeItem('formdata')
        this.router.navigate(['/supplychainmanagement/distillery/allotmentrequest/list']);
        console.log(responceData);
      } else {
        this.alert.showError(responceData['userDisplayMesg'], 'error')
      }
    });
  }

  navigateCategoryList() {
    this.router.navigate(['/supplychainmanagement/distillery/allotmentrequest/list']);
  }

}
