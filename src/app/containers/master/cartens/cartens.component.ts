import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { CartensConfig } from '@app/config/cartens-config';
import { Cartens } from '@app/models/master';
import { CartonService } from '@app/services';

@Component({
  selector: 'app-cartens',
  templateUrl: './cartens.component.html',
  styleUrls: ['./cartens.component.css']
})
export class CartensComponent implements OnInit {

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = CartensConfig.titleSection.list;
  public breadcrumbs = CartensConfig.breadcrumbs;
  public columns = CartensConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Cartens>();
  cartonsList: any;
  cartonsObj: any = {
    code: '',
    details: '',
    active: true
  };
  constructor(
    private cartonService: CartonService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getcartonsList();
  }

  onEdit(event) {
    this.router.navigate([ '/master/cartons/edit/' + event.id ]);
  }

  onView(event) {
    this.router.navigate([ '/master/cartons/view/' + event.id ]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getcartonsList(pageNo, pageSize);
  }

  getcartonsList(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        code: this.cartonsObj.code ? this.cartonsObj.code : null,
        details: this.cartonsObj.details ? this.cartonsObj.details : null,
        isActive: this.cartonsObj.active ? JSON.parse(this.cartonsObj.active) : null,
      },
      pageNo,
      paginationSize
    };
    this.cartonService.searchCarton( searchObj).subscribe((responceData: any) => {
      this.cartonsList = responceData.data.contents;
      if ( responceData.errorCode === 200 ) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as Cartens[];
      }
    });
  }
  searchCartons() {
   this.getcartonsList();
  }

  resetKey() {
    this.cartonsObj = {
      code: '',
      details: '',
      active: true,
    };
    this.getcartonsList();
  }
}
