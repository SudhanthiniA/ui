import { Component, OnInit } from '@angular/core';
import { DistileryService, PreviewService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';


@Component({
  selector: 'app-allotmentrequest',
  templateUrl: './allotmentrequest.component.html',
  styleUrls: ['./allotmentrequest.component.scss'],
})
export class AllotmentrequestComponent implements OnInit {

  workflowobj:any;

  allotmentObj: any = {
    requestedDate: '',
    validityDate: '',
    allotmentNumber: '',
  };

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
      name: "requestedDate",
      displayName: "Request Date",
      type: "date",
      dateFormat: "dd-MMM-yyyy hh:mm a",
    },
    {
      name: "allotmentNumber",
      displayName: "Allotment Number",
      type: "string",
    },
    // {
    //   name: "validityDate",
    //   displayName: "Validity",
    //   type: "date",
    //   dateFormat: "dd-MMM-yyyy",
    // },

    {
      name: "entity",
      displayName: "Requester Name",
      type: "string",
    },
    {
      name: "totalQuantity",
      displayName: "Quantity",
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

  public entityType: any;

  constructor(
    private router: Router,
    private preview: PreviewService,
    private distileryService: DistileryService,
    private wrokflowconfig: WorkflowcofigService

  ) { }

  ngOnInit() {
    this.getworkflow();
    const loginuser = localStorage.getItem('EntityType');
    this.entityType = loginuser;
    this.getallotmentlist();
    this.preview.setData = '';
  }

  getallotmentlist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const payload = {
      filters: {
        requestedDate: this.allotmentObj.requestedDate
          ? this.allotmentObj.requestedDate
          : null,
        validityDate: this.allotmentObj.validityDate
          ? this.allotmentObj.validityDate
          : null,
        allotmentNumber: this.allotmentObj.allotmentNumber
          ? this.allotmentObj.allotmentNumber
          : null,
      },
      pageNo,
      paginationSize,
    };
    this.distileryService
      .searchAllotment(payload)
      .subscribe((responceData: any) => {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
      });
  }
  getworkflow(){
    this.wrokflowconfig.getworkflowbydesignation('DISTILLERY','Allotment Request').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }
  onEdit(event) {
    this.router.navigate([
      '/supplychainmanagement/distillery/allotmentrequest/edit/' + event.id,
    ]);
  }

  onView(event) {
    this.router.navigate([
      '/supplychainmanagement/distillery/allotmentrequest/view/' + event.id,
    ]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getallotmentlist(pageNo, pageSize);
  }

  searchConData() {
    this.getallotmentlist();
  }

  resetKey() {
    this.allotmentObj = {
      date: '',
      validity: '',
    };
    this.getallotmentlist();
  }
}
