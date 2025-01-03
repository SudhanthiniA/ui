import { Component, OnInit } from '@angular/core';
import {DispatchService  } from '@app/services/ware-house/dispatch.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { SugarmillapiService, PreviewService, MasterapiService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableDirective } from 'angular-datatables';
import { DispatchConfig } from '@app/config/warehouse/dispatch.config';
import { ImportPermitStatus } from '@app/models/warehouse/import-permit-status';
import { Dispatch } from '@app/models/wholesale/wholesale-data';

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.scss']
})
export class DispatchComponent implements OnInit {

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = DispatchConfig.titleSection.list;
  public breadcrumbs = DispatchConfig.breadcrumbs;
  public columns = DispatchConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Dispatch>();

  dispatchObj: any = {
    issueDate: '',
    transportDate: '',
    transportNo: '',
    unitName: '',
    transportPassStatus:'COMPLETED'
  };

  constructor(
    private dispatchService: DispatchService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getAllDispatch();
    // this.searchDispatch();
  }

  getAllDispatch() {
    const paginationSize = this.pageSize;
    const requestParam = {
      filters: {
        issueDate: this.dispatchObj.issueDate? this.dispatchObj.issueDate : null,
        transportDate: this.dispatchObj.transportDate? this.dispatchObj.transportDate : null,
        transportNo: this.dispatchObj.transportNo? this.dispatchObj.transportNo : null,
        unitName: this.dispatchObj.unitName? this.dispatchObj.unitName : null,
      },
      pageNo:this.pageNo,
      paginationSize:this.pageSize,
     
    };
    this.dispatchService.searchDisptch(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.dataSource.data = resp.data.contents as Dispatch[];
          this.totalCount = resp.data.totalElements;
        }
      });
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/dispatch/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/dispatch/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    this.pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getAllDispatch();
  }
  
  resetKey() {
    this.dispatchObj = {
      issueDate: '',
      transportDate: '',
      transportNo: '',
      unitName: ''
    };
    this. getAllDispatch();
  }

}
