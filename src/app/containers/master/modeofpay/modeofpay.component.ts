import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeOfPaymentService } from '@app/services';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { ModeOfPayConfig } from '@app/config/table-config/modeofpay-config';
import { ModeOfPay } from '@app/models/master';

@Component({
  selector: 'app-modeofpay',
  templateUrl: './modeofpay.component.html',
  styleUrls: ['./modeofpay.component.css']
})
export class ModeofpayComponent implements OnInit {
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = ModeOfPayConfig.titleSection.list;
  public breadcrumbs = ModeOfPayConfig.breadcrumbs;
  public columns = ModeOfPayConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<ModeOfPay>();
  modeofpayList: any;
  selected: any;
  dateselected: any = moment().format('LLLL');
  modeOfPayObj: any = {
    code: '',
    name: '',
    isActive: true
  };
  constructor(
    private router: Router,
    private Paymentservice: ModeOfPaymentService) { }

  ngOnInit() {
    this.getModeofpay();
  }
  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/modeofpay/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/modeofpay/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getModeofpay(pageNo, pageSize);
  }
  getModeofpay(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const objtest = {
      filters: {
        code: this.modeOfPayObj.code ? this.modeOfPayObj.code : null,
        name: this.modeOfPayObj.name ? this.modeOfPayObj.name : null,
        isActive: this.modeOfPayObj.isActive ? JSON.parse(this.modeOfPayObj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.Paymentservice.searchPayment(objtest).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents as ModeOfPay[];
    });
  }
  searchModeOfPayment() {
    this.getModeofpay();
  }
  resetKey() {
    this.modeOfPayObj = {
      code: '',
      name: '',
      isActive: true
    };
    this.getModeofpay();
  }

}
