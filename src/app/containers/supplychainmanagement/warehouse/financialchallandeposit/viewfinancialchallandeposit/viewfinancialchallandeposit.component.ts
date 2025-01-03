import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { WarehouseFinancialChallanaDepositService } from '@app/services/ware-house/warehouse-financialChallana-deposit.service';
import { WareHouseBwfl6list } from '@app/models/warehouse';

@Component({
  selector: 'app-viewfinancialchallandeposit',
  templateUrl: './viewfinancialchallandeposit.component.html',
  styleUrls: ['./viewfinancialchallandeposit.component.scss']
})
export class ViewfinancialchallandepositComponent implements OnInit {

  data: any;
  fChalanaDepositData: any;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<WareHouseBwfl6list>();
  page: number;
  limit: any;
  fChalanaDepositObj: any;
  dateselected: any = moment().format('LLLL');

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private WarehousefinancialchallanadepositService: WarehouseFinancialChallanaDepositService,
  ) { }

  ngOnInit() {
    //this.getAllChallanaDepo();
    this.router.params.subscribe(params => {
      if (params.id) {
        this.getChallanaById(params.id);
        // this.fChalanaDepositObj.id = params.id;
      }
    });
  }

  getChallanaById(id) {
    this.WarehousefinancialchallanadepositService.getbyidChallanaDeposit(id)
      .subscribe((resp: any) => {
        this.fChalanaDepositObj = resp.data;
      });
  }
}
