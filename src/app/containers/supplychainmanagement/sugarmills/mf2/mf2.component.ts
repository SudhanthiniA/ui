import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SugarmillapiService, Mf9Service, PreviewService } from '@app/services';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { MF9config } from '@app/config/table-config/mf9-config';
import { Mf9 } from '@app/models/sugarmill';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';

@Component({
  selector: "app-mf2",
  templateUrl: "./mf2.component.html",
  styleUrls: ["./mf2.component.css"],
})
export class Mf2Component implements OnInit {
  totalCount: any;
  mf9list: any;
  selected: any;
  mf9Form: any;
  mf9Obj: any = {
    sugar_mill_name: "",
    molasses_loading_mode: "",
  };
  dateselected: any = moment().format("LLLL");
  //data tables
  public dataSource = new MatTableDataSource<Mf9>();
  public columns = MF9config.columns;
  public actionKeys = ["edit", "view"];
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "DRAFT",
    },
  };
  public pageSize = 5;
  workflowobj: any;

  constructor(
    private router: Router,
    private preview: PreviewService,
    private Mf9Service: Mf9Service,
    private apiService: SugarmillapiService,
    private WorkflowcofigService:WorkflowcofigService
  ) {}

  ngOnInit() {
    this.getmf9list();
    this.workflow();
    this.preview.setData = "";
  }

  workflow(){
    this.WorkflowcofigService.getworkflowbydesignation('SUGAR_MILL', 'SUGARMILL_MF9PRODUCTION').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }

  getmf9list(pageNo = 0, paginationSize = 5) {
    const postData = {
      filters: {
        sugar_mill_name: this.mf9Obj.sugar_mill_name
          ? this.mf9Obj.sugar_mill_name
          : null,
        molasses_loading_mode: this.mf9Obj.molasses_loading_mode
          ? this.mf9Obj.molasses_loading_mode
          : null,
        mf9Forecast: "YEARLY",
      },
      pageNo,
      paginationSize,
    };
    this.Mf9Service.searchMf9(postData).subscribe((resp: any) => {
      if (resp.data) {
        this.mf9list = resp.data.contents
        this.dataSource.data = resp.data.contents as Mf9[];
        this.totalCount = resp.data.totalElements;
      } else {
        this.dataSource.data = [];
        this.totalCount = 0;
      }
    });
   
  }
 
  handlePagination(event) {
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getmf9list(pageNo, pageSize);
  }

  clearData() {
    this.mf9Obj.sugar_mill_name = "";
    this.mf9Obj.molasses_loading_mode = "";
    this.getmf9list();
  }

  navigateView(id) {
    this.router.navigate(["/supplychainmanagement/sugarmills/mf9/view", id]);
  }

  navigateEdit(id) {
    this.router.navigate(["/supplychainmanagement/sugarmills/mf9/edit", id]);
  }

  onEdit(event) {
    this.router.navigate([
      "/supplychainmanagement/sugarmills/mf9/edit",
      event.id,
    ]);
  }

  onView(event) {
    const findobj = this.mf9list.find(x => x.id == event.id)

    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer);
    if (iscustomer == 'true') {
      if (iscustomer == 'true' && findobj.status == 'SENDBACK') {
        this.router.navigate(['/supplychainmanagement/sugarmills/mf9/edit/', event.id]);
      }else{
        this.router.navigate(['/supplychainmanagement/sugarmills/mf9/view/', event.id]);
      }
    }else{
      this.router.navigate(['/supplychainmanagement/sugarmills/mf9/edit/', event.id]);
    }
    // if ((this.workflowobj && !this.workflowobj.isEditable) &&  findobj.status != 'SENDBACK' ){
    //   this.router.navigate(['/supplychainmanagement/sugarmills/mf9/view', event.id]);
    // } else {
    //   // 
    //   if(findobj.stage != this.workflowobj.assignedDesc && this.workflowobj.level== 'Level 1') {
    //     this.router.navigate(['/supplychainmanagement/sugarmills/mf9/view', event.id]);

    //   } else {
    //     this.router.navigate(['/supplychainmanagement/sugarmills/mf9/edit', event.id]);

    //   }
    // }
    // this.router.navigate(['/supplychainmanagement/sugarmills/mf9/view', event.id]);
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
