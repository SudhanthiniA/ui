import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryMasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { SubCategoryConfig } from '@app/config/table-config/sub-category-config';
import { SubCategory } from '@app/models/inventory-master';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss'],
})
export class SubcategoryComponent implements OnInit {
  subCategoryList: any;
  categorylist: any;
  selected: any;
  subCategoryObj: any = {};

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = SubCategoryConfig.titleSection.list;
  public breadcrumbs = SubCategoryConfig.breadcrumbs;
  public columns = SubCategoryConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<SubCategory>();

  constructor(
    private router: Router,
    private inventoryMasterService: InventoryMasterService
  ) { }

  ngOnInit() {
    this.getSubCategory();
    this.getListcategory();
  }

  getListcategory() {
    this.inventoryMasterService.getCategory().subscribe((resp: any) => {
      this.categorylist = resp.data;
    });
  }

  getSubCategory(pageNo = 0, paginationSize = 5) {
    const { sub_cat_code, sub_cat_name } = this.subCategoryObj;
    const searchobj = {
      filters: {
        code: sub_cat_code ? sub_cat_code : null,
        name: sub_cat_name ? sub_cat_name : null,
      },
      pageNo,
      paginationSize,
    };
    this.inventoryMasterService
      .searchSubCategory(searchobj)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.totalCount = resp.data.totalElements;
          this.dataSource.data = resp.data.contents as SubCategory[];
        }
      });
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/inventory/subcategory/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/inventory/subcategory/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getSubCategory(pageNo, pageSize);
  }

  searchSubCategory() {
    this.getSubCategory();
  }
}
