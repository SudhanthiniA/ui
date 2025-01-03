import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { PreviewService, DistileryService, WorkflowcofigService } from '@app/services';

@Component({
  selector: 'app-tanktransfer',
  templateUrl: './tanktransfer.component.html',
  styleUrls: ['./tanktransfer.component.scss']
})
export class TanktransferComponent implements OnInit,OnDestroy {

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
  public dataSource2 = new MatTableDataSource();

  public columns2 = [
    {
      name: "id",
      displayName: "#",
      type: "number",
    },
    {
      name: "applicationNumber",
      displayName: "Request Number",
      type: "string",
    },
    {
      name: 'requestDate',
      displayName: 'Request Date',
      displayFcn: (item: any) => item.requestDate.join('-'),
      type: 'date',
      dateFormat: "dd-MMM-yyyy",
  },
   
    {
      name: "fromTankName",
      displayName: "From Tank Name",
      type: "string",
    },
    {
      name: "toTankAvailableCapacity",
      displayName: "Transfer Quantity(Qtl)",
      type: "string",
    },
    {
      name: "toTankName",
      displayName: "To Tank Name",
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

  tanks: any;
  tankconverstionList: any;
  selected: any;
  dateselected: any = moment().format('LLLL');
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  
  tankConObj = {
    reqDate: '',
    application_id: '',
    tank_id: '',
    total_capacity: '',
  };
  tankConversionForm: any;
  workflowobj:any;
  // totalCount:any;
  // dataSource:any;

  constructor(
    private router: Router,
    private preview: PreviewService,
    private distilleryserv : DistileryService,
    private workflowService: WorkflowcofigService,
  ) { }

  ngOnInit() {
    this.getworkflow();
    this.preview.setData = '';
    this.getlistdata()
  }

  getworkflow(){
    this.workflowService.getworkflowbydesignation('DISTILLERY','DISTILLERY_TANK_TRANSFER').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tanktransfer/view', event.id]);
  }
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tanktransfer/edit', event.id]);
  }

  getlistdata(page = 0, pageSize = 5){
    // const paginationSize = pageSize;
    // const payload = {
    //   filters: {
    //     reqDate: this.tankConObj.reqDate
    //       ? this.tankConObj.reqDate
    //       : null,
    //   },
    //   pageNo,
    //   paginationSize,
    // };
    const payload={
      // orderBy: "asc",
      page,
      pageSize,
      searchInput:this.tankConObj.reqDate,
      // sortBy: "createdDate"
    }
   this.distilleryserv.searchTankTransfer(payload).subscribe((res:any)=>{
     if(res.content){
      this.totalCount = res.content.totalElements;
      this.dataSource2.data = res.content.content;
     }
   })
  }

  handlePagination2(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getlistdata(pageNo, pageSize);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  searchTankTransfer() {
    this.getlistdata();
  }

  

}
