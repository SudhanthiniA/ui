import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ReadyForSaletConfig } from '@app/config/retail/readyForSale-config';
import { ReadyForSale } from '@app/models/retails';
import { ReadyForSaleService } from '@app/services/retails/readyForSale.service';

@Component({
  selector: 'app-readyforsale',
  templateUrl: './readyforsale.component.html',
  styleUrls: ['./readyforsale.component.scss']
})
export class ReadyforsaleComponent implements OnInit {
  indentData: any;
  pageNo = 0;
  public actionKeys = [];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
 public titleSection = ReadyForSaletConfig.titleSection.list;
 public breadcrumbs = ReadyForSaletConfig.breadcrumbs;
  public columns = ReadyForSaletConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<ReadyForSale>();
  saleData: any;
  constructor(
    private router: Router,
    private service: ReadyForSaleService) { }

  ngOnInit() {
    this.getReadyForSale();
  }
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getReadyForSale();
  }
  getReadyForSale() {
    this.service.get().subscribe((resp) => {
      this.saleData = resp;
      this.dataSource.data = resp as ReadyForSale[];
    });
  }

}
