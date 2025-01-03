import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LiquorCategoryReportsConfig } from '@app/config/retail/liquorcategoryreport-config';
import { LiquorCategoryReport } from '@app/models/retails';
import { ReportService } from '@app/services/retails/reports.service'
@Component({
  selector: "app-liquorcategoryreport",
  templateUrl: "./liquorcategoryreport.component.html",
  styleUrls: ["./liquorcategoryreport.component.scss"],
})
export class LiquorcategoryreportComponent implements OnInit {
  liquorCategoryData: any;
  liquorCategoryObj: any = {};
  pageNo = 0;
  public pageSize = 10;
  public totalCount: number;
  public isSearchRes = false;
  public columns = LiquorCategoryReportsConfig.columns;
  public dataSource = new MatTableDataSource<LiquorCategoryReport>();

  constructor(private service: ReportService) {}

  ngOnInit() {
    this.getLiquorCategory();
  }

  handlePagination(event) {
    console.log("Parent-handlePagination", event);
    this.getLiquorCategory();
  }

  getLiquorCategory() {
    this.service.getLiquorCategoryReport().subscribe((responceData: any) => {
      this.liquorCategoryData = responceData;
      console.log(responceData);
      this.dataSource.data = responceData as LiquorCategoryReport[];
    });
  }
}
