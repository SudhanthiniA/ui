import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { WarehouseFinancialChallanaDepositService } from '@app/services/ware-house/warehouse-financialChallana-deposit.service';
import { WareHouseBwfl6list } from '@app/models/warehouse';

@Component({
  selector: 'app-financialchallandeposit',
  templateUrl: './financialchallandeposit.component.html',
  styleUrls: ['./financialchallandeposit.component.scss']
})
export class FinancialchallandepositComponent implements OnInit {

  data: any;
  fChalanaDepositData: any;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<WareHouseBwfl6list>();
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  page: number;
  limit: any;
  fChalanaDepositObj = {
    challanNumber: '',
    headCode: '',
    challanDate: '',
  };
  dateselected: any = moment().format('LLLL');

  // picklist data

  devesionData: any;
  constructor(
    private router: Router,
    private WarehousefinancialchallanadepositService: WarehouseFinancialChallanaDepositService,
  ) { }

  ngOnInit() {
    this.getAllChallanaDepo();
    this.searchChallanaDepo();
  }

  handlePagination(event) {
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    //this.getAllBwfl6(pageNo, pageSize);
  }

  getAllChallanaDepo() {
    this.WarehousefinancialchallanadepositService.getListChallanaDeposit().subscribe((Response: any) => {
      if (Response.status == 's') {
        this.fChalanaDepositData = Response.data;
        this.refreshTabIns();
      }
    })
  }
  clearData() {
    this.fChalanaDepositData.challanNumber = '';
    this.fChalanaDepositData.brandname = '';
  }

  refreshTabIns() {
    if (this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    } else {
      this.dtTrigger.next();
    }
    return true;
  }
  // get devision
  getDevesion() {
    this.fChalanaDepositData.getAllTreasury()
      .subscribe((resp: any) => {
        this.devesionData = resp.data;
      });
  }

  // search Data
  searchChallanaDepo(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        challanNumber: this.fChalanaDepositObj.challanNumber ? this.fChalanaDepositObj.challanNumber : null,
        headCode: this.fChalanaDepositObj.headCode ? this.fChalanaDepositObj.headCode : null,
        challanDate: this.fChalanaDepositObj.challanDate ? this.fChalanaDepositObj.challanDate : null,
      },
      pageNo,
      paginationSize,
    };
    this.WarehousefinancialchallanadepositService.searchChallana(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.fChalanaDepositData = responceData.data.contents;
      this.refreshTabIns();
    });
  }

  resetKey() {
    this.fChalanaDepositObj = {
      challanNumber: '',
      headCode: '',
      challanDate: '',
    };
  }
}
