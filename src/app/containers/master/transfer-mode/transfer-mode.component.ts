import { Component, OnInit } from '@angular/core';
import { ModeOfTransferService } from '@app/services';
import { Router } from '@angular/router';
import { TransferMode } from "@app/models/master";
import { MatTableDataSource } from '@angular/material/table';
import { TransferModeConfig } from '@app/config/table-config/transfermode-config';

@Component({
  selector: "app-transfer-mode",
  templateUrl: "./transfer-mode.component.html",
  styleUrls: ["./transfer-mode.component.css"],
})
export class TransferModeComponent implements OnInit {
  pageNo = 0;
  public actionKeys = ["edit", "view"];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = TransferModeConfig.titleSection.list;
  public breadcrumbs = TransferModeConfig.breadcrumbs;
  public columns = TransferModeConfig.columns;
  public lastText = "master.common.list";
  public dataSource = new MatTableDataSource<TransferMode>();

  transfermodeData: any;
  transferModeObj: any = {
    code: '',
    name: '',
    isActive: true,
  };
  constructor(
    private transferService: ModeOfTransferService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getLicensee();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(["/master/transfer-mode/edit/" + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(["/master/transfer-mode/view/" + event.id]);
  }

  handlePagination(event) {
    console.log("Parent-handlePagination", event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getLicensee(pageNo, pageSize);
  }

  getLicensee(pageNo = 0, pageSize = 5) {
    const objtest = {
      filters: {
        code: this.transferModeObj.code ? this.transferModeObj.code : null,
        name: this.transferModeObj.name ? this.transferModeObj.name : null,
        isActive: this.transferModeObj.isActive
          ? JSON.parse(this.transferModeObj.isActive)
          : null,
      },
      pageNo: 0,
      paginationSize: 5,
    };
    this.transferService
      .searchTransferMode(objtest)
      .subscribe((responceData: any) => {
        //this.transfermodeData = responceData.data.contents;
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
      });
  }

  searchTransferMode() {
    this.getLicensee();
  }
  resetKey() {
    this.transferModeObj = {
      code: '',
      name: '',
      isActive: true,
    };
    this.getLicensee();
  }
}
