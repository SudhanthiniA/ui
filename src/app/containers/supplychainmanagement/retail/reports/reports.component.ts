import { Component, OnInit } from '@angular/core';
import { ReportService } from '@app/services/retails';
import { MatTableDataSource } from '@angular/material/table';
import { ReportsConfig } from '@app/config/retail/reports-config';
import { Reports } from '@app/models/retails';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  retailData: any;
  pageNo = 0;
  public actionKeys = [];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
 // public titleSection = ReportsConfig.titleSection.list;
 // public breadcrumbs = ReportsConfig.breadcrumbs;
  public columns = ReportsConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Reports>();
  constructor(private service: ReportService) { }

  ngOnInit() {
    this.getReports();
  }
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getReports();
  }
  getReports() {
    const url = 'retailReports';
    this.service.get().subscribe((resp) => {
      this.retailData = resp;
      this.dataSource.data = resp as Reports[];
    });
  }
}
