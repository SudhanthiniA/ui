import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BrewerytankregistrationRoutingModule } from './brewerytankregistration-routing.module';
import { BrewerytankregistrationComponent } from './brewerytankregistration.component';
import { AddbrewerytankregistrationComponent } from './addbrewerytankregistration/addbrewerytankregistration.component';
import { ViewbrewerytankregistrationComponent } from './viewbrewerytankregistration/viewbrewerytankregistration.component';


@NgModule({
  declarations: [BrewerytankregistrationComponent, AddbrewerytankregistrationComponent, ViewbrewerytankregistrationComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrewerytankregistrationRoutingModule
  ]
})
export class BrewerytankregistrationModule { }
