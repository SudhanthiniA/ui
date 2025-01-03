import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService, PreviewService, Mf5Part3Service } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Mf5part3config } from '@app/config/table-config/mf5part3-config';
import { Mf5part3 } from '@app/models/sugarmill';

@Component({
  selector: "app-mf5-part3",
  templateUrl: "./mf5-part3.component.html",
  styleUrls: ["./mf5-part3.component.scss"],
})
export class Mf5Part3Component implements OnInit {
  mf5part2list: any;
  selected: any;
  dateselected: any = moment().format("LLLL");
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  mf5Part3Form: any;
  mf5Part3Obj: any = {
    serial_no_of_tank: "",
    tank_type: "",
    open_stock: "",
  };
  //data tables
  totalCount: any;

  public dataSource = new MatTableDataSource<Mf5part3>();
  public columns = Mf5part3config.columns;
  public actionKeys = ["edit", "view"];
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "Draft",
    },
  };
  constructor(
    private router: Router,
    private Mf5Part3Service: Mf5Part3Service,
    private preview: PreviewService,
    private datepipe: DatePipe,
    private apiService: SugarmillapiService
  ) {}
  ngOnInit() {
    this.getmf5part3list();
    const that = this;
    this.dtOptions = {
      pagingType: "full_numbers",
      serverSide: true,
      processing: true,
      pageLength: 5,
      autoWidth: false,
      ajax: (dataTablesParameters: any, callback) => {
        const { start, length: limit } = dataTablesParameters;
        const page = start > 0 ? start / limit : 0;
        const postData = {
          filters: {
            serial_no_of_tank: this.mf5Part3Obj.serial_no_of_tank
              ? this.mf5Part3Obj.serial_no_of_tank
              : null,
            tank_type: this.mf5Part3Obj.tank_type
              ? this.mf5Part3Obj.tank_type
              : null,
            open_stock: this.mf5Part3Obj.open_stock
              ? this.mf5Part3Obj.open_stock
              : null,
          },
          pageNo: page,
          paginationSize: limit,
        };
        that.Mf5Part3Service.searchMf5Part3(postData).subscribe((resp: any) => {
          if (resp.data) {
            that.mf5part2list = resp.data.contents;
            callback({
              recordsTotal: resp.data.totalElements,
              recordsFiltered: resp.data.totalElements,
              data: [],
            });
          } else {
            that.mf5part2list = [];
          }
        });
      },
      columns: [
        { data: "id" },
        { data: "serialNoOfTank" },
        { data: "tankType" },
        { data: "openStock" },
        { data: "molassesTotal" },
        { data: "nameOfDistillery" },
        { data: "quantitySupplied" },
        { data: "status" },
      ],
    };
    this.preview.setData = "";
  }
  handlePagination(event) {
    console.log("Parent-handlePagination", event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getmf5part3list(pageNo, pageSize);
  }
  getmf5part3list(pageNo = 0, paginationSize = 15) {
    const postData = {
      filters: {
        serial_no_of_tank: this.mf5Part3Obj.serial_no_of_tank
          ? this.mf5Part3Obj.serial_no_of_tank
          : null,
        tank_type: this.mf5Part3Obj.tank_type
          ? this.mf5Part3Obj.tank_type
          : null,
        open_stock: this.mf5Part3Obj.open_stock
          ? this.mf5Part3Obj.open_stock
          : null,
      },
      pageNo,
      paginationSize,
    };
    this.Mf5Part3Service.searchMf5Part3(postData).subscribe((resp: any) => {
      if (resp.data) {
        this.mf5part2list = resp.data.contents;
        this.dataSource.data = resp.data.contents as Mf5part3[];
        this.totalCount = resp.data.totalElements;
      }
    });
  }
  onView(event) {
    this.router.navigate([
      "/supplychainmanagement/sugarmills/mf5-part3/view",
      event.id,
    ]);
  }
  onEdit(event) {
    this.router.navigate([
      "/supplychainmanagement/sugarmills/mf5-part3/edit",
      event.id,
    ]);
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
      url = `download/pdf?screenName=${"PreviousYearTankSummary"}`;
      downloadType = "application/pdf";
      title = "Previous_Year_Tank_Summary.pdf";
    }
    if (type == "downloadExcel") {
      url = `download/excel?screenName=${"PreviousYearTankSummary"}`;
      downloadType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      title = "Previous_Year_Tank_Summary.xlsx";
    }
    if (type == "downloadCsv") {
      url = `download/csv?screenName=${"PreviousYearTankSummary"}`;
      downloadType = "application/csv";
      title = "Previous_Year_Tank_Summary.csv";
    }
    this.exportFile(url, postData, downloadType, title);
    return true;
  }
  searchMf5Part3() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  navigatetransportgeneration(id) {
    this.router.navigate([
      "/supplychainmanagement/sugarmills/dispatch/add",
      id,
    ]);
  }
}
