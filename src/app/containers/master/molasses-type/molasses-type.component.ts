import { Component, OnInit } from '@angular/core';
import { MolassesTypeService } from '@app/services';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MolassesTyperConfig } from '@app/config/table-config/molassestype-config';
import { MolassesType } from "@app/models/master";

@Component({
  selector: "app-molasses-type",
  templateUrl: "./molasses-type.component.html",
  styleUrls: ["./molasses-type.component.css"],
})
export class MolassesTypeComponent implements OnInit {
  pageNo = 0;
  public actionKeys = ["edit", "view"];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = MolassesTyperConfig.titleSection.list;
  public breadcrumbs = MolassesTyperConfig.breadcrumbs;
  public columns = MolassesTyperConfig.columns;
  public lastText = "master.common.list";
  public dataSource = new MatTableDataSource<MolassesType>();
  molassestypeData: any;
  molassesObj: any = {
    code: "",
    name: "",
    isActive: true,
  };
  constructor(
    private molasessType: MolassesTypeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getMolasses();
  }
  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(["/master/molasses-type/edit/" + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(["/master/molasses-type/view/" + event.id]);
  }

  handlePagination(event) {
    console.log("Parent-handlePagination", event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getMolasses(pageNo, pageSize);
  }

  getMolasses(pageNo = 0, pageSize = 5) {
    const objtest = {
      filters: {
        code: this.molassesObj.code ? this.molassesObj.code : null,
        name: this.molassesObj.name ? this.molassesObj.name : null,
        isActive: this.molassesObj.isActive
          ? JSON.parse(this.molassesObj.isActive)
          : null,
      },
      pageNo: 0,
      paginationSize: 5,
    };
    this.molasessType
      .searchMolassesType(objtest)
      .subscribe((responceData: any) => {
        this.molassestypeData = responceData.data.contents;
        if (responceData.errorCode === 200) {
          this.totalCount = responceData.data.totalElements;
          this.dataSource.data = responceData.data.contents as MolassesType[];
        }
      });
  }

  searchMolassesType() {
    this.getMolasses();
  }

  resetKey() {
    this.molassesObj = {
      code: "",
      name: "",
      isActive: "true",
    };
    this.getMolasses();
  }
}
