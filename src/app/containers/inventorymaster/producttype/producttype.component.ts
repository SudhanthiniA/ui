import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryMasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { ProductTypeConfig } from '@app/config/table-config/product-type';
import { ProductType } from '@app/models/inventory-master';

@Component({
  selector: 'app-producttype',
  templateUrl: './producttype.component.html',
  styleUrls: ['./producttype.component.scss'],
})
export class ProducttypeComponent implements OnInit {
  productList: any;
  subcategoryList: any;
  categorylist: any;
  selected: any;
  productObj: any = {};

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = ProductTypeConfig.titleSection.list;
  public breadcrumbs = ProductTypeConfig.breadcrumbs;
  public columns = ProductTypeConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<ProductType>();

  constructor(
    private router: Router,
    private inventoryMasterService: InventoryMasterService
  ) {}

  ngOnInit() {
    this.getProduct();
    this.getSubCategory();
    this.getListcategory();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/inventory/product/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/inventory/product/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getProduct(pageNo, pageSize);
  }

  getSubCategory() {
    this.inventoryMasterService.getSubCategory().subscribe((resp: any) => {
      this.subcategoryList = resp.data;
    });
  }

  getListcategory() {
    this.inventoryMasterService.getCategory().subscribe((resp: any) => {
      this.categorylist = resp.data;
    });
  }

  getProduct(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      filters: {
        code: this.productObj.code ? this.productObj.code : null,
        name: this.productObj.name ? this.productObj.name : null,
        dataterange: this.productObj.daterange ? this.productObj.daterange : null,
      },
      pageNo,
      paginationSize,
    };
    this.inventoryMasterService
      .searchProduct(searchobj)
      .subscribe((responceData: any) => {
        if (responceData.errorCode === 200) {
          this.totalCount = responceData.data.totalElements;
          this.dataSource.data = responceData.data.contents as ProductType[];
        }
      });
  }

  searchCategory() {
    this.getProduct();
  }

  resetKey() {
    this.productObj = {
      code: '',
      name: '',
    };
    this.getProduct();
  }
}
