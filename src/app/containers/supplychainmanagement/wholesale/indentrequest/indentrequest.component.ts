import { Component, OnInit, ViewChild } from '@angular/core';
import { CountrymasterService } from '@app/services';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Indentrequestconfig } from '@app/config/wholesale/indent-request-config'
import { WholesaleIndentRequestService } from '@app/services';
import { Indentrequest } from '@app/models/wholesale/wholesale-indnet-request';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';
import * as moment from 'moment';

@Component({
  selector: 'app-indentrequest',
  templateUrl: './indentrequest.component.html',
  styleUrls: ['./indentrequest.component.scss']
})
export class IndentrequestComponent implements OnInit {
  indentData: any;
  indentreqObj: any = {
    indent_no: '',
    unit_name: '',
    statuss: '',
  };
  @ViewChild('tabSet', { static: false }) tabSet;
  pageNo = 0;
  public actionBtnBasedOnCond = {
    edit: {
      column: 'status',
      conditionIn: ['DRAFT', 'SENDBACK'],
    },
  };



  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public pageSizeInpro = 5;
  public pageSizeRejcted = 5;
  public totalCount: number;
  public isSearchRes = false;



  // public titleSection = CountryConfig.titleSection.list;
  // public breadcrumbs = Indentrequestconfig.breadcrumbs;
  public columns = Indentrequestconfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Indentrequest>();
  workflowobj: any;
  indentlist: any;
  indtReqstatusList: any;
  cardStatus: any;
  maxDate = moment();
  dateSelected: any;
  statusList: any;
  indentdetailslist: any;
  constructor(
    private wholesaleIndentRequestService: WholesaleIndentRequestService, private WorkflowcofigService: WorkflowcofigService,
    private router: Router) { }


  ngOnInit() {
    this.workflow();
    this.getIndentRequestDetail();
    this.indentReqStatusList();
    this.getSatusList()
  }
  workflow() {
    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer);

    if (iscustomer == 'false') {
      this.WorkflowcofigService.getworkflowbydesignation('WHOLESALE', 'WHOLESALE_INDENT_REQUEST').subscribe((resp: any) => {
        this.workflowobj = resp.content
      })

    }
  }
  indentReqStatusList() {
    this.wholesaleIndentRequestService.getIndtReqStatusList().subscribe((res: any) => {
      this.indtReqstatusList = res.data
    })
  }

  getIndentRequestDetail(pageNo = 0, paginationSize = 5) {
    let requestParam = {}
    requestParam = {
      filters: {
        indentNo: JSON.stringify(this.indentreqObj.indent_no) ? this.indentreqObj.indent_no : null,
        unitName: JSON.stringify(this.indentreqObj.unit_name) ? this.indentreqObj.unit_name : null,
        status: JSON.stringify(this.indentreqObj.statuss) ? this.indentreqObj.statuss : null,
      },
      pageNo,
      paginationSize
    };
    this.wholesaleIndentRequestService.searchIndentRequest(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.indentlist = resp.data.contents
          this.dataSource.data = resp.data.contents as Indentrequest[];
          this.totalCount = resp.data.totalElements;
        }
      });

  }
  handlePagination(event) {
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    const pageSizeIn = event.pageSize
    console.log(this.cardStatus);
    if (this.cardStatus) {
      this.cardOnClick(this.cardStatus, pageNo, pageSizeIn);
    } else {
      this.getIndentRequestDetail(pageNo, pageSize);
    }
  }

  searchIndent() {
    this.getIndentRequestDetail();
    delete this.cardStatus
  }

  cardOnClick(status, pageNo = 0, paginationSize = 5) {
    status = (status == 'ALL') ? '' : status;
    this.cardStatus = status;
    const requestParam = {
      filters: {
        indentRequestStatus: status
      },
      pageNo,
      paginationSize
    }
    this.wholesaleIndentRequestService.searchIndentRequest(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.indentlist = resp.data.contents
          this.dataSource.data = resp.data.contents as Indentrequest[];
          this.totalCount = resp.data.totalElements;
        }
      });
  }

  resetKey() {
    this.indentreqObj = {
      indent_no: '',
      unit_name: '',
      statuss: ''
    };
    this.getIndentRequestDetail();
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/wholesale/indentrequestnew/edit/' + event.id]);
  }

  onView(event) {
    const findobj = this.indentlist.find(x => x.id == event.id)

    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer);
    if (iscustomer == 'true') {
      if (iscustomer == 'true' && findobj.status == 'SENDBACK') {
        this.router.navigate(['/supplychainmanagement/wholesale/indentrequestnew/edit/', event.id]);
      } else {
        this.router.navigate(['/supplychainmanagement/wholesale/indentrequestnew/view/', event.id]);
      }
    } else {
      this.router.navigate(['/supplychainmanagement/wholesale/indentrequestnew/edit/', event.id]);
    }
  }
  getSatusList() {
    this.wholesaleIndentRequestService.getStatusMasters().subscribe((responceData: any) => {
      this.statusList = responceData.data.downDropDownMasterValueList
    })
  }
  searchdaterange() {
    let fromdate, todate = '';
    if (this.dateSelected) {
      fromdate = moment(this.dateSelected.startDate).format("YYYY-MM-DD");
      todate = moment(this.dateSelected.endDate).format("YYYY-MM-DD");
    }
    this.wholesaleIndentRequestService.daterange(fromdate, todate)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          console.log(this.indentdetailslist)
          this.indentdetailslist = resp.data
        }
      });
  }
}
