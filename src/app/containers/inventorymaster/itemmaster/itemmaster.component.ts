import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryMasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { ItemConfig } from '@app/config/table-config/item-config';
import { Item } from '@app/models/inventory-master';

@Component({
  selector: 'app-itemmaster',
  templateUrl: './itemmaster.component.html',
  styleUrls: ['./itemmaster.component.scss']
})
export class ItemmasterComponent implements OnInit {
  date: any;
  itemList: any = [];
  itemObj: any = {
    code: '',
    name: '',
    isActive: true
  };
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = ItemConfig.titleSection.list;
  public breadcrumbs = ItemConfig.breadcrumbs;
  public columns = ItemConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Item>();

  constructor(
    private router: Router,
    private inventoryMasterService: InventoryMasterService
  ) { }

  ngOnInit() {
    this.getItem();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/inventory/itemmaster/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/inventory/itemmaster/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getItem(pageNo, pageSize);
  }

  getItem(pageNo = 0, paginationSize = 5) {
    const objtest = {
      filters: {
        code: this.itemObj.code ? this.itemObj.code : null,
        name: this.itemObj.name ? this.itemObj.name : null,
        isActive: this.itemObj.isActive ? this.itemObj.isActive : null,
        dataterange: this.itemObj.daterange ? this.itemObj.daterange : null,
      },
      pageNo,
      paginationSize
    };
    this.inventoryMasterService.searchitem(objtest).subscribe((responceData: any) => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as Item[];
      }
    });
  }

  searchItem() {
    this.getItem();
  }
  
  resetForm() {
    this.itemObj = {
      code: '',
      name: '',
      isActive: true
    };
  }
}
