import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DistileryService,PreviewService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otproductionplan',
  templateUrl: './otproductionplan.component.html',
  styleUrls: ['./otproductionplan.component.scss']
})
export class OtproductionplanComponent implements OnInit {

  pageNo = 0;
  public actionBtnBasedOnCond = {
    edit: {
      column: 'active',
      condition: false,
    },
  };
  public actionKeys = ['edit', 'view'];
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
      name: 'otNumber',
      displayName: 'OT Number',
      type: 'string'
    },
    {
      name: 'planDate',
      displayName: 'Date',
      type: 'date',
      dateFormat:'dd-MMM-yyyy'
    },
    {
      name: 'preFermenterCount',
      displayName: 'No of Pre-Fermenter Require',
      type: 'string'
    },
    {
      name: 'fermenterCount',
      displayName: 'No of Fermenter Require',
      type: 'string'
    },
    {
      name: 'receiverCount',
      displayName: 'No of Receiver Require',
      type: 'string',
    },
    {
      name: 'status',
      displayName: 'Status',
      type: 'options',
      badgeColors: {
        Active: 'badge-success',
        APPROVED: 'badge-primary',
        REJECTED: 'badge-danger',
        InActive:'badge-warning'
      }
    }
  ];
  otProdsearchForm: any;
  entityType: any;
  otProdsearchObj = {
    planDate: '',
    otNumber: ''
  };

  constructor(
    private router: Router,
    private distileryService: DistileryService,
    private preview: PreviewService
  ) { }

  ngOnInit() {
    const loginuser = localStorage.getItem('EntityType');
    this.entityType = loginuser;
    this.preview.setData = '';
    this.getotProductionlist();

  }

  getotProductionlist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const { planDate = null, otNumber = null } = this.otProdsearchObj;
    const payload = {
      filters: {
        planDate,
        otNumber
      },
      pageNo,
      paginationSize
    };
    this.distileryService.searchotProddata(payload)
      .subscribe((responceData: any) => {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
      });
  }


  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/supplychainmanagement/distillery/otproductionplan/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/supplychainmanagement/distillery/otproductionplan/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getotProductionlist(pageNo, pageSize);
  }

  searchConData() {
    this.getotProductionlist();
  }

  cleardata(){
    this.otProdsearchObj = {
      planDate: '',
      otNumber: ''
    };
    this.getotProductionlist();
  }

}
