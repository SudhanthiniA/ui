import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LicenceService, LicenseeService, LicenseTypeService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { LicenseeConfig } from '@app/config/licensee-config';

@Component({
  selector: 'app-licensee',
  templateUrl: './licensee.component.html',
  styleUrls: ['./licensee.component.css']
})
export class LicenseeComponent implements OnInit {

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = LicenseeConfig.titleSection.list;
  public breadcrumbs = LicenseeConfig.breadcrumbs;
  public columns = LicenseeConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Location>();
  licenseData: any;
  licenseTypeData: any;
  licenseeData: any;
  selected: any;
  licenseeObj: any = {
    code: '',
    name: '',
    licenseName: '',
    type: '',
    isActive: true
  };

  constructor(
    private router: Router,
    private licenceService: LicenceService,
    private licenseservice: LicenseeService,
    private licenseTypeService: LicenseTypeService,
  ) { }

  ngOnInit() {
    this.getLicensee();
    this.licensee();
    this.licenseType();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate([ '/master/licensee/edit/' + event.id ]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate([ '/master/licensee/view/' + event.id ]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getLicensee(pageNo, pageSize);
  }

  getLicensee(pageNo = 0, pageSize = 5) {
    const searchobj = {
      filters: {
        code: this.licenseeObj.code ? this.licenseeObj.code : null,
        name: this.licenseeObj.name ? this.licenseeObj.name : null,
        licenseName: this.licenseeObj.licenseName ? this.licenseeObj.licenseName : null,
        type: this.licenseeObj.type ? this.licenseeObj.type : null,
        isActive: this.licenseeObj.isActive ? JSON.parse(this.licenseeObj.isActive) : null,
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.licenseservice.searchLicensee(searchobj).subscribe((responceData: any) => {
      this.licenseeData = responceData.data.contents;
      if ( responceData.errorCode === 200 ) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as Location[];
      }
    });
  }

  searchLicensee() {
    this.getLicensee();
  }
  licenseType() {
  this.licenseTypeService.getLicenseType().subscribe((resp: any) => {
    this.licenseTypeData = resp.data;
  });
}
licensee(){
  this.licenceService.getLicence().subscribe((resp: any) => {
    this.licenseData = resp.data;
  });
}
  resetKey() {
    this.licenseeObj = {
      code: '',
      name: '',
      licenseName: '',
      type: '',
      isActive: true,
    };
    this.getLicensee();
  }
}
