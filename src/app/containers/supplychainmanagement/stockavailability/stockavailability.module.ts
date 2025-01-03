import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { StockavailabilityRoutingModule } from './stockavailability-routing.module';
import { StockavailabilityComponent } from './stockavailability.component';
import { AddstockavailabilityComponent } from './addstockavailability/addstockavailability.component';

@NgModule({
  declarations: [
    StockavailabilityComponent, 
    AddstockavailabilityComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StockavailabilityRoutingModule
  ]
})
export class StockavailabilityModule { }
