import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockavailabilityRoutingModule } from './stockavailability-routing.module';
import { StockavailabilityComponent } from './stockavailability.component';
import { ViewstockavailabilityComponent } from './viewstockavailability/viewstockavailability.component';


@NgModule({
  declarations: [StockavailabilityComponent, ViewstockavailabilityComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockavailabilityRoutingModule
  ]
})
export class StockavailabilityModule { }
