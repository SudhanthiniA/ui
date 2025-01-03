import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StockReportsConfig } from '@app/config/retail/stockreport-config';
import { StockReport } from '@app/models/retails';
import { ReportService } from '@app/services/retails/reports.service';
@Component({
  selector: "app-stockreport",
  templateUrl: "./stockreport.component.html",
  styleUrls: ["./stockreport.component.scss"],
})
export class StockreportComponent implements OnInit {
  stockData: any;
  stockObj: any = {};
  pageNo = 0;
  public pageSize = 10;
  public totalCount: number;
  public isSearchRes = false;
  public columns = StockReportsConfig.columns;
  public dataSource = new MatTableDataSource<StockReport>();

  constructor(private service: ReportService) {}

  ngOnInit() {
    this.getStock();
  }

  handlePagination(event) {
    console.log("Parent-handlePagination", event);
    this.getStock();
  }

  getStock() {
    this.service.getStockReport().subscribe((responceData: any) => {
      this.stockData = responceData;
      console.log(responceData);
      this.dataSource.data = responceData as StockReport[];
    });
  }
}
