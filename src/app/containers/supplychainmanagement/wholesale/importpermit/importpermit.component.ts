import { Component, OnInit } from '@angular/core';
import { CountrymasterService } from '@app/services';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {InportPermitconfig} from '@app/config/wholesale/import-permit-config'
import { WholesaleImportPermitService,WorkflowcofigService} from '@app/services';
import { ImportPermit } from '@app/models/wholesale/wholesale-import-permit';
import * as moment from 'moment';

@Component({
  selector: 'app-importpermit',
  templateUrl: './importpermit.component.html',
  styleUrls: ['./importpermit.component.scss']
})
export class ImportpermitComponent implements OnInit {
  indentData: any;
  importPermitObj: any = {
    indentDate: '',
    indentNo: '',
    statuss:''
  };
  pageNo = 0;
  public actionBtnBasedOnCond = {
    edit: {
      column: 'status',
      condition: 'DRAFT',
    },
    view: {
      column: 'status',
      condition: 'SUBMITTED',
    },
  };
  workflowobj: any;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false
  dateSelected:any;
  maxDate = moment();
  // public titleSection = CountryConfig.titleSection.list;
  // public breadcrumbs = Indentrequestconfig.breadcrumbs;
  public columns = InportPermitconfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<ImportPermit>();
  importPermitList: any;
  statusList: any;
  importdetailslist: any;
  constructor(
    private wholesaleImportPermitService: WholesaleImportPermitService,
    private router: Router,
    private WorkflowcofigService: WorkflowcofigService,

  ) { }

  ngOnInit() {
    this.getImportPermitDetau();
    sessionStorage.removeItem('indentReq')
    this.workflow()
    this.getSatusList()
  }
  getImportPermitDetau(pageNo = 0, pageSize = 5) {
   
    const paginationSize = pageSize;
    const requestParam = {
      filters: {
        indentDate: JSON.stringify(this.importPermitObj.indentDate) ? this.importPermitObj.indentDate : null,
        indentNo: JSON.stringify(this.importPermitObj.indentNo) ? this.importPermitObj.indentNo : null,
        status: JSON.stringify(this.importPermitObj.statuss) ? this.importPermitObj.statuss : null,

      },
      pageNo,
      paginationSize
    };
    this.wholesaleImportPermitService.searchImportpermit(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.importPermitList=resp.data.contents
        this.dataSource.data = resp.data.contents as ImportPermit[];;
        // this.dataSource.data = resp.data.contents.indentRequest as Indentrequest[];;
        this.totalCount = resp.data.totalElements;
        }
      });
    
  }
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
  }
  searchdaterange() {
    let fromdate, todate = '';
    if (this.dateSelected) {
      fromdate = moment(this.dateSelected.startDate).format("YYYY-MM-DD");
      todate = moment(this.dateSelected.endDate).format("YYYY-MM-DD");
    }
    this.wholesaleImportPermitService.daterange(fromdate, todate)
    .subscribe((resp: any) => {
      if (resp.errorCode === 200) {
        console.log(this.importdetailslist)
        this.importdetailslist = resp.data
      }
    });
  }

  searchImportPermit() {
    this.getImportPermitDetau();
    }
    resetKey() {
      this.importPermitObj = {
        indentDate: '',
        indentNo: '',
        statuss:''
      };
      this.getImportPermitDetau();
    }
    onEdit(event) {
     
      this.router.navigate(['/supplychainmanagement/wholesale/importpermit/edit/' + event.id]);
    }
    getSatusList(){
      this.wholesaleImportPermitService.getStatusMasters().subscribe((responceData:any)=>{
        this.statusList=responceData.data.downDropDownMasterValueList
      })
  }
    workflow() {
      let iscustomer = localStorage.getItem('IS_CUSTOMER');
      console.log('is customer', iscustomer);
  
      if (iscustomer == 'false') {
        this.WorkflowcofigService.getworkflowbydesignation('WHOLESALE', 'WHOLESALE_IMPORT_PERMIT').subscribe((resp: any) => {
          this.workflowobj = resp.content
        })
  
      }
    }
  
    onView(event) {
      let iscustomer=localStorage.getItem('IS_CUSTOMER');
      console.log('is customer',iscustomer )
      const findobj = this.importPermitList.find(x => x.id == event.id)
      if (iscustomer == 'true') {
        if (iscustomer == 'true' && findobj.status == 'SENDBACK') {
          this.router.navigate(['/supplychainmanagement/wholesale/importpermit/edit/' + event.id]);
        }else{
          this.router.navigate(['/supplychainmanagement/wholesale/importpermit/view/' + event.id]);
        }
      }else{
        this.router.navigate(['/supplychainmanagement/wholesale/importpermit/edit/' + event.id]);
      }

    }
}
