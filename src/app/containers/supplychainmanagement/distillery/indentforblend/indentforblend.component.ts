import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DistileryService, WorkflowcofigService, PreviewService } from '@app/services';

@Component({
  selector: 'app-indentforblend',
  templateUrl: './indentforblend.component.html',
  styleUrls: ['./indentforblend.component.scss']
})
export class IndentforblendComponent implements OnInit {

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
      name: "applicationNumber",
      displayName: "Indent No",
      type: "string",
    },
    {
      name: "requestDate",
      displayName: "Date",
      type: "string",
      // dateFormat: "dd-MMM-yyyy",
    },
    {
      name: "fromLicenseType",
      displayName: "License Type",
      type: "string",
    },
    {
      name: "consignee",
      displayName: "Consignee",
      type: "string",
    },
    {
      name: "brandValue",
      displayName: "Brand Name",
      type: "string",
    },
    {
      name: "quantityOfBlend",
      displayName: "Blend Quantity( BL)",
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

  blendObj: any = {};
  workflowobj:any;
  blendData: any;

  constructor(
    private router: Router,
    private workflowService: WorkflowcofigService,
    private distService: DistileryService,
    private preview: PreviewService
  ) { }

  ngOnInit() {
    this.preview.setData = '';
    this.getworkflow();
    this.getlistdata();
  }

  getworkflow(){
    this.workflowService.getworkflowbydesignation('DISTILLERY','DISTILLERY_INDENT_FOR_BLEND').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/indentforblend/view', event.id]);
  }
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/indentforblend/edit', event.id]);
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
      "searchInput": this.blendObj.search,
      "sortBy": "createdDate"
    };
    this.distService.searchIndentBlend(searchobj).subscribe((resp: any) => {
      this.blendData = resp.content.content;
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
    this.blendObj.search = '';
    this.getlistdata();
  }

}
