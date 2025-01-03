import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryMasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { SubProductTypeConfig } from '@app/config/table-config/sub-product-type-config';
import { SubProductType } from '@app/models/inventory-master';

@Component({
  selector: 'app-subproduct',
  templateUrl: './subproduct.component.html',
  styleUrls: ['./subproduct.component.scss'],
})
export class SubproductComponent implements OnInit {
  subProductList: Array<any> = [];
  productList: any = [];
  subcategoryList: any;
  categorylist: any;
  selected: any;
  subProductObj: any = {};

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = SubProductTypeConfig.titleSection.list;
  public breadcrumbs = SubProductTypeConfig.breadcrumbs;
  public columns = SubProductTypeConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<SubProductType>();

  constructor(
    private router: Router,
    private inventoryMasterService: InventoryMasterService
  ) {}

  ngOnInit() {
    this.getCategoryList();
    this.getSubCategoryList();
    this.getProductList();
    this.getSubProduct();
  }

  getCategoryList() {
    this.inventoryMasterService.getCategory().subscribe((resp: any) => {
      this.categorylist = resp.data;
    });
  }

  getSubCategoryList() {
    this.inventoryMasterService.getSubCategory().subscribe((resp: any) => {
      this.subcategoryList = resp.data;
    });
  }

  getProductList() {
    this.inventoryMasterService.getProduct().subscribe((resp: any) => {
      this.productList = resp.data;
    });
  }

  getSubProduct(pageNo = 0, paginationSize = 5) {
    const { sub_prod_code, sub_prod_name, date_range} = this.subProductObj;
    const searchobj = {
      filters: {
        code: sub_prod_code ? sub_prod_code : null,
        name: sub_prod_name ? sub_prod_name : null,
        dataterange: date_range ? date_range : null,
      },
      pageNo,
      paginationSize,
    };
    this.inventoryMasterService
      .searchSubProduct(searchobj)
      .subscribe((responceData: any) => {
        if (responceData.errorCode === 200) {
          this.totalCount = responceData.data.totalElements;
          this.dataSource.data = responceData.data.contents as SubProductType[];
        }
      });
  }

  searchCategory() {
    this.getSubProduct();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/inventory/subproduct/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/inventory/subproduct/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getSubProduct(pageNo, pageSize);
  }

  resetKey() {
    this.subProductObj = {
      code: '',
      name: '',
    };
    this.getSubProduct();
  }
}
