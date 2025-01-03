import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SugarmillapiService, PreviewService, MolassesReceiptService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';
import { MasterapiService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { MolassesrecieptConfig } from '@app/config/table-config/molassesreceipt-config';
import { Molassesreciept } from '@app/models/sugarmill';

@Component({
  selector: "app-molassesrecieptandconsump",
  templateUrl: "./molassesrecieptandconsump.component.html",
  styleUrls: ["./molassesrecieptandconsump.component.scss"],
})
export class MolassesrecieptandconsumpComponent implements OnInit, OnDestroy {
  tanklist: any;
  molassesrecieptList: any;
  receiptObj: any = {
    tankId: "",
    consumption: "",
    actualBalance: "",
    fromDate:'',
    toDate:'',
  };
  receiptForm: any;
  selected: any;
  dateselected: any = moment().format("LLLL");
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  //data table
  // public actionKeys = ["edit", "view"];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<Molassesreciept>();
  public columns = MolassesrecieptConfig.columns;
  constructor(
    private router: Router,
    private MolassesReceiptService: MolassesReceiptService,
    private MasterapiService: MasterapiService,
    private preview: PreviewService,
    private apiService: SugarmillapiService
  ) {}
  ngOnInit() {
    this.getmolassesreciept();
    // const that = this;
    // this.dtOptions = {
    //   pagingType: "full_numbers",
    //   serverSide: true,
    //   processing: true,
    //   pageLength: 5,
    //   autoWidth: false,
    //   ajax: (dataTablesParameters: any, callback) => {
    //     const { start, length: limit } = dataTablesParameters;
    //     const page = start > 0 ? start / limit : 0;
    //     const postData = {
    //       filters: {
    //         actualBalance: this.receiptObj.actualBalance
    //           ? this.receiptObj.actualBalance
    //           : null,
    //         tankId: this.receiptObj.tankId ? this.receiptObj.tankId : null,
    //         consumption: this.receiptObj.consumption
    //           ? this.receiptObj.consumption
    //           : null,
    //       },
    //       pageNo: page,
    //       paginationSize: limit,
    //     };
    //     that.MolassesReceiptService.searchMolassesReceipt(postData).subscribe(
    //       (resp: any) => {
    //         if (resp.data) {
    //           that.molassesrecieptList = resp.data.contents;
    //           callback({
    //             recordsTotal: resp.data.totalElements,
    //             recordsFiltered: resp.data.totalElements,
    //             data: [],
    //           });
    //         } else {
    //           that.molassesrecieptList = [];
    //         }
    //       }
    //     );
    //   },
    //    columns: [
    //     { data: "id" },
    //     { data: "tankTypeResponseDto?.name" },
    //     { data: "openingBalance" },
    //     { data: "reciptBalance" },
    //     { data: "consumption" },
    //     { data: "bookBalance" },
    //     { data: "actualBalance" },
    //   ],
    // };
    // this.preview.setData = "";
  }
  handlePagination(event) {
    console.log("Parent-handlePagination", event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getmolassesreciept(pageNo, pageSize);
  }
  getmolassesreciept(pageNo = 0, paginationSize = 5) {
    const postData = {
      filters: {
        fromDate:this.receiptObj.fromDate?this.receiptObj.fromDate:null,
        toDate:this.receiptObj.toDate?this.receiptObj.toDate:null,
      },
      pageNo,
      paginationSize,
    };
    this.MolassesReceiptService.searchMolassesReceipt(postData).subscribe(
      (resp: any) => {
        let dataa = resp.data
        if (resp.data) {
          this.molassesrecieptList = resp.data.contents;
          this.dataSource.data = resp.data.contents as Molassesreciept[];
          this.totalCount = resp.data.totalElements;
        
        }else{
          this.dataSource.data = [];
          this.molassesrecieptList = [];
          this.totalCount = 0;
        }
      }
    );
  }
  clearedata(){
    this.receiptObj.fromDate = '';
    this.receiptObj.toDate = '';
    this.getmolassesreciept();
  }
  onEdit(event) {
    this.router.navigate([
      "/supplychainmanagement/sugarmills/molassesrecieptandconsumption/edit",
      event.id,
    ]);
  }

  onView(event) {
    this.router.navigate([
      "/supplychainmanagement/sugarmills/molassesrecieptandconsumption/view",
      event.id,
    ]);
  }

  getTankDetails() {
    this.MasterapiService.get(apiUrls.getAllTank)
      .then((responceData: any) => {
        this.tanklist = responceData.data;
      })
      .catch((err: any) => {
        console.log("\n err...", err);
      });
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
      url = `download/pdf?screenName=${"MolassesReceiptConsumption"}`;
      downloadType = "application/pdf";
      title = "Molasses_Receipt_Consumption.pdf";
    }
    if (type == "downloadExcel") {
      url = `download/excel?screenName=${"MolassesReceiptConsumption"}`;
      downloadType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      title = "Molasses_Receipt_Consumption.xlsx";
    }
    if (type == "downloadCsv") {
      url = `download/csv?screenName=${"MolassesReceiptConsumption"}`;
      downloadType = "application/csv";
      title = "Molasses_Receipt_Consumption.csv";
    }
    this.exportFile(url, postData, downloadType, title);
    return true;
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getReceipt() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

  navigatetransportgeneration(id) {
    this.router.navigate([
      "/supplychainmanagement/sugarmills/dispatch/add",
      id,
    ]);
  }
}
