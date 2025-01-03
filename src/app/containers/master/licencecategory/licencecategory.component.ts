import { Component, OnInit } from '@angular/core';
import { LicenseCategotyService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { LicenceCategoryConfig } from '@app/config/table-config/licenceCategory-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-licencecategory',
  templateUrl: './licencecategory.component.html',
  styleUrls: ['./licencecategory.component.css']
})
export class LicencecategoryComponent implements OnInit {
  licencecategorylist: any;
  licenseCategoryObj: any = {
    code: '',
    name: '',
    isActive: true
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = LicenceCategoryConfig.titleSection.list;
  public breadcrumbs = LicenceCategoryConfig.breadcrumbs;
  public columns = LicenceCategoryConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource();
  constructor(
    private licenseService: LicenseCategotyService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getlicencecategorylist();
  }
  onEdit(event) {
    this.router.navigate(['/master/licencecategory/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/master/licencecategory/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getlicencecategorylist(pageNo, pageSize);
  }
  getlicencecategorylist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const objtest = {
      filters: {
        code: this.licenseCategoryObj.code ? this.licenseCategoryObj.code : null,
        name: this.licenseCategoryObj.name ? this.licenseCategoryObj.name : null,
        isActive: this.licenseCategoryObj.isActive ? JSON.parse(this.licenseCategoryObj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.licenseService.searchLicenseCategory(objtest).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents;
    });
  }
  searchLicenseCategory() {
    this.getlicencecategorylist();
  }
  resetKey() {
    this.licenseCategoryObj = {
      code: '',
      name: '',
      isActive: true,
    };
    this.getlicencecategorylist();
  }
}
