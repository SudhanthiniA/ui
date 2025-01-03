import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { StockavailabilitywholesaleRoutingModule } from './stockavailabilitywholesale-routing.module';
import { StockavailabilitywholesaleComponent } from './stockavailabilitywholesale.component';
import { StockavailabilityComponent } from './stockavailability/stockavailability.component';


@NgModule({
  declarations: [StockavailabilitywholesaleComponent, StockavailabilityComponent],
  imports: [
    CommonModule,
    StockavailabilitywholesaleRoutingModule,
    SharedModule
  ]
})
export class StockavailabilitywholesaleModule { }
