import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DistileryService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mf4-receivedbydistillery',
  templateUrl: './mf4-receivedbydistillery.component.html',
  styleUrls: ['./mf4-receivedbydistillery.component.css']
})
export class Mf4ReceivedbydistilleryComponent implements OnInit {

  pageNo = 0;
  public actionBtnBasedOnCond = {
    edit: {
      column: 'status',
      condition: 'INITIATED',
    },
  };
  public actionKeys = ['edit', 'view'];
  // public actionKeys;
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<Location>();
  public columns = [
    {
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    {
      name: 'inspectionDate',
      displayName: 'Inspection Date',
      type: 'date',
      dateFormat: 'dd-MMM-yyyy'
    },
    {
      name: 'nameOfInspector',
      displayName: 'Inspector Name',
      type: 'string',
    },
    {
      name: 'gatePassNumber',
      displayName: 'Gate Pass No',
      type: 'string'
    },
    {
      name: 'netReceivedMolasses',
      displayName: 'Total Molassis',
      type: 'string'
    },
    {
      name: 'receivedTare',
      displayName: 'Received Tare',
      type: 'string',
    },
    {
      name: 'status',
      displayName: 'Status',
      type: 'options',
      badgeColors: {
        SUMITTED: 'badge-success',
        APPROVED: 'badge-primary',
        REJECTED: 'badge-danger',
        INITIATED: 'badge-warning'
      },
    }
  ];
  entityType: any;
  mf4distilleryobj: any = {
    inspectionDate: '',
    gatePassNumber: ''
  }

  constructor(
    private distileryService: DistileryService,
    private router: Router
  ) { }

  ngOnInit() {
    const loginuser = localStorage.getItem('EntityType');
    this.entityType = loginuser;
    this.getMf4recivedbylist();
  }

  getMf4recivedbylist(pageNo = 0, pageSize = 5) {
    const { inspectionDate = null, gatePassNumber = null } = this.mf4distilleryobj;
    const paginationSize = pageSize;
    const payload = {
      filters: {
        inspectionDate,
        gatePassNumber,
      },
      pageNo,
      paginationSize
    };
    this.distileryService.searchapi(payload)
      .subscribe((responceData: any) => {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
      });
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/supplychainmanagement/distillery/mf4-receivedbydistillery/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/supplychainmanagement/distillery/mf4-receivedbydistillery/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getMf4recivedbylist(pageNo, pageSize);
  }

  searchConData() {
    this.getMf4recivedbylist();
  }

  resetKey() {
    this.mf4distilleryobj = {
      inspectionDate: '',
      gatePassNumber: ''
    };
    this.getMf4recivedbylist();
  }

}
