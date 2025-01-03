import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { StockavailabilityRoutingModule } from './stockavailability-routing.module';
import { StockavailabilityComponent } from './stockavailability.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [StockavailabilityComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockavailabilityRoutingModule
  ]
})
export class StockavailabilityModule { }
