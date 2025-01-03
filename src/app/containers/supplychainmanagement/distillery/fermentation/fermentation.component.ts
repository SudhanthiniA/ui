import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DistileryService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fermentation',
  templateUrl: './fermentation.component.html',
  styleUrls: ['./fermentation.component.scss']
})
export class FermentationComponent implements OnInit {

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
      name: 'fermenterCount',
      displayName: 'Fermetor Reference No',
      type: 'string',
    },
    {
      name: 'brothQtyRec',
      displayName: 'Broth Quantity Received',
      type: 'string'
    },
    {
      name: 'molassesQty',
      displayName: 'Molasses Qty',
      type: 'string'
    },

    {
      name: 'finalWashQty',
      displayName: 'Final Wash Quantity',
      type: 'string',
    },
    {
      name: "status",
      displayName: "Status",
      type: 'options',
      badgeColors: {
        'SUBMITTED': 'badge-success',
        'APPROVED': 'badge-primary',
        'REJECTED': 'badge-danger',
        'false': 'badge-warning'
      },
    }
  ];

  constructor(
    private router: Router,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.getotProductionlist();
  }

  getotProductionlist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const payload = {
      filters: {},
      pageNo,
      paginationSize
    };
    this.distileryService.getlist(payload)
      .subscribe((responceData: any) => {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
      });
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/fermentation/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/fermentation/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getotProductionlist(pageNo, pageSize);
  }

}
