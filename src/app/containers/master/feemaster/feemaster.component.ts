import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FeeMasterConfig } from '@app/config/feemaster-config';
import { FeeMasterService } from '@app/services';
import { Location } from "@app/models/master";

@Component({
  selector: 'app-feemaster',
  templateUrl: './feemaster.component.html',
  styleUrls: ['./feemaster.component.scss']
})
export class FeemasterComponent implements OnInit{

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = FeeMasterConfig.titleSection.list;
  public breadcrumbs = FeeMasterConfig.breadcrumbs;
  public columns = FeeMasterConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Location>();
  feeslist: any;
  selected: any;
  //dateselected: any = moment().format('LLLL');
  feeObj: any = {
    name: '',
    code: '',
    active: true
  };

  constructor(
    private router: Router,
    private feeService: FeeMasterService
  ) { }

  ngOnInit() {
    this.getFee();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate([ '/master/feemaster/edit/' + event.id ]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate([ '/master/feemaster/view/' + event.id ]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getFee(pageNo, pageSize);
  }

  getFee(pageNo = 0, pageSize = 5) {
    const searchobj = {
      filters: {
        code: this.feeObj.code ? this.feeObj.code : null,
        name: this.feeObj.name ? this.feeObj.name : null,
        isActive: this.feeObj.active ? JSON.parse(this.feeObj.active) : null,
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.feeService.searchFee(searchobj).subscribe((resp: any) => {
      this.feeslist = resp.data;
      if ( resp.errorCode === 200 ) {
        this.totalCount = resp.data.totalElements;
        this.dataSource.data = resp.data.contents;
      }
    });
  }

  searchFee(){
    this.getFee();
  }

  resetKey() {
    this.feeObj = {
      code: '',
      name: '',
      active: true,
    };
    this.getFee();
  }
}
