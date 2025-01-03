import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { WholesaleRoutingModule } from './retailgbr-routing.module';
import { RetailgbrComponent } from './retailgbr.component';

@NgModule({
  declarations: [RetailgbrComponent],
  imports: [
    CommonModule,
    WholesaleRoutingModule,
    SharedModule
  ]
})
export class WholesaleModule { }
