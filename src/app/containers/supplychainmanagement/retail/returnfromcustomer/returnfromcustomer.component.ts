import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReturnFromCustomerConfig } from '@app/config/retail/returnfromcustomer-config';
import { ReturnFromCustomer } from '@app/models/retails';
import { ReturnFromCustomerService } from '@app/services/retails/returnFromCustomer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-returnfromcustomer',
  templateUrl: './returnfromcustomer.component.html',
  styleUrls: ['./returnfromcustomer.component.scss']
})
export class ReturnfromcustomerComponent implements OnInit {
  returnfromCustomerObj: any = {};
  returnfromCustomerData: any;
  pageNo = 0;
  public actionKeys = ['view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = ReturnFromCustomerConfig.titleSection.list;
  public breadcrumbs = ReturnFromCustomerConfig.breadcrumbs;
  public columns = ReturnFromCustomerConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<ReturnFromCustomer>();

  constructor(
    private service: ReturnFromCustomerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getReturnFromCustomer();
  }
  onView() {
    this.router.navigate(['/supplychainmanagement/retail/returnfromcustomer/view']);
  }
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    this.getReturnFromCustomer();
  }

  getReturnFromCustomer() {
    this.service.get().subscribe((responceData: any) => {
      this.returnfromCustomerData = responceData;
      console.log(responceData);
      this.dataSource.data = responceData as ReturnFromCustomer[];
    });
  }

}
