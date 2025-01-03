import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DistileryService, WorkflowcofigService, PreviewService } from '@app/services';

@Component({
  selector: 'app-mstistofspirit',
  templateUrl: './mstistofspirit.component.html',
  styleUrls: ['./mstistofspirit.component.scss']
})
export class MstistofspiritComponent implements OnInit {

  pageNo = 0;
  public actionBtnBasedOnCond = {
    edit: {
      column: 'status',
      condition: 'DRAFT',
    },
  };
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
      name: "inspectionDate",
      displayName: "Inspection Date",
      type: "date",
      dateFormat: "dd-MM-yyyy",
    },
    {
      name: "inspectionType",
      displayName: "Inspection Type",
      type: "string",
    },
    {
      name: "TankName",
      displayName: "Tank Name",
      type: "string",
    },
    {
      name: "wetDip",
      displayName: "Wet Dip",
      type: "string",
    },
    {
      name: "closingBalanceBL",
      displayName: "Receipt Balance(BL)",
      type: "string",
    },
    {
      name: "status",
      displayName: "Status",
      type: "options",
      badgeColors: {
        SUMITTED: "badge-success",
        APPROVED: "badge-primary",
        REJECTED: "badge-danger",
        DRAFT: "badge-warning",
      },
    },
  ];

  mstObj: any = {};
  workflowobj:any;
  mstData: any;
  
  constructor(
    private router: Router,
    private distilleryserv : DistileryService,
    private workflowService: WorkflowcofigService,
    private preview: PreviewService
  ) { }

  ngOnInit() {
    this.preview.setData = '';
    this.getworkflow();
    this.getlistdata();
  }

  getworkflow(){
    this.workflowService.getworkflowbydesignation('DISTILLERY','DISTILLERY_TANK_INSPECTION_MST_IST').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/mstistofspirit/view', event.id]);
  }
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/mstistofspirit/edit', event.id]);
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
      "searchInput": this.mstObj.search,
      "sortBy": "createdDate"
    };
    this.distilleryserv.searchTankInsp(searchobj).subscribe((resp: any) => {
      this.mstData = resp.content.content;
      if (resp.responseCode === 200) {
        this.totalCount = resp.content.totalElements;
        this.dataSource.data = resp.content.content;
      }
    });
  }

  searchData() {
    this.getlistdata();
  }

  clearData() {
    this.mstObj.search = '';
    this.getlistdata();
  }

}
