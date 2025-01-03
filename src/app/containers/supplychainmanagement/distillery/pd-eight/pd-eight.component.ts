import { Component, OnInit } from '@angular/core';
import { Pd8aWashdetailService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pd-eight',
  templateUrl: './pd-eight.component.html',
  styleUrls: ['./pd-eight.component.scss']
})
export class PdEightComponent implements OnInit {
  pd8aObj: any = {
    date: '',
  }
  entity_type: any;
  pageNo = 0;
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "INITIATED",
    },
  };
  // public actionKeys = ['edit', 'view'];
  public actionKeys;
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
      name: 'date',
      displayName: 'Date',
      type: 'date',
      dateFormat: 'dd-MMM-yyyy'
    },
    // {
    //   name: 'particular',
    //   displayName: 'Particulars',
    //   type: 'string',

    // },
    // {
    //   name: 'washInLtr',
    //   displayName: 'Wash In Ltrs',
    //   type: 'string'
    // },
    // {
    //   name: 'molassesWeight',
    //   displayName: 'Weight of Molasses(Qtl)',
    //   type: 'string'
    // },
    // {
    //   name: 'finalGravity',
    //   displayName: 'Final Gravity',
    //   type: 'string',
    // },
    {
      name: 'distilledWashQty',
      displayName: 'Distilled Wash Qty(Qtl)',
      type: 'string',
    },
    {
      name: 'distilledDryDip',
      displayName: 'Dry Dip (cms)',
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
        'INITIATED': 'badge-warning'
      },

    }


  ];
  indentrequestData: any;

  constructor(public router: Router, private pd8aservice: Pd8aWashdetailService) { }


  ngOnInit() {

    let loginuser = localStorage.getItem('EntityType');
    this.entity_type = loginuser;
    if (loginuser == 'DISTILLERY') {
      this.actionKeys = ['edit', 'view']
    } else {
      this.actionKeys = ['view']
    }
    this.getpd8alist();


  }

  getpd8alist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    let payload = {
      filters: {
        date: this.pd8aObj.date ? this.pd8aObj.date : null,
        // particular: this.pd8aObj.particular ? this.pd8aObj.particular : null
      },
      pageNo,
      paginationSize

    }
    this.pd8aservice.searchPd8Awashdetail(payload)
      .subscribe((responceData: any) => {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
      });
  }


  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/supplychainmanagement/distillery/pd-8/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/supplychainmanagement/distillery/pd-8/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getpd8alist(pageNo, pageSize);
  }

  searchConData() {
    this.getpd8alist();
  }



  resetKey() {
    this.pd8aObj = {
      date: '',
      particular: '',
    };
    this.getpd8alist();
  }
}



