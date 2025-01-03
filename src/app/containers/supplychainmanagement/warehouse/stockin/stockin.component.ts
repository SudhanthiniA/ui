import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { WarehouseStockInService } from '@app/services/ware-house/warehouse-stockin.service'
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { SugarmillapiService, PreviewService, MasterapiService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableDirective } from 'angular-datatables';
import { StockInConfig } from '@app/config/warehouse/stock-in.config';
import { StockIn } from '@app/models/warehouse/stockIn';

@Component({
  selector: 'app-stockin',
  templateUrl: './stockin.component.html',
  styleUrls: ['./stockin.component.scss']
})
export class StockinComponent implements OnInit {
  stockForm:FormGroup;
  receviedData:any;
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = StockInConfig.titleSection.list;
  public breadcrumbs = StockInConfig.breadcrumbs;
  public columns = StockInConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<StockIn>();
  stockInObj:any={
    transportationPassNo:'',
    stockInDate:''
  };

  constructor(
     public WStockInService:WarehouseStockInService,
     private router: Router,
     private preview: PreviewService,
     private datepipe: DatePipe,
     private apiService: SugarmillapiService,
     private MasterapiService: MasterapiService, private fb: FormBuilder
     
  ) { }

  ngOnInit() {
    this.searchStockIn();
    this.stockForm = this.fb.group({
      'transportationPassNo': [''],
      'stockInDate': ['']
    });
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/stockin/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/stockin/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.searchStockIn(pageNo, pageSize);
  }

  searchStockIn(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        transportationPassNo: this.stockInObj.transportationPassNo ? this.stockInObj.transportationPassNo : null,
        stockInDate: this.stockInObj.stockInDate ? this.stockInObj.stockInDate : null,

      },
      pageNo,
      paginationSize,
    };

    this.WStockInService.getAllstockInLazySearch(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.receviedData = responceData.data.contents;
      this.dataSource.data = responceData.data.contents as StockIn[];;
      this.totalCount = responceData.data.totalElements;
      });
  }

  resetKey() {
    this.stockInObj={
      transportationPassNo:'',
      stockInDate:''
    }
  }

}
