import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { RouteConfig } from '@app/config/table-config/route-config';
import { Route } from '@app/models/master';

@Component({
  selector: 'app-routemaster',
  templateUrl: './routemaster.component.html',
  styleUrls: ['./routemaster.component.scss']
})
export class RoutemasterComponent implements OnInit {
  supplytypelist: any;
  routeObj: any = {
    routeCode: '',
    routeName: '',
    isActive: true
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = RouteConfig.titleSection.list;
  public breadcrumbs = RouteConfig.breadcrumbs;
  public columns = RouteConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Route>();

  constructor(private router: Router, private routeService: RouteService) { }

  ngOnInit() {
    this.getCategory();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/routemaster/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/routemaster/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getCategory(pageNo, pageSize);
  }

  getCategory(pageNo = 0, paginationSize = 5) {
    const objtest = {
      filters: {
        routeCode: this.routeObj.routeCode ? this.routeObj.routeCode : null,
        routeName: this.routeObj.routeName ? this.routeObj.routeName : null,
        isActive: this.routeObj.isActive ? JSON.parse(this.routeObj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.routeService.searchRoute(objtest).subscribe((responceData: any) => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as Route[];
      }
    });
  }

  searchRoute() {
    this.getCategory();
  }
  resetKey() {
    this.routeObj = {
      routeCode: '',
      routeName: '',
      isActive: true
    };
    this.getCategory();
  }
}
