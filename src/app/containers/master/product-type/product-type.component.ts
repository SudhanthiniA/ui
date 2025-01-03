import { Component, OnInit } from '@angular/core';
import { ProductTypeService } from '@app/services';
import { Router } from '@angular/router';
import { ProductType } from '@app/models/master';
import { MatTableDataSource } from '@angular/material/table';
import { productTypeConfig } from '@app/config/table-config/producttype-config';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css'],
})
export class ProductTypeComponent implements OnInit {
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = productTypeConfig.titleSection.list;
  public breadcrumbs = productTypeConfig.breadcrumbs;
  public columns = productTypeConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<ProductType>();
  producttypeData: any;
  productTypeObj: any = {
    code: '',
    name: '',
    active: true,
  };
  constructor(
    private productService: ProductTypeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getLicensee();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/product-type/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/product-type/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getLicensee(pageNo, pageSize);
  }
  getLicensee(pageNo = 0, pageSize = 5) {
    const objtest = {
      filters: {
        productCode: this.productTypeObj.code ? this.productTypeObj.code : null,
        name: this.productTypeObj.name ? this.productTypeObj.name : null,
        isActive: this.productTypeObj.active
          ? JSON.parse(this.productTypeObj.active)
          : null,
      },
      pageNo: 0,
      paginationSize: 5,
    };
    this.productService
      .searchProductType(objtest)
      .subscribe((responceData: any) => {
        this.producttypeData = responceData.data.contents;
        if (responceData.errorCode === 200) {
          this.totalCount = responceData.data.totalElements;
          this.dataSource.data = responceData.data.contents as ProductType[];
        }
      });
  }

  searchProductType() {
    this.getLicensee();
  }
  resetKey() {
    this.productTypeObj = {
      code: '',
      name: '',
      active: true,
    };
    this.getLicensee();
  }
}
