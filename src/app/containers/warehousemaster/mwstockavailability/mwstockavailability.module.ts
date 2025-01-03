import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MwstockavailabilityRoutingModule } from './mwstockavailability-routing.module';
import { MwstockavailabilityComponent } from './mwstockavailability.component';
import { ViewmwstockavailabilityComponent } from './viewmwstockavailability/viewmwstockavailability.component';
@NgModule({
  declarations: [MwstockavailabilityComponent, ViewmwstockavailabilityComponent],
  imports: [
    CommonModule,
    SharedModule,
    MwstockavailabilityRoutingModule
  ]
})
export class MwstockavailabilityModule { }
