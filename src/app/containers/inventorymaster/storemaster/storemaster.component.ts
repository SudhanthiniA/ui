import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryMasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { StoreConfig } from '@app/config/table-config/store-config';
import { Store } from '@app/models/inventory-master';

@Component({
  selector: 'app-storemaster',
  templateUrl: './storemaster.component.html',
  styleUrls: ['./storemaster.component.scss']
})
export class StoremasterComponent implements OnInit {
  date: any;
  storeList: Array<any> = [];
  storeObj: any = {
    code: '',
    name: '',
    isActive: true
  };
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = StoreConfig.titleSection.list;
  public breadcrumbs = StoreConfig.breadcrumbs;
  public columns = StoreConfig.columns;
  public l9astText = 'master.common.list';
  public dataSource = new MatTableDataSource<Store>();
  lastText = 'Store';
  constructor(
    private router: Router,
    private inventoryMasterService: InventoryMasterService
  ) { }
  ngOnInit() {
    this.getStore();
  }
  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/inventory/storemaster/edit/' + event.id]);
  }
  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/inventory/storemaster/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getStore(pageNo, pageSize);
  }

  getStore(pageNo = 0, paginationSize = 5) {
    const objtest = {
      filters: {
        code: this.storeObj.code ? this.storeObj.code : null,
        name: this.storeObj.name ? this.storeObj.name : null,
        dataterange: this.storeObj.daterange ? this.storeObj.daterange : null,
        isActive: this.storeObj.isActive ? JSON.parse(this.storeObj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.inventoryMasterService.searchStore(objtest).subscribe((responceData: any) => {
      console.log(objtest);
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as Store[];
      }
    });
  }
  searchStore() {
    this.getStore();
  }

  resetForm() {
    this.storeObj = {
      code: '',
      name: '',
      isActive: true
    };
    this.getStore();
  }
}
