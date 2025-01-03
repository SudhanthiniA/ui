import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '@app/services';
import { WholesaleTrasportpassCancelService } from '@app/services/wholesale';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';
import { DatePipe } from '@angular/common';
import { transPortPassCancel } from '@app/config/wholesale/transport-pass-cancel.config';
import { MatTableDataSource } from '@angular/material/table';
import { Approved, Inprogress,Sendback } from '@app/models/wholesale/transportPassCancel';
@Component({
  selector: 'app-transportpasscancel',
  templateUrl: './transportpasscancel.component.html',
  styleUrls: ['./transportpasscancel.component.css']
})
export class TransportpasscancelComponent implements OnInit {
 
  status:any;
  transportListObj = {
    applicationId:'',
    apllicationDate: '',
    requestType: '',
    premisesType: '',
    status : '',
  }
  public actionBtnBasedOnCondInprogress = {
    edit: {
      column: 'status',
      condition: 'IN_PROGRESS',
    },
    view: {
      column: 'status',
      condition: 'IN_PROGRESS',
    },
  };
  public actionBtnBasedOnCondApproved = {
    // edit: {
    //   column: 'status',
    //   condition: 'DRAFT',
    // },
    view: {
      column: 'status',
      condition: 'APPROVED',
    },
  };
  public actionBtnBasedOnCondSendback = {
    edit: {
      column: 'status',
      condition: 'DRAFT',
    },
    view: {
      column: 'status',
      condition: 'SENDBACK',
    },
  };
  workflowobj: any;
  public actionKeysInprogrss = ['edit', 'view'];
  public actionKeysAproved = [ 'view'];
  public actionKeysSendback= ['edit', 'view'];

  public pageSizeInprogress = 5;
  public totalCountInprogress: number;
  public isSearchResInprogress = false;

  public pageSizeApproved = 5;
  public totalCountApproved: number;
  public isSearchResApproved = false;

  public pageSizeSendback = 5;
  public totalCountSendback: number;
  public isSearchResSendback = false;

  public dataSourceApproved = new MatTableDataSource<Approved>();
  public dataSourceInprogress = new MatTableDataSource<Inprogress>();
  public dataSourceSendBack = new MatTableDataSource<Sendback>();

  public pendings = transPortPassCancel.pendings;
  public Approved = transPortPassCancel.Approved;
  public Sendback = transPortPassCancel.sendback;

  constructor(
    private router: Router,
    private apiservice:ApiService,
    private datePipe: DatePipe,
    private formbuilder: FormBuilder,private WorkflowcofigService:WorkflowcofigService,
    private WholesaleTrasportpassCancelService: WholesaleTrasportpassCancelService
  ) { }
  listvalue: any;
  selected: any;
  approvalListValues:any;
  pendApprovalListValues:any;
  revertBackListValues:any;
  // searForm:FormGroup
  @ViewChild('tabSet', {static: false}) tabSet;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  ngOnInit() {
    this.workflow();
   // this.searchGroupForm();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.TransPassCancelsearchByPendForApprov();
    
    this.TransPassCanRevertBackSearch();
    this.TransPassCanAproRecSearch();
    sessionStorage.removeItem('cancelpass');
  }
  isApprover=false
  workflow(){
    let iscustomer=localStorage.getItem('IS_CUSTOMER');
    if(iscustomer == 'false'){
      this.WorkflowcofigService.getworkflowbydesignation('WHOLESALE', 'WHOLESALE_TRANSPORT_CANCELLATION').subscribe((resp: any) => {
        this.workflowobj = resp.content
        if (this.workflowobj.isEditable == true) {
          this.isApprover = true;
          this.actionBtnBasedOnCondInprogress.edit.condition=''
        }
      })
    }
  }
  
  refreshTabIns() {
    if (this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    } else {
      this.dtTrigger.next();
    }
    return true;
  }
  
