import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionConfig } from '@app/config/retail/transaction-config';
import { Transaction } from '@app/models/retails';
import { TransactionList } from '@app/services/retails/transactionlist.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.scss']
})
export class TransactionlistComponent implements OnInit {
  countryData: any;
  countryObj: any = {};
  workFlowList: any;
  pageNo = 0;
  public actionKeys = ['view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = TransactionConfig.titleSection.list;
  public breadcrumbs = TransactionConfig.breadcrumbs;
  public columns = TransactionConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Transaction>();

  constructor(public service: TransactionList, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/transactionlist/transactiondetails']);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getData();
  }
  
  getData() {
    this.service.get().subscribe((resp) => {
      this.workFlowList = resp;
      console.log(this.workFlowList);
      this.dataSource.data = resp as Transaction[];

    });
  }
}
