import { Component, OnInit } from '@angular/core';
import { StockInService } from '@app/services/retails';
import { MatTableDataSource } from '@angular/material/table';
import { StockInConfig } from '@app/config/retail/stockin-config';
import { StockIn } from '@app/models/retails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockin',
  templateUrl: './stockin.component.html',
  styleUrls: ['./stockin.component.scss']
})
export class StockinComponent implements OnInit {
  stockInData: any;
  stockinObj: any = {};
  pageNo = 0;
  public actionKeys = ['view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = StockInConfig.titleSection.list;
  public breadcrumbs = StockInConfig.breadcrumbs;
  public columns = StockInConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<StockIn>();

  constructor(private service: StockInService, private router: Router) { }

  ngOnInit() {
    this.getStockIn();
  }
  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/stockin/view']);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getStockIn();
  }
  getStockIn() {
    this.service.get().subscribe((resp) => {
      this.stockInData = resp;
      console.log(this.stockInData);
      this.dataSource.data = resp as StockIn[];
    });
  }

  searchStockin(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      filters: {
        indentNumber: this.stockinObj.indentNumber ? this.stockinObj.indentNumber : null,
      },
      pageNo,
      paginationSize
    };
    this.service.searchStockIn(searchobj).subscribe((responceData: any) => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as StockIn[];
      }
    });
  }
}
