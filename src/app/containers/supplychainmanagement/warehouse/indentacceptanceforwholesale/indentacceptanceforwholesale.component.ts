import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { IndentscceptaceService } from '@app/services/ware-house/indentscceptace.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services'
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { IndentAcceptanceforWholesaleConfig } from '@app/config/warehouse/indentacceptanceforwholesale.config';
import { AllIndentRequests } from '@app/models/warehouse/allIndents';

import { IndentaccWhNewIndentConfig } from '@app/config/warehouse/indent-acc-wh-newInd.confing';
import { NewIndent, AcceptedIndents } from '@app/models/warehouse/indent-newIndent';

import { IndentAcceptedConfig } from '@app/config/warehouse/indent-acc-wh-accept-config';
import { IndentAccDeliveredConfig } from '@app/config/warehouse/indent-acc-wh-delivered.config';
import { IndentAccDelivered } from '@app/models/warehouse/Iindent-Acc-Delivered';

import { IndentAccPartDeliveredConfig } from '@app/config/warehouse/indent-acc-wh-partdeliverd.config';
import { IndentAccPartDelivered } from '@app/models/warehouse/indent-Acc-PartDelivered';
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-indentacceptanceforwholesale',
  templateUrl: './indentacceptanceforwholesale.component.html',
  styleUrls: ['./indentacceptanceforwholesale.component.scss']
})
export class IndentacceptanceforwholesaleComponent implements OnInit, AfterViewInit {
  acceptindents: any;
  newindents: any;
  indentForm: FormGroup;
  allindent: any;
  deliveredindent: any;
  partdelivered: any;
  inddate: any;
  indnum: any;
  unitname: any;
  selStatus = '';
  public actionKeys = ['view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = IndentAcceptanceforWholesaleConfig.titleSection.list;
  public breadcrumbs = IndentAcceptanceforWholesaleConfig.breadcrumbs;
  public columnsAllInd = IndentAcceptanceforWholesaleConfig.columns;
  public lastText = 'master.common.list';
  public dataSourceAllInd = new MatTableDataSource<AllIndentRequests>();

  // new indent
  public columnsNewInd = IndentaccWhNewIndentConfig.columns;
  public dataSourceNewInd = new MatTableDataSource<NewIndent>();

  //  Accepted Indent
  public columnsAcceptedInd = IndentAcceptedConfig.columns;
  public dataSourceAcceptedInd = new MatTableDataSource<AcceptedIndents>();

  //    Delivered Indent
  public columnsDeliveredInd = IndentAccDeliveredConfig.columns;
  public dataSourceDeliveredInd = new MatTableDataSource<IndentAccDelivered>();

  //    Rejected Indent
  public dataSourceIndentReject = new MatTableDataSource();


  //   PartDelivered Indent
  public columnsPartDeliveredInd = IndentAccPartDeliveredConfig.columns;
  public dataSourcePartDeliveredInd = new MatTableDataSource<IndentAccDelivered>();


  dateselected: any = moment().format('LLLL');
  bwfl5Form: any;
  public totalCount1: number;
  status: any;
  // public isSearchRes = false;
  constructor(
    private cdr: ChangeDetectorRef,
    private indentacceptance: IndentscceptaceService,
    private router: Router,
    private alert: AlertService,
    private fb: FormBuilder,
    private AC: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.getAllIndent();
    this.AC.params.subscribe(param => {
      if (param.status) {
        this.selStatus = param.status;
        this.getAllIndent('ALLINDENT');
      } else {
        this.getAllIndent('ALLINDENT');
      }
    })
  }
  ngAfterViewInit() {
    if (this.selStatus) {
      this.changestatus(this.selStatus);
      this.cdr.detectChanges();
    }
  }
  indentForms: any = {
    'indentDate': '',
    'indentNo': '',
    'unitName': '',
    'indentRequestStatus': ''
  }

  //------------------------------ newly added--------------------
  public pageSizeAllInd = 5;
  public totalCountAllInd: number;
  public isSearchResAllInd = false;

  public pageSizeNewInd = 5;
  public totalCountNewInd: number;
  public isSearchResNewInd = false;

  public pageSizeAcceptedInd = 5;
  public totalCountAcceptedInd: number;
  public isSearchResAcceptedInd = false;

  public pageSizeDeliveredInd = 5;
  public totalCountDeliveredInd: number;
  public isSearchResDeliveredInd = false;

  public pageSizePartDeliveredInd = 5;
  public totalCountPartDeliveredInd: number;
  public isSearchResPartDeliveredInd = false;

  public totalCountIndentReject: number

  allAcceptedindent: any;
  allNewindent: any;
  allDeliveredindent: any;
  allPartDeliveredindent: any;
  allRejectedIndentList: any;

  // --------------- ending ---------------------------------

  allSearch() {
    this.getAllIndent('ALLINDENT');
    this.getNewIndent(null);
    this.getAcceptedInd(null);
    this.getDeliveredInd(null);
    this.getIndentRejected(null);
    this.getPartDeliveredInd(null);
  }

  tabClick(event) {
    let value = event.nextId
    if (value == 'PENDING') {
      this.getNewIndent(null);
    } else {
      if (value == 'ACCEPTED') {
        this.getAcceptedInd(null);
      }
    }
    if (value == 'DELIVERED') {
      this.getDeliveredInd(null);
    } else {
      if (value == 'PARTDELIVERED') {
        this.getPartDeliveredInd(null);
      }
    }

  }

  getAllIndent(ev, pageNo = 0, pageSizeAllInd = 5) {
    const paginationSize = pageSizeAllInd;
    let params = {
      filters: {
        indentNo: this.indentForms.indentNo ? this.indentForms.indentNo : null,
        indentDate: this.indentForms.indentDate ? this.indentForms.indentDate : null,
        unitName: this.indentForms.unitName ? this.indentForms.unitName : null,
        indentRequestStatus: this.selStatus ? this.selStatus : '',
      },
      pageNo,
      paginationSize,
    }
    this.indentacceptance.indentRequstsearch(params).subscribe((resp: any) => {
      if (resp.status == 's') {
        this.allindent = resp.data.contents
        this.dataSourceAllInd.data = resp.data.contents as AllIndentRequests[];
        this.totalCountAllInd = resp.data.totalElements;
        if (ev) {
          let ele = document.getElementById(ev);
          if(ele){
            ele.click();
          }
        }
      }
    })
  }
  // {"filters":{"indentRequestStatus":"PENDING"},"pageNo":0,"paginationSize":5}
  // --------------------NewIndent -------------------
  getNewIndent(ev, pageNo = 0, pageSizeNewInd = 5) {
    const paginationSize = pageSizeNewInd;
    let params = {
      filters: {
        indentNo: this.indentForms.indentNo ? this.indentForms.indentNo : null,
        indentDate: this.indentForms.indentDate ? this.indentForms.indentDate : null,
        unitName: this.indentForms.unitName ? this.indentForms.unitName : null,
        indentRequestStatus: 'PENDING'
      },
      pageNo,
      paginationSize,
    }
    this.indentacceptance.indentRequstsearch(params).subscribe((resp: any) => {
      this.allNewindent = resp.data.contents
      this.dataSourceNewInd.data = resp.data.contents as NewIndent[];
      this.totalCountNewInd = resp.data.totalElements;
      if (ev) {
        let ele = document.getElementById(ev);
        ele.click();
      }
    })
  }

  // ---- --------------- Accepted Indent----------------

  getAcceptedInd(ev, pageNo = 0, pageSizeAcceptedInd = 5) {
    const paginationSize = pageSizeAcceptedInd;
    let params = {
      filters: {
        indentNo: this.indentForms.indentNo ? this.indentForms.indentNo : null,
        indentDate: this.indentForms.indentDate ? this.indentForms.indentDate : null,
        unitName: this.indentForms.unitName ? this.indentForms.unitName : null,
        indentRequestStatus: "ACCEPTED"
      },
      pageNo,
      paginationSize,
    };
    this.indentacceptance.indentRequstsearch(params).subscribe((resp: any) => {
      this.allAcceptedindent = resp.data.contents
      this.dataSourceAcceptedInd.data = resp.data.contents as AcceptedIndents[];
      this.totalCountAcceptedInd = resp.data.totalElements;
      if (ev) {
        let ele = document.getElementById(ev);
        ele.click();
      }
    });
  }

  // ----------------- Closing ----------------------- 

  // ---- --------------- Delivered Indent-------------

  getDeliveredInd(ev,pageNo = 0, pageSizeDeliveredInd = 5) {
    const paginationSize = pageSizeDeliveredInd;
    let params = {
      filters: {
        indentNo: this.indentForms.indentNo ? this.indentForms.indentNo : null,
        indentDate: this.indentForms.indentDate ? this.indentForms.indentDate : null,
        unitName: this.indentForms.unitName ? this.indentForms.unitName : null,
        indentRequestStatus: 'DELIVERED'
      },
      pageNo,
      paginationSize,
    }
    this.indentacceptance.indentRequstsearch(params).subscribe((resp: any) => {
      this.allDeliveredindent = resp.data.contents
      this.dataSourceDeliveredInd.data = resp.data.contents as IndentAccDelivered[];
      this.totalCountDeliveredInd = resp.data.totalElements;
    })
  }
  // ----------------- Closing ----------------------- 

  getIndentRejected(ev,pageNo = 0, pageSizeRejected = 5) {
    const paginationSize = pageSizeRejected;
    let params = {
      filters: {
        indentNo: this.indentForms.indentNo ? this.indentForms.indentNo : null,
        indentDate: this.indentForms.indentDate ? this.indentForms.indentDate : null,
        unitName: this.indentForms.unitName ? this.indentForms.unitName : null,
        indentRequestStatus: 'REJECTED'
      },
      pageNo,
      paginationSize,
    }
    this.indentacceptance.indentRequstsearch(params).subscribe((resp: any) => {
      this.allindent = resp.data.contents
      this.dataSourceAllInd.data = resp.data.contents as AllIndentRequests[];
      this.totalCountIndentReject = resp.data.totalElements;
      if(ev){
        let element = document.getElementById(ev)
        if(element){
          element.click();
        }
      }
    })
  }


  getPartDeliveredInd(ev,pageNo = 0, pageSizePartDeliveredInd = 5) {
    const paginationSize = pageSizePartDeliveredInd;
    let params = {
      filters: {
        indentNo: this.indentForms.indentNo ? this.indentForms.indentNo : null,
        indentDate: this.indentForms.indentDate ? this.indentForms.indentDate : null,
        unitName: this.indentForms.unitName ? this.indentForms.unitName : null,
        indentRequestStatus: 'PARTDELIVERED'
      },
      pageNo,
      paginationSize,
    }
    this.indentacceptance.indentRequstsearch(params).subscribe((resp: any) => {
      this.allPartDeliveredindent = resp.data.contents
      this.dataSourcePartDeliveredInd.data = resp.data.contents as IndentAccDelivered[];
      this.totalCountPartDeliveredInd = resp.data.totalElements;
    })
  }

  handlePaginationAllInd(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getAllIndent('ALLINDENT',pageNo, pageSize);
  }

  handlePaginationNewInd(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getNewIndent('PENDING',pageNo, pageSize);
  }

  handlePaginationAccepted(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getAcceptedInd('ACCEPTED',pageNo, pageSize);
  }

  handlePaginationDelivered(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getDeliveredInd('DELIVERED',pageNo, pageSize);
  }

  handlePaginationPartDelivered(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getPartDeliveredInd('PARTDELIVERED',pageNo, pageSize);
  }

  resetKey() {
    this.indentForms = {
      'indentDate': '',
      'indentNo': '',
      'unitName': '',
      'indentRequestStatus': '',
    }
    this.allSearch();
  }

  // ------impleenting navigation---------
  public actionBtnBasedOnCondAll = {
    // edit: {
    //   column: 'orderPickUpStatus',
    //   condition: 'INPROGRESS',
    // },
    view: {
      column: 'indentRequestStatus',
      condition: '',
    },
  };
  public actionBtnBasedOnNewIndent = {

    view: {
      column: 'indentRequestStatus',
      condition: 'PENDING',
    },
  };
  public actionBtnBasedOnAcceptedIndent = {
    view: {
      column: 'indentRequestStatus',
      condition: 'ACCEPTED',
    },
  };
  public actionBtnBasedOnDeliveredInd = {
    view: {
      column: 'indentRequestStatus',
      condition: 'DELIVERED',
    },
  };
  public actionBtnBasedOnPartDeliveredInd = {
    view: {
      column: 'indentRequestStatus',
      condition: 'PARTDELIVERED',
    },
  };

  // -------ending----------------------
  view(status, id) {
    if (status == 'PENDING') {
      this.router.navigate(['supplychainmanagement/warehouse/indentacceptanceforwholesale/newindents', id])
    } else if (status == 'ACCEPTED') {
      this.router.navigate(['supplychainmanagement/warehouse/indentacceptanceforwholesale/acceptedindent', id])
    }
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/indentacceptanceforwholesale/edit/' + event.id]);
  }

  onView(event) {
    console.log('event::', event);
    let status = this.allindent.find(item => item.id == event.id).indentRequestStatus;
    if (status == 'PENDING') {
      this.router.navigate(['supplychainmanagement/warehouse/indentacceptanceforwholesale/newindents', event.id])
    } else if(status == 'SENDBACK'){
      this.router.navigate(['supplychainmanagement/warehouse/indentacceptanceforwholesale/newindents', event.id])
    }
    else if (status == 'ACCEPTED') {
      this.router.navigate(['supplychainmanagement/warehouse/indentacceptanceforwholesale/acceptedindent', event.id])
    }
  }

  onViewnew(event) {
    this.router.navigate(['supplychainmanagement/warehouse/indentacceptanceforwholesale/newindents', event.id])
  }

  onViewaccept(event) {
    this.router.navigate(['supplychainmanagement/warehouse/indentacceptanceforwholesale/acceptedindent', event.id])

  }


  changestatus(status) {
    const tabelement = document.getElementById(status) as HTMLAnchorElement;
    if(tabelement){
      tabelement.click();
    }
  }

  // ngAfterViewInit() {
  //   if (this.selStatus) {
  //     this.changestatus(this.selStatus);
  //     this.cdr.detectChanges();
  //   }
  // }


  // this.dataSource.data = this.allindent.filter(x => x.indentRequestDetails.indentRequestStatus == 'INPROGRESS')
  // this.dataSourceOne.data = this.allindent.filter(x => x.indentRequestDetails.indentRequestStatus == 'ACCEPTED')
  // this.dataSourceTwo.data = this.allindent.filter(x => x.indentRequestDetails.indentRequestStatus == 'DELIVERED')
  // this.partdelivered = this.allindent.filter(x => x.indentRequestDetails.indentRequestStatus == 'PARTDELIVERED')
  // console.log(this.newindents, this.allindent,this.deliveredindent,"===== All filtered Data =====")

}
