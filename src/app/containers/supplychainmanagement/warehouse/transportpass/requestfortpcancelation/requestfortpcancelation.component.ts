import { Component, OnInit, ViewChild,ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { SugarmillapiService, PreviewService, MasterapiService, WarehouseNewbrandService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableDirective } from 'angular-datatables';
import { TransportPassCancelationConfig } from '@app/config/warehouse/transport-reqcancelation.config';
import { ImportPermitStatus, Pending,Approved ,RevetBack} from '@app/models/warehouse/import-permit-status';
import { WarehouseTrnsportPassCancellService } from '@app/services/ware-house/warehouseTpRequestCancell.service';

@Component({
  selector: 'app-requestfortpcancelation',
  templateUrl: './requestfortpcancelation.component.html',
  styleUrls: ['./requestfortpcancelation.component.scss']
})
export class RequestfortpcancelationComponent implements OnInit, AfterViewInit {
  
  selStatus = '';
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = TransportPassCancelationConfig.titleSection.list;
  public breadcrumbs = TransportPassCancelationConfig.breadcrumbs;
  public lastText = 'master.common.list';

  pendApprovalListValues: any;
  transportCalcelList = {
    applicationNumber: '',
    applicationDate: '',
    requestType: '',
    premisesTypeValue: '',
    status:''
  };
  ApprovalListValues: any;
  sendBackListValues: any;
  status: any;

 
  constructor(
    private cdr: ChangeDetectorRef,
    private wrHouseTraPortPassCancel: WarehouseTrnsportPassCancellService,  
    private router: Router,
    private AC:ActivatedRoute,
    private preview: PreviewService,
    private datepipe: DatePipe,
    private warehouseservice:WarehouseNewbrandService,
    private apiService: SugarmillapiService,
    private MasterapiService: MasterapiService

  ) { }

  ngOnInit() {
    this.TransPassCancelsearchByPending();
    this.AC.params.subscribe(param => {
      if (param.status) {
        this.selStatus = param.status;
       
      } 
    })
  }

  ngAfterViewInit(){
    if (this.selStatus) {
      this.changestatus(this.selStatus);
      this.cdr.detectChanges();
    }
  }

  changestatus(status) {
    const tabelement = document.getElementById(status) as HTMLAnchorElement;
    tabelement.click();
  }

  tabClick(event) {
    let value = event.nextId
    if (value == 'APPROVED') {
      this.TransPassCancelsearchByApprov();
    } else {
      if (value == 'SENDBACK') {
        this.TransPassCancelsearchBySendback();
      }
    } 
    if (value == 'IN_PROGRESS') {
      this.TransPassCancelsearchByPending();
    } 
  }

  searchTransCancel(){
    this.TransPassCancelsearchByPending();
    this.TransPassCancelsearchByApprov();
    this.TransPassCancelsearchBySendback();
   
  }

  cancel(){
    this.transportCalcelList = {
      applicationNumber: '',
      applicationDate: '',
      requestType: '',
      premisesTypeValue: '',
      status:''
    };
    this.searchTransCancel();
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/transportpass/requestfortpcancelation/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/transportpass/requestfortpcancelation/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.TransPassCancelsearchByPending(pageNo, pageSize);
  }

@ViewChild('tabSet', {static: false}) tabSet;

changePassType(status){
  this.tabSet.select(status);
}
changePrimesType(status){
  this.tabSet.select(status);
}
changeRequestType(status){
  this.tabSet.select(status);
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

  public actionKeysInprogrss = ['edit', 'view'];
  public actionKeysAproved = [ 'view'];
  public actionKeysSendback= ['edit', 'view'];


  public pageSizeInprogress = 5;
  public totalPending: number;
  public isSearchResIN_PROGRESS = false;

  public pageSizeApproved = 5;
  public totalCountApproved: number;
  public isSearchResApproved = false;

  public pageSizeSendback = 5;
  public totalCountSendback: number;
  public isSearchResSendback = false;

  public columnsPending = TransportPassCancelationConfig.columns;
  public dataSourcePending = new MatTableDataSource<Pending>();

  public dataSourceApprove = new MatTableDataSource<Approved>();
  public columnsAprove = TransportPassCancelationConfig.Approved;

  public dataSourceRevertBack = new MatTableDataSource<RevetBack>();
  public columnsRevertBack = TransportPassCancelationConfig.RevertBack;


  handlePaginationApproved(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.TransPassCancelsearchByApprov(pageNo, pageSize);
  }

  handlePaginationRevertBack(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.TransPassCancelsearchBySendback(pageNo, pageSize);
  }

  TransPassCancelsearchByPending(pageNo = 0, pageSizeInprogress = 5) {
    const paginationSize = pageSizeInprogress;
   let params ={
     "filters":{
       "applicationNumber":this.transportCalcelList.applicationNumber ? this.transportCalcelList.applicationNumber:'',
       "applicationDate": this.transportCalcelList.applicationDate ? this.transportCalcelList.applicationDate:'',
       "requestType":this.transportCalcelList.requestType ? this.transportCalcelList.requestType:'',
       "premisesTypeValue":this.transportCalcelList.premisesTypeValue ? this.transportCalcelList.premisesTypeValue:'',
      "status" : "IN_PROGRESS"
     },
     pageNo,
     paginationSize,
   }
    this.wrHouseTraPortPassCancel.getAllTransportCancell(params).subscribe((responce:any) =>{
   this.pendApprovalListValues = responce.data.contents;
   this.dataSourcePending.data = responce.data.contents as Pending[];
   this.totalPending = responce.data.totalElements;
    })
  }

  TransPassCancelsearchByApprov(pageNo = 0, pageSizeApproved = 5) {
    const paginationSize = pageSizeApproved;
   let params ={
     "filters":{
       "applicationNumber":this.transportCalcelList.applicationNumber ? this.transportCalcelList.applicationNumber:'',
       "applicationDate": this.transportCalcelList.applicationDate ? this.transportCalcelList.applicationDate:'',
       "requestType":this.transportCalcelList.requestType ? this.transportCalcelList.requestType:'',
       "premisesTypeValue":this.transportCalcelList.premisesTypeValue ? this.transportCalcelList.premisesTypeValue:'',
       "status" : "APPROVED"
     },
     pageNo,
     paginationSize,
   }
    this.wrHouseTraPortPassCancel.getAllTransportCancell(params).subscribe((responce:any) =>{
    this.ApprovalListValues = responce.data.contents;
    this.dataSourceApprove.data = responce.data.contents as Approved[];
    this.totalCountApproved = responce.data.totalElements;
    
    })
  }

  TransPassCancelsearchBySendback(pageNo = 0, pageSizeSendback = 5) {
    const paginationSize = pageSizeSendback;
   let params ={
     filters:{
       applicationNumber:this.transportCalcelList.applicationNumber ? this.transportCalcelList.applicationNumber:'',
       applicationDate: this.transportCalcelList.applicationDate ? this.transportCalcelList.applicationDate:'',
       requestType:this.transportCalcelList.requestType ? this.transportCalcelList.requestType:'',
       premisesTypeValue:this.transportCalcelList.premisesTypeValue ? this.transportCalcelList.premisesTypeValue:'',
       status : "SENDBACK"
     },
     pageNo,
     paginationSize,
   }
    this.wrHouseTraPortPassCancel.getAllTransportCancell(params).subscribe((responce:any) =>{
    this.sendBackListValues = responce.data.contents;
    this.dataSourceRevertBack.data = responce.data.contents as RevetBack[];
    this.totalCountSendback = responce.data.totalElements;
    
    })
  }

}
