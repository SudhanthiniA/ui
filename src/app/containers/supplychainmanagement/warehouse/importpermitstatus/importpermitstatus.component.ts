import { Component, OnInit, ViewChild } from '@angular/core';
import { importpasspermitService } from '@app/services/ware-house/warehouse-importpasspermit.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { SugarmillapiService, PreviewService, MasterapiService, WarehouseNewbrandService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableDirective } from 'angular-datatables';
import { ImportPermiStatusConfig } from '@app/config/warehouse/importPermitStatus-config';
import { ImportPermitStatus } from '@app/models/warehouse/import-permit-status';
@Component({
  selector: 'app-importpermitstatus',
  templateUrl: './importpermitstatus.component.html',
  styleUrls: ['./importpermitstatus.component.scss']
})


export class ImportpermitstatusComponent implements OnInit {
  transportData: any;
  pageNo = 0;
  public actionKeys = ['view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = ImportPermiStatusConfig.titleSection.list;
  public breadcrumbs = ImportPermiStatusConfig.breadcrumbs;
  public columns = ImportPermiStatusConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<ImportPermitStatus>();
  importPermtObj:any={
    permitNumber:''
  };
  dateselected: any = moment().format('LLLL');
  allbrands: any;

  constructor(  
    private importpasspermit: importpasspermitService,
    private router: Router,
    private preview: PreviewService,
    private datepipe: DatePipe,
    private warehouseservice:WarehouseNewbrandService,
    private apiService: SugarmillapiService,
    private MasterapiService: MasterapiService,
    ) { }

  ngOnInit() {
    this.getallimport()
    this.searchImportPer();
  }

  getallimport() {
    this.importpasspermit.getimportstatus().subscribe((response:any)=>{
      if(response.status == 's'){ 
        this.transportData = response.data;
      }
    })
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/importpermitstatus/edit/' + event.id]);
  }

  onView(event) {
    // console.log('event::', event);
    // let status = this.dataSource.data.find(item => item.id == event.id).status;
    // + '/' + status
    this.router.navigate(['/supplychainmanagement/warehouse/importpermitstatus/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.searchImportPer(pageNo, pageSize);
  }

  searchImportPer(pageNo = 0, pageSize = 5){
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        permitNumber: this.importPermtObj.permitNumber ? this.importPermtObj.permitNumber : null,
        //liquorDescription: this.importPermtObj.liquorDescription ? this.importPermtObj.liquorDescription : null,
      },
      pageNo,
      paginationSize,
    };

    this.importpasspermit.importPermitSearch(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.dataSource.data = responceData.data.contents as ImportPermitStatus[];
      this.totalCount = responceData.data.totalElements;
      });
  }

  resetKey() {
    this. importPermtObj={
      permitNumber:''
    }
  }

}
