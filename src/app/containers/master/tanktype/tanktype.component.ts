import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TankType } from '@app/models/master';
import { LocationmasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { TankTypeConfig } from '@app/config/tanktype-config';
import { TankTypeService } from '@app/services';

@Component({
  selector: "app-tanktype",
  templateUrl: "./tanktype.component.html",
  styleUrls: ["./tanktype.component.scss"],
})
export class TanktypeComponent implements OnInit {
  pageNo = 0;
  public actionKeys = ["edit", "view"];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = TankTypeConfig.titleSection.list;
  public breadcrumbs = TankTypeConfig.breadcrumbs;
  public columns = TankTypeConfig.columns;
  public lastText = "master.common.list";
  public dataSource = new MatTableDataSource<TankType>();
  tanktypeListData: any;
  tanktypeObj: any = {};

  constructor(
    private router: Router,
    private locServ: LocationmasterService,
    private tankTypeService: TankTypeService
  ) {}

  ngOnInit() {
    this.tanktypeObj.active = "";
    this.gettanktype();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(["/master/tanktype/edit/" + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(["/master/tanktype/view/" + event.id]);
  }

  handlePagination(event) {
    console.log("Parent-handlePagination", event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.gettanktype(pageNo, pageSize);
  }

  gettanktype(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchobj = {
      filters: {
        code: this.tanktypeObj.code ? this.tanktypeObj.code : null,
        name: this.tanktypeObj.name ? this.tanktypeObj.name : null,
        material: this.tanktypeObj.material ? this.tanktypeObj.material : null,
        isActive: this.tanktypeObj.isActive
          ? JSON.parse(this.tanktypeObj.isActive)
          : null,
      },
      pageNo,
      paginationSize,
    };
    this.tankTypeService
      .searchTankType(searchobj)
      .subscribe((responceData: any) => {
        this.tanktypeListData = responceData.data.contents;
        if (responceData.errorCode === 200) {
          this.totalCount = responceData.data.totalElements;
          this.dataSource.data = responceData.data.contents as TankType[];
        }
      });
  }

  searchTankType() {
    this.gettanktype();
  }

  resetKey() {
    this.tanktypeObj = {
      code: "",
      name: "",
      material: "",
      isActive: "",
    };
    this.gettanktype();
  }
}
