import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StockInHandConfig } from '@app/config/retail/stockinhand-config';
import { StockInHand } from '@app/models/retails';
import { StockinhandService } from '@app/services/retails';
@Component({
  selector: 'app-stockinhand',
  templateUrl: './stockinhand.component.html',
  styleUrls: ['./stockinhand.component.scss']
})
export class StockinhandComponent implements OnInit {
  countryData: any;
  countryObj: any = {};
  workFlowList: any;
  pageNo = 0;
  public actionKeys = [];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = StockInHandConfig.titleSection.list;
  public breadcrumbs = StockInHandConfig.breadcrumbs;
  public columns = StockInHandConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<StockInHand>();

  constructor(public service: StockinhandService) { }

  ngOnInit() {
    this.getData();
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
      this.dataSource.data = resp as StockInHand[];
    });
  }
}
