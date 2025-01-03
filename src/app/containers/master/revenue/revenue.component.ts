import { Component, OnInit } from '@angular/core';
import { RevenueService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { RevenueConfig } from '@app/config/table-config/revenue-config';
import { Revenue } from '@app/models/master';
import { Router } from '@angular/router';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = RevenueConfig.titleSection.list;
  public breadcrumbs = RevenueConfig.breadcrumbs;
  public columns = RevenueConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Revenue>();
  revenueListData: any[] = [];
  revenueObj: any = {
    code: '',
    name: '',
    isActive: true,
  };
  constructor(
    private revenueService: RevenueService,
    private router: Router) { }

  ngOnInit() {
    this.getRevenue();
  }
  onEdit(event) {
    this.router.navigate(['/master/revenue/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/master/revenue/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getRevenue(pageNo, pageSize);
  }
  getRevenue(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const objtest = {
      filters: {
        code: this.revenueObj.code ? this.revenueObj.code : null,
        name: this.revenueObj.name ? this.revenueObj.name : null,
        isActive: this.revenueObj.isActive ? JSON.parse(this.revenueObj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.revenueService.searchRevenue(objtest).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents as Revenue[];
    });
  }
  searchRevenue() {
    this.getRevenue();
  }
  resetKey() {
    this.revenueObj = {
      code: '',
      name: '',
      isActive: true,
    };
    this.getRevenue();
  }


}