  changePassType(status){
    this.tabSet.select(status);
  }
  changePrimesType(status){
    this.tabSet.select(status);
  }
  changeRequestType(status){
    this.tabSet.select(status);
  }
  handlePagination1(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
     this.TransPassCancelsearchByPendForApprov(pageNo, pageSize);
  }
  handlePagination2(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
     this.TransPassCanAproRecSearch(pageNo, pageSize);
  }
  handlePagination3(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
     this.TransPassCanAproRecSearch(pageNo, pageSize);
  }
 TransPassCancelsearchByPendForApprov(pageNo = 0, pageSizeInprogress = 5) {
   const paginationSize = pageSizeInprogress;
  let params ={
    "filters":{
      "applicationNumber":this.transportListObj.applicationId ? this.transportListObj.applicationId:'',
      "applicationDate": this.transportListObj.apllicationDate ? this.transportListObj.apllicationDate:'',
      "requestType":this.transportListObj.requestType ? this.transportListObj.requestType:'',
      "premisesTypeValue":this.transportListObj.premisesType ? this.transportListObj.premisesType:'',
      "status" : "IN_PROGRESS"
    },
    pageNo,
    paginationSize,
  }
this.WholesaleTrasportpassCancelService.getAllTransporCanctPassByRevBack(params).subscribe((responce:any) =>{
  this.pendApprovalListValues = responce.data.contents;
  this.dataSourceInprogress.data = responce.data.contents as Inprogress[];;
  this.totalCountInprogress = responce.data.totalElements;
 
})
  }
  TransPassCanAproRecSearch(pageNo = 0, pageSizeApproved = 5){
      const paginationSize = pageSizeApproved
      let params ={
        "filters":{
          "applicationNumber":this.transportListObj.applicationId ? this.transportListObj.applicationId:'',
          "applicationDate": this.transportListObj.apllicationDate ? this.transportListObj.apllicationDate:'',
          "requestType":this.transportListObj.requestType ? this.transportListObj.requestType:'',
          "premisesTypeValue":this.transportListObj.premisesType ? this.transportListObj.premisesType:'',
          "status" : "APPROVED"
        },
        pageNo,
        paginationSize
      }
       this.WholesaleTrasportpassCancelService.getAllTransporCanctPassByRevBack(params).subscribe((responce:any) =>{
       this.approvalListValues  = responce.data.contents;
       this.dataSourceApproved.data = responce.data.contents as Approved[];
       this.totalCountApproved = responce.data.totalElements;
      
     
  })
 }
 TransPassCanRevertBackSearch(pageNo = 0, pageSizeSendback = 5){
      const paginationSize = pageSizeSendback
  let params ={
    "filters":{
      "applicationNumber":this.transportListObj.applicationId ? this.transportListObj.applicationId:'',
      "applicationDate": this.transportListObj.apllicationDate ? this.transportListObj.apllicationDate:'',
      "requestType":this.transportListObj.requestType ? this.transportListObj.requestType:'',
      "premisesTypeValue":this.transportListObj.premisesType ? this.transportListObj.premisesType:'',
      "status" : "SENDBACK"
    },
    pageNo,
    paginationSize
  }
  this.WholesaleTrasportpassCancelService.getAllTransporCanctPassByRevBack(params).subscribe((responce:any) =>{
  this.revertBackListValues = responce.data.contents;
  this.dataSourceSendBack.data = responce.data.contents as Sendback[];
  this.totalCountSendback = responce.data.totalElements;
 // console.log(this.searchListValues);
})

}

 TransPassCanAproRecSearch1(){
   
  this.TransPassCanRevertBackSearch()
  this.TransPassCancelsearchByPendForApprov() 
  this.TransPassCanAproRecSearch()
  
 

}


 cancel(){
  this.transportListObj = {
    applicationId:'',
    apllicationDate: '',
    requestType: '',
    premisesType: '',
    status : '',
  }
    this.TransPassCancelsearchByPendForApprov();   
    this.TransPassCanRevertBackSearch();
    this.TransPassCanAproRecSearch();
 }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  onEdit(event) {

    this.router.navigate(['/supplychainmanagement/wholesale/transportpasscancel/add/' + event.id]);
  }

  onViewapp(event) {
    const findobj = this.approvalListValues.find(x => x.id == event.id)

    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer);
    if (iscustomer == 'true') {
      if (iscustomer == 'true' && findobj.status == 'SENDBACK') {
        this.router.navigate(['/supplychainmanagement/wholesale/transportpasscancel/add/'+ event.id]);
      }else{
        this.router.navigate(['/supplychainmanagement/wholesale/transportpasscancel/view/'+ event.id]);
      }
    }else{
      this.router.navigate(['/supplychainmanagement/wholesale/transportpasscancel/add/', event.id]);
    }
    
  }
  view(event){
    let iscustomer=localStorage.getItem('IS_CUSTOMER');
  
    const findobj =  this.pendApprovalListValues.find(x => x.id == event.id)
    const findst = this.pendApprovalListValues.find(y => y.status == event.status)
    console.log("status"+findobj)
  //  console.log('is customer', iscustomer);
    if (iscustomer == 'true') {
      if (iscustomer == 'true' && findobj.status == 'SENDBACK') {
        this.router.navigate(['/supplychainmanagement/wholesale/transportpasscancel/add/'+ event.id]);
      }else{
        this.router.navigate(['/supplychainmanagement/wholesale/transportpasscancel/view/'+ event.id]);
      }
    }else{   
      this.router.navigate(['/supplychainmanagement/wholesale/transportpasscancel/add/'+ event.id]);
    }
    
    
  }
  editt(event){
    console.log(event)
    this.router.navigate(['/supplychainmanagement/wholesale/transportpasscancel/add/' + event.id]);
  }
  // fetchNews(val){
  //   this.status = val
  //  // console.log(this.status)
  // }
  viewRevert(event){
    this.router.navigate(['/supplychainmanagement/wholesale/transportpasscancel/view/'+event.id]);
  }
}
