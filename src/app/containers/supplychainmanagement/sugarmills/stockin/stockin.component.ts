import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import {
  SugarmillapiService,
  StockInService,
  PreviewService,
} from '@app/services';
import { StockinConfig } from '@app/config/table-config/stockin';
import { Stockin } from '@app/models/sugarmill';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: "app-stockin",
  templateUrl: "./stockin.component.html",
  styleUrls: ["./stockin.component.scss"],
})
export class StockinComponent implements OnInit {
  drafttest: any;
  gradeList: any;
  stockList: any;
  selected: any;
  stockInForm: any;
  dateselected: any = moment().format("LLLL");
  stockInObj = {
    grade: "",
    date: "",
  };
  //status molassesTransferStatus
  pageNo = 0;
  public actionKeys = ["edit", "view"];
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "INITIATED",
    },
  };
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = StockinConfig.titleSection.list;
  public breadcrumbs = StockinConfig.breadcrumbs;
  public columns = StockinConfig.columns;
  public lastText = "master.common.list";
  public dataSource = new MatTableDataSource<Stockin>();

  constructor(
    private previews: PreviewService,
    private router: Router,
    private apiService: SugarmillapiService,
    private stockInService: StockInService
  ) { }

  ngOnInit() {
    this.getStockList();
    this.previews.setData = "";
  }

  onEdit(event) {
    this.router.navigate([
      "/supplychainmanagement/sugarmills/stockin/edit", event.id,
    ]);
  }

  onView(event) {
    this.router.navigate([
      "/supplychainmanagement/sugarmills/stockin/view", event.id,
    ]);
  }

  handlePagination(event) {
    console.log("Parent-handlePagination", event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getStockList(pageNo, pageSize);
  }

  navigatetoadd() {
    this.router.navigate(["/supplychainmanagement/sugarmills/stockin/add"]);
  }

  getStockList(pageNo = 0, pageSize = 5) {
    const { grade, date } = this.stockInObj;
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        grade: grade || null,
        date: date || null,
      },
      pageNo,
      paginationSize,
    };
    this.stockInService.searchStockIn(searchObj).subscribe((resp: any) => {
      if (resp.errorCode === 200) {
        this.totalCount = resp.data.totalElements;
        this.dataSource.data = resp.data.contents as Stockin[];
        this.dataSource.data.reverse();
      }
      else{
        this.dataSource.data = []; 
        this.totalCount = 0;
      }
    });
  }
  clearData() {
    this.stockInObj.grade = '';
    this.stockInObj.date = '';
    this.getStockList();
  }
  exportFile(url, postData, downloadType, title) {
    this.apiService
      .postDownload(url, postData)
      .then((responceData: any) => {
        const newBlob = new Blob([responceData], { type: downloadType });
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(newBlob);
          return;
        }
        const data = window.URL.createObjectURL(newBlob);
        const link = document.createElement("a");
        link.href = data;
        link.download = title;
        link.dispatchEvent(
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );
        return true;
      })
      .catch((err: any) => {
        console.log("\n err...", err);
      });
  }

  getPdfData1(type: any) {
    let url, downloadType, title;
    const postData = {
      filters: {},
      pageNo: 0,
      paginationSize: 5,
    };
    if (type == "downloadPdf") {
      url = `download/pdf?screenName=${"StockIn"}`;
      downloadType = "application/pdf";
      title = "StockIn.pdf";
    }
    if (type == "downloadExcel") {
      url = `download/excel?screenName=${"StockIn"}`;
      downloadType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      title = "StockIn.xlsx";
    }
    if (type == "downloadCsv") {
      url = `download/csv?screenName=${"StockIn"}`;
      downloadType = "application/csv";
      title = "StockIn.csv";
    }
    this.exportFile(url, postData, downloadType, title);
    return true;
  }
}
