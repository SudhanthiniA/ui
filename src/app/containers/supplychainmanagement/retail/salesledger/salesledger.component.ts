import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SalesLedgerConfig } from '@app/config/retail/salesledger-config';
import { SalesLedger } from '@app/models/retails';
import { Router } from '@angular/router';
import { SalesLedgerService } from '@app/services/retails/salesLedger.service';

@Component({
  selector: 'app-salesledger',
  templateUrl: './salesledger.component.html',
  styleUrls: ['./salesledger.component.css']
})
export class SalesledgerComponent implements OnInit {
  salesData: any;
  salesObj: any = {};
  pageNo = 0;
  public actionKeys = ['view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = SalesLedgerConfig.titleSection.list;
  public breadcrumbs = SalesLedgerConfig.breadcrumbs;
  public columns = SalesLedgerConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<SalesLedger>();

  constructor(private service: SalesLedgerService, private router: Router) { }

  ngOnInit() {
    this.getSalesLedger();
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/salesledger/view/' + event.id]);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/retail/salesledger/edit/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getSalesLedger();
  }

  getSalesLedger() {
    this.service.get().subscribe((resp: any) => {
      this.salesData = resp;
      console.log(this.salesData);
      this.dataSource.data = resp as SalesLedger[];
    });
  }

}
