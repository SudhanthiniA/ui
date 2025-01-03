import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService, WorkflowcofigService } from '@app/services';
import { importpasspermitService } from '@app/services/ware-house/warehouse-importpasspermit.service';
import { DataTableDirective } from 'angular-datatables';
import { ImportPermitRequestConfig } from '@app/config/warehouse/importPermitrequest-config';
import { ImportPermitRequest } from '@app/models/warehouse/importpermit-request';

@Component({
  selector: 'app-importpermitnew',
  templateUrl: './importpermitnew.component.html',
  styleUrls: ['./importpermitnew.component.scss']
})
export class ImportpermitnewComponent implements OnInit {

  brandData: any;
  transportData: any;
  page: number;
  limit: any;
  pageNo = 0;
  importPermitPedingList:any;
  importPermitacceptedList:any;
  importPermitRejectList:any;

  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public totalCountOne: number;
  public totalCountTwo: number;
  public totalCountThree: number;
  public isSearchRes = false;

  public titleSection = ImportPermitRequestConfig.titleSection.list;
  public breadcrumbs = ImportPermitRequestConfig.breadcrumbs;
  public columns = ImportPermitRequestConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<ImportPermitRequest>();
  dateselected: any = moment().format('LLLL');
  importPermitObj: any = {
    indentNo: '',
    indentDate: '',
    status: '',
    importPermitStatus:'',
  }
  impPermitAll: any;
  workflowobj: any;
  importPermitList: any;
  public actionBtnBasedOnCond = {
    edit: {
      column: 'status',
      condition: 'DRAFT',
    },
    view: {
      column: 'status',
      condition: 'APPROVED',
    },
  };
  constructor(
    private apiService: ApiService,
    private importpermit: importpasspermitService,
    private router: Router,
    private WorkflowcofigService: WorkflowcofigService

  ) { }
  @ViewChild(DataTableDirective, { static: false })
  ngOnInit() {
    this.workflow()
    this.searchImportPermit();
    this.acceptedImportPermit();
    this.pendingImportPermit();
    this.rejectImportPermit();
  }

  workflow() {
    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer);

    if (iscustomer == 'false') {
      this.WorkflowcofigService.getworkflowbydesignation('WAREHOUSE', 'WAREHOUSE_IMPORT_PERMIT_REQUEST').subscribe((resp: any) => {
        this.workflowobj = resp.content
      })

    }
  }


  // getlist(){
  //   this.importpermit.getAllImports().subscribe((response:any)=>{
  //     if(response.status == 's'){ 
  //       this.impPermitAll = (response.data).reverse();
  //     }
  //   })
  // }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/importpermitnew/edit/' + event.id]);
  }

  // onView(event) {
  //   this.router.navigate(['/supplychainmanagement/warehouse/importpermitnew/view/' + event.id]);
  // }

  onView(event) {
    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer)
    const findobj = this.importPermitList.find(x => x.id == event.id)
    if (iscustomer == 'true') {
      if (iscustomer == 'true' && findobj.status == 'SENDBACK') {
        this.router.navigate(['/supplychainmanagement/warehouse/importpermitnew/edit/' + event.id]);
      } else {
        this.router.navigate(['/supplychainmanagement/warehouse/importpermitnew/view/' + event.id]);
      }
    } else {
      this.router.navigate(['/supplychainmanagement/warehouse/importpermitnew/edit/' + event.id]);
    }

  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.searchImportPermit(pageNo, pageSize);
  }

  searchImportPermit(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        indentNo: this.importPermitObj.indentNo ? this.importPermitObj.indentNo : null,
        indentDate: this.importPermitObj.indentDate ? this.importPermitObj.indentDate : null,
        status: this.importPermitObj.status ? this.importPermitObj.status : null,
      },
      pageNo,
      paginationSize,
    };

    this.importpermit.importPermitSearch(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.importPermitList = responceData.data.contents
      this.dataSource.data = responceData.data.contents as ImportPermitRequest[];
      this.totalCount = responceData.data.totalElements;
    });
  }
 
  acceptedImportPermit(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        indentNo: this.importPermitObj.indentNo ? this.importPermitObj.indentNo : null,
        indentDate: this.importPermitObj.indentDate ? this.importPermitObj.indentDate : null,
        status: this.importPermitObj.status ? this.importPermitObj.status : null,
        importPermitStatus:"ACCEPTED"
      },
      pageNo,
      paginationSize,
    };

    this.importpermit.importPermitSearch(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.importPermitacceptedList = responceData.data.contents
      this.dataSource.data = responceData.data.contents as ImportPermitRequest[];
      this.totalCountOne = responceData.data.totalElements;
    });
  }

  pendingImportPermit(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        indentNo: this.importPermitObj.indentNo ? this.importPermitObj.indentNo : null,
        indentDate: this.importPermitObj.indentDate ? this.importPermitObj.indentDate : null,
        status: this.importPermitObj.status ? this.importPermitObj.status : null,
        importPermitStatus:"PENDING"
      },
      pageNo,
      paginationSize,
    };

    this.importpermit.importPermitSearch(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.importPermitPedingList = responceData.data.contents
      this.dataSource.data = responceData.data.contents as ImportPermitRequest[];
      this.totalCountTwo = responceData.data.totalElements;
    });
  }

  rejectImportPermit(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        indentNo: this.importPermitObj.indentNo ? this.importPermitObj.indentNo : null,
        indentDate: this.importPermitObj.indentDate ? this.importPermitObj.indentDate : null,
        status: this.importPermitObj.status ? this.importPermitObj.status : null,
        importPermitStatus:"REJECTED"
      },
      pageNo,
      paginationSize,
    };

    this.importpermit.importPermitSearch(searchObj).subscribe((responceData: any) => {
      this.importPermitRejectList = responceData.data.contents
      this.dataSource.data = responceData.data.contents as ImportPermitRequest[];
      this.totalCountThree = responceData.data.totalElements;
    });
  }


  resetKey() {
    this.importPermitObj = {
      indentNo: '',
      indentDate: '',
      status: '',

    };
    this.searchImportPermit();
  }

}
