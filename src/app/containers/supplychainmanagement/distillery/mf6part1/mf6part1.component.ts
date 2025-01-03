import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DistileryService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mf6part1',
  templateUrl: './mf6part1.component.html',
  styleUrls: ['./mf6part1.component.scss']
})
export class Mf6part1Component implements OnInit {

  pageNo = 0;
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "INITIATED",
    },
  };
  public actionKeys = ['edit', 'view'];
  // public actionKeys;
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource();
  public columns = [
    {
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    {
      name: 'date',
      displayName: 'Date',
      type: 'date',
      dateFormat: 'dd-MMM-yyyy'
    },
    {
      name: 'gatePassNo',
      displayName: 'Gate Pass No',
      type: 'string'
    },
    {
      name: 'sugarmillName',
      displayName: 'Name Of the Sugar Mill',
      type: 'string'
    },
    {
      name: 'quantity',
      displayName: 'Quantity(Qtl)',
      type: 'string',
    },
    {
      name: 'quantityIssued',
      displayName: 'Quantity Issued(Qtl)',
      type: 'string'
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
  mf6Obj: any = {
    date: '',
    gatepassno: ''
  };

  constructor(
    private distileryService: DistileryService,
    private router: Router
  ) { }

  ngOnInit() {
    const loginuser = localStorage.getItem('EntityType');
    this.entityType = loginuser;
    this.getmf6partonelist();
  }

  getmf6partonelist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const payload = {
      filters: {
        date: this.mf6Obj.date ? this.mf6Obj.date : null,
        gatePassNo: this.mf6Obj.gatepassno ? this.mf6Obj.gatepassno : null,
      },
      pageNo,
      paginationSize
    };
    this.distileryService.searchMF6Partone(payload)
      .subscribe((responceData: any) => {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
      });
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/supplychainmanagement/distillery/mf6-part-one/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/supplychainmanagement/distillery/mf6-part-one/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getmf6partonelist(pageNo, pageSize);
  }

  searchConData() {
    this.getmf6partonelist();
  }

  resetKey() {
    this.mf6Obj = {
      date: '',
      gatePassNo: '',
    };
    this.getmf6partonelist();
  }

}
