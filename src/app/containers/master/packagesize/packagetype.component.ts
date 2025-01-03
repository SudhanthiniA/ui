import { Component, OnInit } from '@angular/core';
import { PackageTypeService } from '@app/services';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { PackageTypeConfig } from '@app/config/table-config/packagetype-config';
import { PackageType } from "@app/models/master";

@Component({
  selector: "app-packagetype",
  templateUrl: "./packagetype.component.html",
  styleUrls: ["./packagetype.component.scss"],
})
export class PackagetypeComponent implements OnInit {
  pageNo = 0;
  public actionKeys = ["edit", "view"];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = PackageTypeConfig.titleSection.list;
  public breadcrumbs = PackageTypeConfig.breadcrumbs;
  public columns = PackageTypeConfig.columns;
  public lastText = "master.common.list";
  public dataSource = new MatTableDataSource<PackageType>();
  packagetypeData: any;
  packageObj: any = {
    code: "",
    name: "",
    isActive: true,
  };
  constructor(
    private packageService: PackageTypeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPackagetype();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(["/master/packagetype/edit/" + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(["/master/packagetype/view/" + event.id]);
  }

  handlePagination(event) {
    console.log("Parent-handlePagination", event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getPackagetype(pageNo, pageSize);
  }

  getPackagetype(pageNo = 0, pageSize = 5) {
    const objtest = {
      filters: {
        code: this.packageObj.code ? this.packageObj.code : null,
        name: this.packageObj.name ? this.packageObj.name : null,
        isActive: this.packageObj.isActive ? JSON.parse(this.packageObj.isActive) : null,
      },
      pageNo: 0,
      paginationSize: 5,
    };
    this.packageService
      .searchPackage(objtest)
      .subscribe((responceData: any) => {
        this.packagetypeData = responceData.data.contents;
        if (responceData.errorCode === 200) {
          this.totalCount = responceData.data.totalElements;
          this.dataSource.data = responceData.data.contents;
        }
      });
  }

  searchPackage() {
    this.getPackagetype();
  }
  resetKey() {
    this.packageObj = {
      code: "",
      name: "",
      isActive: true,
    };
    this.getPackagetype();
  }
}
