import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LicensereportRoutingModule } from './licensereport-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LicensereportRoutingModule,
    SharedModule
  ]
})
export class LicensereportModule { }
