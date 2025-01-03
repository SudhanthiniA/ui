import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { LicenceType } from '@app/models/master';
import { LicenceTypeConfig } from '@app/config/licencetype-config';
import { LicenseTypeService } from '@app/services';

@Component({
  selector: "app-licencetype",
  templateUrl: "./licencetype.component.html",
  styleUrls: ["./licencetype.component.scss"],
})
export class LicencetypeComponent implements OnInit {
  pageNo = 0;
  public actionKeys = ["edit", "view"];
  public paginationSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = LicenceTypeConfig.titleSection.list;
  public breadcrumbs = LicenceTypeConfig.breadcrumbs;
  public columns = LicenceTypeConfig.columns;
  public lastText = "master.common.list";
  public dataSource = new MatTableDataSource<LicenceType>();
  licenceTypeList: any;
  licenseTypeObj: any = {
    code: "",
    name: "",
    type: "",
    isActive: true,
  };
  public pageSize = 5;
  constructor(
    private router: Router,
    private datepipe: DatePipe,
    private licensetypeService: LicenseTypeService
  ) {}

  ngOnInit() {
    this.getlicenseType();
    const date = this.datepipe.transform(new Date(), "dd-MMM-yyyy");
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(["/master/licencetype/edit/" + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(["/master/licencetype/view/" + event.id]);
  }

  handlePagination(event) {
    console.log("Parent-handlePagination", event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getlicenseType(pageNo, pageSize);
  }

  getlicenseType(pageNo = 0, paginationSize = 5) {
    const searchObj = {
      filters: {
        code: this.licenseTypeObj.code ? this.licenseTypeObj.code : null,
        name: this.licenseTypeObj.name ? this.licenseTypeObj.name : null,
        isActive: this.licenseTypeObj.isActive
          ? this.licenseTypeObj.isActive
          : null,
      },
      pageNo,
      paginationSize,
    };
    this.licensetypeService
      .searchLicenseType(searchObj)
      .subscribe((responceData: any) => {
        this.licenceTypeList = responceData.data;
        if (responceData.errorCode === 200) {
          console.log(responceData.data);
          this.totalCount = responceData.data.totalElements;
          this.dataSource.data = responceData.data.contents;
          console.log(this.dataSource.data);
        }
      });
  }

  searchLicenseType() {
    this.getlicenseType();
  }

  resetKey() {
    this.licenseTypeObj = {
      code: "",
      name: "",
      isActive: true,
    };
    this.getlicenseType();
  }
}
