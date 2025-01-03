import { Component, OnInit } from '@angular/core';
import { importpasspermitService } from '@app/services/ware-house/warehouse-importpasspermit.service';
// need to modify  importpasspermitService service file
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { SugarmillapiService, PreviewService, MasterapiService, WarehouseNewbrandService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableDirective } from 'angular-datatables';
import { TranPassParenrLoginConfig } from '@app/config/warehouse/trans-pass-parent-login.config';
import { ImportPermitStatus } from '@app/models/warehouse/import-permit-status';
// need to model class ImportPermitStatus to dispatch

@Component({
  selector: 'app-transpassparentlogin',
  templateUrl: './transpassparentlogin.component.html',
  styleUrls: ['./transpassparentlogin.component.scss']
})
export class TranspassparentloginComponent implements OnInit {

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = TranPassParenrLoginConfig.titleSection.list;
  public breadcrumbs = TranPassParenrLoginConfig.breadcrumbs;
  public columns = TranPassParenrLoginConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<ImportPermitStatus>();

  dipatchData:any={
    permitNumber:''
  };

  // onceapi redy integrated those values. and remove below code
  data:any = [
    {
      id:1,
      issueDate: "23:04:2020",
      transportDate: "27-May-2021",
      transportPassNo: "ABC12345",
      noofPermits: 100,
      totalNoofCases: 1235,
      totalNoofBottles: 36978,
      status: "completed"
    }
  ]

  constructor(
    // need to change importpasspermit service
    private importpasspermit: importpasspermitService,
    private router: Router,
    private preview: PreviewService,
    private datepipe: DatePipe,
    private warehouseservice:WarehouseNewbrandService,
    private apiService: SugarmillapiService,
    private MasterapiService: MasterapiService

  ) { }

  ngOnInit() {
    this.searchTransportPass();
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/transpassparentlogin/edit/' + event.id]);
  }

  onView(event) {
    // console.log('event::', event);
    // let status = this.dataSource.data.find(item => item.id == event.id).status;
    this.router.navigate(['/supplychainmanagement/warehouse/transpassparentlogin/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    //this.searchDispatch(pageNo, pageSize);
  }

  searchTransportPass(pageNo = 0, pageSize = 5){
    // const paginationSize = pageSize;
    // const searchObj = {
    //   filters: {
    //     permitNumber: this.dipatchData.permitNumber ? this.dipatchData.permitNumber : null,
       
    //   },
    //   pageNo,
    //   paginationSize,
    // };

    // this.importpasspermit.importPermitSearch(searchObj).subscribe((responceData: any) => {
    //   console.log(responceData);
    //   this.dataSource.data = responceData.data.contents as ImportPermitStatus[];
    //   this.totalCount = responceData.data.totalElements;
    //   });

    this.dataSource.data = this.data;
    // this.totalCount = responceData.data.totalElements;
  }

  resetKey() {
    this.dipatchData={
      permitNumber:''
    }
  }

}
