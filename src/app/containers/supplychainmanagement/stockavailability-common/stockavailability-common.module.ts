import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {StockavailabilityCommonRoutingModule} from './stockavailability-common-routing.module';
import { StockavailabilityCommonComponent } from './stockavailability-common.component';



@NgModule({
  declarations: [StockavailabilityCommonComponent],
  imports: [
    CommonModule,
    StockavailabilityCommonRoutingModule,
    SharedModule
  ]
})
export class StockavailabilityCommonModule { }
