import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DistileryService, WorkflowcofigService, PreviewService } from '@app/services';

@Component({
  selector: 'app-bottlingprocess',
  templateUrl: './bottlingprocess.component.html',
  styleUrls: ['./bottlingprocess.component.scss']
})
export class BottlingprocessComponent implements OnInit {
  
  public actionBtnBasedOnCond = {
    edit: {
      column: 'status',
      condition: 'DRAFT',
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
      name: "requestDate",
      displayName: "Date",
      type: "date",
      dateFormat: "dd-MMM-yyyy",
    },
    {
      name: "planNumber",
      displayName: "Plan No",
      type: "string",
    },
    {
      name: "brandName",
      displayName: "Brand Name",
      type: "string",
    },
    {
      name: "fromtankName",
      displayName: "Planned Bottles",
      type: "string",
    },
    {
      name: "transQty",
      displayName: "Bottled BL",
      type: "string",
    },
    {
      name: "wastageQuantityBL",
      displayName: "Wastage of Bottling BL",
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

  workflowobj:any;
  bottlingObj: any = {};
  bottlingData: any;

  constructor(private router: Router,
     private workflowService: WorkflowcofigService,
     private distService: DistileryService,
     private preview: PreviewService
     ) { }

  ngOnInit() {
    this.preview.setData = '';
    this.getlistdata();
  }

  getworkflow(){
    this.workflowService.getworkflowbydesignation('DISTILLERY','DISTILLERY_BOTTLING_PROCESS').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/bottlingprocess/view', event.id]);
  }
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/bottlingprocess/edit', event.id]);
  }

  getlistdata(pageNo = 0, pageSize = 5){
    const paginationSize = pageSize;
    const payload = {
      "orderBy": "asc",
      "page": pageNo,
      "pageSize": paginationSize,
      "searchInput": this.bottlingObj.search,
      "sortBy": "createdDate"
    };
    this.distService.searchBottlingProcess(payload).subscribe((resp: any) => {
      this.bottlingData = resp.content.content;
      if (resp.responseCode === 200) {
        this.totalCount = resp.content.totalElements;
        this.dataSource.data = resp.content.content;
      }
    });
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getlistdata(pageNo, pageSize);
  }

  searchBottlingProcess() {
    this.getlistdata();
  }

  clearData() {
    this.bottlingObj.search = '';
    this.getlistdata();
  }
}
