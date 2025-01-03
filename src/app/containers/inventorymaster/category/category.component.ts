import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryMasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryConfig } from '@app/config/table-config/category-config';
import { Category } from '@app/models/inventory-master';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryList: any;
  categoryObj: any = {};
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = CategoryConfig.titleSection.list;
  public breadcrumbs = CategoryConfig.breadcrumbs;
  public columns = CategoryConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Category>();

  constructor(
    private router: Router,
    private inventoryMasterService: InventoryMasterService
  ) { }

  ngOnInit() {
    this.getCategory();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/inventory/category/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/inventory/category/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getCategory(pageNo, pageSize);
  }

  getCategory(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      filters: {
        code: this.categoryObj.code ? this.categoryObj.code : null,
        name: this.categoryObj.name ? this.categoryObj.name : null,
        daterange: this.categoryObj.daterange ? this.categoryObj.daterange : null
      },
      pageNo,
      paginationSize
    };
    this.inventoryMasterService.searchCategory(searchobj)
      .subscribe((responceData: any) => {
        if (responceData.errorCode === 200) {
          this.totalCount = responceData.data.totalElements;
          this.dataSource.data = responceData.data.contents as Category[];
        }
      });
  }

  searchCategory() {
    this.getCategory();
  }

  resetKey() {
    this.categoryObj = {
      code: '',
      name: '',
      active: true
    };
    this.getCategory();
  }
}
