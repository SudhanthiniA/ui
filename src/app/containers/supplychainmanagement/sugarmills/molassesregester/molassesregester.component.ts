import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SugarmillapiService, PreviewService, SheeraNidhiService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Sheeranidhiconfig } from '@app/config/table-config/sheeranidhi-config';
import { Sheeranidhi } from '@app/models/sugarmill';

@Component({
  selector: "app-molassesregester",
  templateUrl: "./molassesregester.component.html",
  styleUrls: ["./molassesregester.component.scss"],
})
export class MolassesregesterComponent implements OnInit, OnDestroy {
  molassesrecieptList: any = [];
  selected: any;
  dateselected: any = moment().format("LLLL");
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  fundForm: any;
  fundObj: any = {
    request_date: "",
  };
  //Data table
  public actionKeys = ["edit", "view"];
  public pageSize = 15;
  public totalCount: number;
  public isSearchRes = false;

  public dataSource = new MatTableDataSource<Sheeranidhi>();
  public columns = Sheeranidhiconfig.columns;

  constructor(
    private router: Router,
    private SheeraNidhiService: SheeraNidhiService,
    private preview: PreviewService,
    private apiService: SugarmillapiService
  ) {}
  ngOnInit() {
    this.sheeranidhilist();
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
            request_date: this.fundObj.request_date
              ? this.fundObj.request_date
              : null,
          },
          pageNo: page,
          paginationSize: limit,
        };
        that.SheeraNidhiService.searchMolassesRegister(postData).subscribe(
          (resp: any) => {
            if (resp.data) {
              that.molassesrecieptList = resp.data.contents;
              callback({
                recordsTotal: resp.data.totalElements,
                recordsFiltered: resp.data.totalElements,
                data: [],
              });
            } else {
              that.molassesrecieptList = [];
            }
          }
        );
      },
      columns: [
        { data: "id" },
        { data: "date" },
        { data: "totalDispatchMolassesQtls" },
        { data: "totalDueMolasses" },
        { data: "totalProgressiveDeposits" },
      ],
    };
    this.preview.setData = "";
  }
  handlePagination(event) {
    console.log("Parent-handlePagination", event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.sheeranidhilist(pageNo, pageSize);
  }
  sheeranidhilist(pageNo = 0, paginationSize = 15) {
    const postData = {
      filters: {
        request_date: this.fundObj.request_date
          ? this.fundObj.request_date
          : null,
      },
      pageNo,
      paginationSize,
    };
    this.SheeraNidhiService.searchMolassesRegister(postData).subscribe(
      (resp: any) => {
        if (resp.data) {
          this.molassesrecieptList = resp.data.contents;

          this.dataSource.data = resp.data.contents as Sheeranidhi[];
          this.totalCount = resp.data.totalElements;
        }
      }
    );
  }

  onEdit(event) {
    this.router.navigate([
      "/supplychainmanagement/sugarmills/molassesfundreg/edit",
      event.id,
    ]);
  }

  onView(event) {
    this.router.navigate([
      "/supplychainmanagement/sugarmills/molassesfundreg/view",
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
      url = `download/pdf?screenName=${"SheeraNidhiRegister"}`;
      downloadType = "application/pdf";
      title = "SheeraNidhiRegister.pdf";
    }
    if (type == "downloadExcel") {
      url = `download/excel?screenName=${"SheeraNidhiRegister"}`;
      downloadType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      title = "SheeraNidhiRegister.xlsx";
    }
    if (type == "downloadCsv") {
      url = `download/csv?screenName=${"SheeraNidhiRegister"}`;
      downloadType = "application/csv";
      title = "SheeraNidhiRegister.csv";
    }
    this.exportFile(url, postData, downloadType, title);
    return true;
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
  searchFundRegister() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }
}
