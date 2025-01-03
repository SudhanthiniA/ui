import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    BillingRoutingModule
  ]
})
export class BillingModule { }
