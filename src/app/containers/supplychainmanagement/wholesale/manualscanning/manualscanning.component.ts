import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DistileryService, WorkflowcofigService } from '@app/services';
@Component({
  selector: 'app-manualscanning',
  templateUrl: './manualscanning.component.html',
  styleUrls: ['./manualscanning.component.scss']
})
export class ManualscanningComponent implements OnInit {

  public actionBtnBasedOnCond = {
    edit: {
      column: 'scanStatus',
      condition: 'PENDING'||'SCAN_INPROGRESS',
    },
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
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
      name: "printEndDatetime",
      displayName: "Date",
      type: "date",
      dateFormat: "dd-MM-yyyy",
    },
    {
      name: "applicationNumber",
      displayName: "Bottling Plan ID",
      type: "string",
    },
  
    {
      name: "brandName",
      displayName: "Brand Name",
      type: "string",
    },
    {
      name: "numberOfCases",
      displayName: "No of Cases",
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
        DRAFT: "badge-warning",
        PENDING: "badge-warning",
        PRINT_COMPLETED: "badge-success",
      },
    },
  ];

  manualscanObj: any = {};
  workflowobj:any;
  blendData: any;

  constructor(
    private router: Router,
    private workflowService: WorkflowcofigService,
    private distService: DistileryService
  ) { }

  ngOnInit() {
    this.getworkflow();
    this.getlistdata();
  }

  getworkflow(){
    this.workflowService.getworkflowbydesignation('DISTILLERY','Manual Scaning').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/manualscanning/view', event.id]);
  }
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/manualscanning/edit', event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getlistdata(pageNo, pageSize);
  }

  getlistdata(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      "orderBy": "asc",
      "page": pageNo,
      "pageSize": paginationSize,
      "searchInput": this.manualscanObj.search,
      "sortBy": "createdDate"
    };
    this.distService.searchManualScan(searchobj).subscribe((resp: any) => {
      // this.blendData = resp.content.content;
      if (resp.responseCode === 200) {
        this.totalCount = resp.content?resp.content.totalElements:0;
        this.dataSource.data = resp.content?resp.content.content:[];
      }
    });
  }

  searchData() {
    this.getlistdata();
  }

  clearData() {
    this.manualscanObj.search = '';
    this.getlistdata();
  }


}
