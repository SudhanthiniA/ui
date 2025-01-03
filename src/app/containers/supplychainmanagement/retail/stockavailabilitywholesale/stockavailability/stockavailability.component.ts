import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StockAvailabilityViewConfig } from '@app/config/retail/stockavailabilityview-config';
import { StockAvailabilityWholesale } from '@app/models/retails';
import { StockAvailabilityService } from '@app/services/retails/stockavailability.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stockavailability',
  templateUrl: './stockavailability.component.html',
  styleUrls: ['./stockavailability.component.scss']
})
export class StockavailabilityComponent implements OnInit {
  liquorType: any;
  productList: any;
  productName: any;
  brandSizes: any;
  stockAvailbilityData: any;
  stockAvailabilityObj: any = {};
  pageNo = 0;
  public actionKeys = [''];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  // public titleSection = StockAvailabilityConfig.titleSection.list;
  // public breadcrumbs = StockAvailabilityConfig.breadcrumbs;
  public columns = StockAvailabilityViewConfig.columns;
  public dataSource = new MatTableDataSource<StockAvailabilityWholesale>();

  constructor(
    private route: ActivatedRoute,
    private service: StockAvailabilityService
    ) { }

  ngOnInit() {
    this.getStockAvailability();
    this.route.params.subscribe(params => {
      this.getLiquorType(params.id);
      console.log(params.id);
    });
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    this.getStockAvailability();
  }

  getStockAvailability() {
    this.service.getStockAvailability().subscribe((responceData: any) => {
      this.stockAvailbilityData = responceData;
      this.dataSource.data = responceData as StockAvailabilityWholesale[];
    });
  }

  getLiquorType(id) {
    this.service.getProductTypeById(id).subscribe((resp) => {
      console.log(resp);
      this.liquorType = resp.product;
      this.productList = resp.productName;
    });
  }

  getProductById(event) {
    this.productName = event.target[event.target.selectedIndex].text;
    const productId = event.target.value;
    this.service.getBrandSize(productId).subscribe((resp) => {
      this.brandSizes = resp.sizes;
      console.log(this.brandSizes);
    });
  }
}
