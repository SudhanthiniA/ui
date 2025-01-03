import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SalesReportsConfig } from '@app/config/retail/salesreport-cofig';
import { SalesReport } from '@app/models/retails';
import { ReportService } from '@app/services/retails/reports.service'
@Component({
  selector: "app-salesreport",
  templateUrl: "./salesreport.component.html",
  styleUrls: ["./salesreport.component.scss"],
})
export class SalesreportComponent implements OnInit {
  salesData: any;
  salesObj: any = {};
  pageNo = 0;
  public totalCount: number;
  public isSearchRes = false;
  public columns = SalesReportsConfig.columns;
  public dataSource = new MatTableDataSource<SalesReport>();

  public pageSize = 10;

  constructor(private service: ReportService) {}

  ngOnInit() {
    this.getSales();
  }

  handlePagination(event) {
    console.log("Parent-handlePagination", event);
    this.getSales();
  }

  getSales() {
    this.service.getSalesReport().subscribe((responceData: any) => {
      this.salesData = responceData;
      console.log(responceData);
      this.dataSource.data = responceData as SalesReport[];
    });
  }
}
