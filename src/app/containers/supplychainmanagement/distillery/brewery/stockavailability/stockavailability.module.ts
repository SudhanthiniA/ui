import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { StockavailabilityComponent } from './stockavailability.component';
import { AddstockavailabilityComponent } from './addstockavailability/addstockavailability.component';
import { ViewstockavailabilityComponent } from './viewstockavailability/viewstockavailability.component';
import { StockavailabilityRoutingModule } from './stockavailability-routing.module';

@NgModule({
  declarations: [StockavailabilityComponent, AddstockavailabilityComponent, ViewstockavailabilityComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockavailabilityRoutingModule
  ]
})
export class StockavailabilityModule { }

 