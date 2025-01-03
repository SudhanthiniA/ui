import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DivisionService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { DivisionConfig } from '@app/config/table-config/division-config';
import { Division } from '@app/models/master';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = DivisionConfig.titleSection.list;
  public breadcrumbs = DivisionConfig.breadcrumbs;
  public columns = DivisionConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Division>();
  divisionlist: any;
  divisionObj: any = {
    divisionCode: '',
    divisionName: '',
    active: true
  };
  constructor(
    private router: Router,
    private divisionService: DivisionService
  ) { }

  ngOnInit() {
    this.getdivisionlist();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/division/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/division/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getdivisionlist(pageNo, pageSize);
  }

  getdivisionlist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        divisionCode: this.divisionObj.divisionCode ? this.divisionObj.divisionCode : null,
        divisionName: this.divisionObj.divisionName ? this.divisionObj.divisionName : null,
        active: this.divisionObj.active ? this.divisionObj.active : null,
      },
      pageNo,
      paginationSize
    };
    this.divisionService.searchDivision(searchObj).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents as Division[];
    });
  }

  searchDivision() {
    this.getdivisionlist();
  }

  resetKey() {
    this.divisionObj = {
      divisionCode: '',
      divisionName: '',
      active: '',
    };
    this.getdivisionlist();
  }
}
