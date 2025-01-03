import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pd8Service } from '@app/services';
import { Router } from '@angular/router';
import { Pd8 } from "@app/models/industial-distillery";

@Component({
  selector: 'app-pd8-form',
  templateUrl: './pd8-form.component.html',
  styleUrls: ['./pd8-form.component.scss']
})
export class Pd8FormComponent implements OnInit {

  pageNo = 0;
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "INITIATED",
    },
  };
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<Pd8>();
  public columns = [
    {
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    {
      name: 'from',
      displayName: 'From Date',
      type: 'date',
      dateFormat:'dd-MMM-yyyy hh:mm a'
    },
    {
      name: 'to',
      displayName: 'To Date',
      type: 'date',
      dateFormat:'dd-MMM-yyyy hh:mm a'
    },
    {
      name: 'molassesUsed',
      displayName: 'Molasses Used in Qlts Time',
      type: 'string'
    },
    {
      name: 'washPrepared',
      displayName: 'Qty of Wash Prepared Ltrs',
      type: 'string'
    },
    {
      name: 'washDistillery',
      displayName: 'Qty of Wash Distillery Ltrs',
      type: 'string',
    },
    {
      name: "status",
      displayName: "Status",
      type: 'options',
      badgeColors: {
        'SUMITTED': 'badge-success',
        'APPROVED': 'badge-primary',
        'REJECTED': 'badge-danger',
        'INITIATED':'badge-warning'
      },

    }


  ];

  pd8searchForm: any;
  entity_type:any;

  pd8searchObj = {
    from: '',
    to: ''
  };
  constructor(
    private router: Router,
    private pd8service: Pd8Service
  ) { }
  ngOnInit() {
    let loginuser = localStorage.getItem('EntityType');
    this.entity_type = loginuser;
    this.getpd8list()

  }
  getpd8list(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    let payload = {
      filters: {
        from: this.pd8searchObj.from ? this.pd8searchObj.from : null,
        to: this.pd8searchObj.to ? this.pd8searchObj.to : null
      },
      pageNo,
      paginationSize

    }
    this.pd8service.searchpd8data(payload)
      .subscribe((responceData: any) => {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
      });
  }


  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/supplychainmanagement/distillery/pd8-form/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/supplychainmanagement/distillery/pd8-form/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getpd8list(pageNo, pageSize);
  }

  searchConData() {
    this.getpd8list();
  }
}
