import { Component, OnInit } from '@angular/core';
import { StockAvailabilityService } from '@app/services/retails/stockavailability.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockavailabilitywholesale',
  templateUrl: './stockavailabilitywholesale.component.html',
  styleUrls: ['./stockavailabilitywholesale.component.scss']
})
export class StockavailabilitywholesaleComponent implements OnInit {
  stockAvailbilityData: any;
  stockAvailabilityObj: any = {};

  constructor(
    private service: StockAvailabilityService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getStockAvailability();
  }

  getStockAvailability() {
    this.service.get().subscribe((responceData: any) => {
      this.stockAvailbilityData = responceData;
      console.log(responceData);
    });
  }

  navigateView(id) {
    this.router.navigate(['/supplychainmanagement/retail/stockavailabilitywholesale/stockavailability', id]);
  }

  resetKey() {
    this.stockAvailabilityObj = {
      wholesaleType: '',
      wholesaleName: '',
      productName: '',
    };
    this.getStockAvailability();
  }
}