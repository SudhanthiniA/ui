import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { DepartmentConfig } from '@app/config/table-config/department-config';
import { Department } from '@app/models/master';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departmentData: any;
  departmentObj: any = {
    code: '',
    name: '',
    isActive: true
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = DepartmentConfig.titleSection.list;
  public breadcrumbs = DepartmentConfig.breadcrumbs;
  public columns = DepartmentConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Department>();
  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit() {
    this.getDepartment();
  }
  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/department/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/department/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getDepartment(pageNo, pageSize);
  }

  getDepartment(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      filters: {
        code: this.departmentObj.code ? this.departmentObj.code : null,
        name: this.departmentObj.name ? this.departmentObj.name : null,
        isActive: this.departmentObj.isActive ? JSON.parse(this.departmentObj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.departmentService.searchDepartment(searchobj).subscribe((responceData: any) => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as Department[];
      }
    });
  }

  searchDepartment() {
    this.getDepartment();
  }

  resetKey() {
    this.departmentObj = {
      code: '',
      name: '',
      isActive: true,
    };
    this.getDepartment();
  }
}
