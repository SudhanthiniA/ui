import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SugarmillapiService, Mf9Service, PreviewService } from '@app/services';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { Mf9fortnightconfig } from '@app/config/table-config/mf9fortnight-config';
import { Mf9fortnight } from '@app/models/sugarmill';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';

@Component({
  selector: "app-mf9fortnight",
  templateUrl: "./mf9fortnight.component.html",
  styleUrls: ["./mf9fortnight.component.scss"],
})
export class Mf9fortnightComponent implements OnInit {
  mf9list: any;
  selected: any;
  mf9Form: any;
  mf9Obj: any = {
    sugar_mill_name: "",
    molasses_loading_mode: "",
  };
  dateselected: any = moment().format("LLLL");
  //Data table
  public actionKeys = ["edit", "view"];
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "DRAFT",
    },
  };
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<Mf9fortnight>();
  public columns = Mf9fortnightconfig.columns;
  workflowobj: any;
  mf9fornightlist: any;
  constructor(
    private router: Router,
    private preview: PreviewService,
    private Mf9Service: Mf9Service,
    private apiService: SugarmillapiService,
    private wrokflowconfig: WorkflowcofigService

  ) {}
  ngOnInit() {
    this.mf9fortnightlist();
    this.workflow();
    this.preview.setData = "";
  }

  workflow(){
    this.wrokflowconfig.getworkflowbydesignation('SUGAR_MILL','SUGARMILL_MF9PRODUCTION').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }

  handlePagination(event) {
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.mf9fortnightlist(pageNo, pageSize);
  }

  mf9fortnightlist(pageNo = 0, paginationSize = 5) {
    const postData = {
      filters: {
        sugar_mill_name: this.mf9Obj.sugar_mill_name
          ? this.mf9Obj.sugar_mill_name
          : null,
        molasses_loading_mode: this.mf9Obj.molasses_loading_mode
          ? this.mf9Obj.molasses_loading_mode
          : null,
        mf9Forecast: "FORTNIGHT",
      },
      pageNo,
      paginationSize,
    };
    this.Mf9Service.searchMf9Fortnight(postData).subscribe((resp: any) => {
      if (resp.data) {
        this.mf9fornightlist = resp.data.contents
        this.dataSource.data = resp.data.contents as Mf9fortnight[];
        this.totalCount = resp.data.totalElements;
      } else {
        this.dataSource.data = [];
        this.totalCount = 0;
      }
    });
    this.wrokflowconfig.getworkflowbydesignation('SUGAR_MILL','MF9 Production').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }
  clearData() {
    this.mf9Obj.sugar_mill_name = "";
    this.mf9Obj.molasses_loading_mode = "";
    this.mf9fortnightlist();
  }
  onEdit(event) {
    this.router.navigate([
      "/supplychainmanagement/sugarmills/mf9fortnight/edit",
      event.id,
    ]);
  }
  onView(event) {
    const findobj = this.mf9fornightlist.find(x => x.id == event.id)
    
    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer);
    if (iscustomer == 'true') {
      if (iscustomer == 'true' && findobj.status == 'SENDBACK') {
        this.router.navigate(['/supplychainmanagement/sugarmills/mf9fortnight/edit/', event.id]);
      }else{
        this.router.navigate(['/supplychainmanagement/sugarmills/mf9fortnight/view/', event.id]);
      }
    }else{
      this.router.navigate(['/supplychainmanagement/sugarmills/mf9fortnight/edit/', event.id]);
    }
    // this.router.navigate([
    //   "/supplychainmanagement/sugarmills/mf9fortnight/view",
    //   event.id,
    // ]);
    // if ((this.workflowobj && !this.workflowobj.isEditable) &&  findobj.status != 'SENDBACK' ){
    //   this.router.navigate(["/supplychainmanagement/sugarmills/mf9fortnight/view", event.id]);
    // } else {
      
    //   if(findobj.stage != this.workflowobj.assignedDesc && this.workflowobj.level== 'Level 1') {
    //     this.router.navigate(["/supplychainmanagement/sugarmills/mf9fortnight/view", event.id]);

    //   } else {
    //     this.router.navigate(['/supplychainmanagement/sugarmills/mf9fortnight/edit', event.id]);

    //   }
    // }
    // this.router.navigate(['/supplychainmanagement/sugarmills/mf9fortnight/view', event.id]);
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
      url = `download/pdf?screenName=${"ProductionForecast(MF9)"}`;
      downloadType = "application/pdf";
      title = "Production_Forecast.pdf";
    }
    if (type == "downloadExcel") {
      url = `download/excel?screenName=${"ProductionForecast(MF9)"}`;
      downloadType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      title = "Production_Forecast.xlsx";
    }
    if (type == "downloadCsv") {
      url = `download/csv?screenName=${"ProductionForecast(MF9)"}`;
      downloadType = "application/csv";
      title = "Production_Forecast.csv";
    }
    this.exportFile(url, postData, downloadType, title);
    return true;
  }
}
