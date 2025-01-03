import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusMasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { StatusConfig } from '@app/config/table-config/status-config';
import { Status } from '@app/models/master';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = StatusConfig.titleSection.list;
  public breadcrumbs = StatusConfig.breadcrumbs;
  public columns = StatusConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Status>();
  statusObj: any = {
    code: '',
    name: '',
    isActive: true,
  };
  statusListData: any;

  constructor(
    private router: Router,
    private statusService: StatusMasterService) { }

  ngOnInit() {
    this.getStatus();
  }
  onEdit(event) {
    this.router.navigate(['/master/status/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/master/status/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getStatus(pageNo, pageSize);
  }
 
  getStatus(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const objtest = {
      filters: {
        code: this.statusObj.code ? this.statusObj.code : null,
        name: this.statusObj.name ? this.statusObj.name : null,
        isActive: this.statusObj.isActive ? JSON.parse(this.statusObj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.statusService.searchStatus(objtest).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents as Status[];
    });
  }

  searchapi() {
      this.getStatus();
  }

  resetKey() {
    this.statusObj = {
      code: '',
      name: '',
      isActive: '',
    };
    this.getStatus();
  }
}
