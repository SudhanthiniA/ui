import { Component, OnInit } from '@angular/core';
import { DistileryService, WorkflowcofigService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottleboxing',
  templateUrl: './bottleboxing.component.html',
  styleUrls: ['./bottleboxing.component.scss']
})
export class BottleboxingComponent implements OnInit {

  boxingObj: any = {};
  boxingbottlinglist: any;
  producttypelist: any[] = [];
  workflowobj: any;
  pageNo = 0;
  public actionBtnBasedOnCond = {
    edit: {
      // column: 'printStatus',
      // condition: 'PRINT_COMPLETED',
    },
  };
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource();

  public columns = [
    {
      name: "id",
      displayName: "#",
      type: "number",
    },
    {
      name: "requestDate",
      displayName: "Date",
      type: "date",
      dateFormat: "dd-MM-yyyy",
    },
    // {
    //   name: "reqdate",
    //   displayName: "Boxing ID",
    //   type: "string",
    // },
    {
      name: "applicationNumber",
      displayName: "Bottling Plan Id",
      type: "string",
    },
    {
      name: "brandName",
      displayName: "Brand Name",
      type: "string",
    },
    {
      name: "numberOfCases",
      displayName: "No. of Cases",
      type: "string",
    },
    {
      name: "numberOfBottles",
      displayName: "No of Bottles",
      type: "string",
    },
    {
      name: "scanStatus",
      displayName: "Status",
      type: "options",
      badgeColors: {
        SUMITTED: "badge-success",
        APPROVED: "badge-primary",
        REJECTED: "badge-danger",
        PENDING: "badge-warning",
        INITIATE: "badge-success",
        PRINT_COMPLETED: "badge-success",
      },
    },
  ];

  constructor(
    private router: Router,
    private distilleryserv: DistileryService,
    private workflowService: WorkflowcofigService
  ) { }

  ngOnInit() {
    this.getboxingbottlinglist();
    this.getworkflow();
  }

  getworkflow(){
    this.workflowService.getworkflowbydesignation('DISTILLERY','Boxing Process').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/bottleboxing/view/' + event.id]);
  }
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/bottleboxing/edit/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getboxingbottlinglist(pageNo, pageSize);
  }

  getboxingbottlinglist(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      "orderBy": "asc",
      "page": pageNo,
      "pageSize": paginationSize,
      "searchInput": this.boxingObj.search,
      "sortBy": "createdDate"
    };
    this.distilleryserv.searchBoxing(searchobj).subscribe((resp: any) => {
      this.boxingbottlinglist = resp.content.content;
      if (resp.responseCode === 200) {
        this.totalCount = resp.content.totalElements;
        this.dataSource.data = resp.content.content;
      }
    });
  }

  resetKey() {
    this.boxingObj.search = '';
    this.getboxingbottlinglist();
  }

  searchBoxingProcess() {
    this.getboxingbottlinglist();
  }

  // getPdfData1(type: any) {
  //   let url, downloadType, title;
  //   const postData = {
  //     filters: {},
  //     pageNo: 0,
  //     paginationSize: 5
  //   };
  //   if (type == 'downloadPdf') {
  //     downloadType = 'application/pdf';
  //     title = 'indentRequest.pdf';
  //   }
  //   if (type == 'downloadExcel') {
  //     downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  //     title = 'indentRequest.xlsx';
  //   }
  //   if (type == 'downloadCsv') {
  //     downloadType = 'application/csv';
  //     title = 'indentRequest.csv';
  //   }
  //   this.exportFile(downloadType, title);
  //   return true;
  // }

  exportFile(downloadType, title) {
    // this.indentreq.getDownload().subscribe((responceData: any) => {
    //   const newBlob = new Blob([responceData], { type: downloadType });
    //   if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    //     window.navigator.msSaveOrOpenBlob(newBlob);
    //     return;
    //   }
    //   const data = window.URL.createObjectURL(newBlob);
    //   const link = document.createElement('a');
    //   link.href = data;
    //   link.download = title
    //   link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    //   return true;

    // })
  }

}
