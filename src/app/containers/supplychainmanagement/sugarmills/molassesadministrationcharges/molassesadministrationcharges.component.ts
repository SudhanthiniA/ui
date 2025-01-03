import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SugarmillapiService, PreviewService, MolassesAdminService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Molasseschargesconfig } from '@app/config/table-config/molassescharge-config';
import { Molassescharges } from '@app/models/sugarmill';

@Component({
  selector: "app-molassesadministrationcharges",
  templateUrl: "./molassesadministrationcharges.component.html",
  styleUrls: ["./molassesadministrationcharges.component.scss"],
})
export class MolassesadministrationchargesComponent implements OnInit {
  molassesadministrationchargesList: any;
  adminObj: any = {
    requestDate: "",
  };
  adminForm: any;
  selected: any;
  dateselected: any = moment().format("LLLL");
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  //data table
  public actionKeys = ["view"];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public dataSource = new MatTableDataSource<Molassescharges>();
  public columns = Molasseschargesconfig.columns;
  constructor(
    private router: Router,
    private MolassesAdminService: MolassesAdminService,
    private preview: PreviewService,
    private apiService: SugarmillapiService
  ) {}
  ngOnInit() {
    this.getmolasseschargeslist();
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
            requestDate: this.adminObj.requestDate
              ? this.adminObj.requestDate
              : null,
          },
          pageNo: page,
          paginationSize: limit,
        };
        that.MolassesAdminService.searchMolassesAdmin(postData).subscribe(
          (resp: any) => {
            if (resp.data) {
              that.molassesadministrationchargesList = resp.data.contents;
              callback({
                recordsTotal: resp.data.totalElements,
                recordsFiltered: resp.data.totalElements,
                data: [],
              });
            } else {
              that.molassesadministrationchargesList = [];
            }
          }
        );
      },
      columns: [
        { data: "id" },
        { data: "requestDate" },
        { data: "openingBalance" },
        { data: "deposit" },
        { data: "total" },
        { data: "dispatchedDayQtls" },
        { data: "dispatchedToDateQtls" },
        { data: "consumedDay" },
        { data: "consumedToDate" },
        { data: "remarks" },
      ],
    };
    this.preview.setData = "";
  }

  navigateView(id) {
    this.router.navigate([
      "/supplychainmanagement/sugarmills/molassesadministrationcharges/view",
      id,
    ]);
  }

  onEdit(event) {
    // this.router.navigate(['/supplychainmanagement/sugarmills/indentrequest/view', event.id]);
    this.router.navigate([
      "/supplychainmanagement/sugarmills/molassesadministrationcharges/edit",
      event.id,
    ]);
  }

  onView(event) {
    this.router.navigate([
      "/supplychainmanagement/sugarmills/molassesadministrationcharges/view",
      event.id,
    ]);
  }
  handlePagination(event) {
    console.log("Parent-handlePagination", event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getmolasseschargeslist(pageNo, pageSize);
  }
  cleardata(){
    this.adminObj.requestDate;
    this.getmolasseschargeslist();
  }
  getmolasseschargeslist(pageNo = 0, paginationSize = 5) {
    const postData = {
      filters: {
        requestDate: this.adminObj.requestDate
          ? this.adminObj.requestDate
          : null,
      },
      pageNo,
      paginationSize,
    };
    this.MolassesAdminService.searchMolassesAdmin(postData).subscribe(
      (resp: any) => {
        if (resp.data) {
          this.molassesadministrationchargesList = resp.data.contents;
          this.dataSource.data = resp.data.contents as Molassescharges[];
          this.totalCount = resp.data.totalElements;
        }
      }
    );
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
      url = `download/pdf?screenName=${"MolassesAdministrationCharges"}`;
      downloadType = "application/pdf";
      title = "Molasses_Administration_Charges.pdf";
    }
    if (type == "downloadExcel") {
      url = `download/excel?screenName=${"MolassesAdministrationCharges"}`;
      downloadType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      title = "Molasses_Administration_Charges.xlsx";
    }
    if (type == "downloadCsv") {
      url = `download/csv?screenName=${"MolassesAdministrationCharges"}`;
      downloadType = "application/csv";
      title = "Molasses_Administration_Charges.csv";
    }
    this.exportFile(url, postData, downloadType, title);
    return true;
  }
  getAdminCharges() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
