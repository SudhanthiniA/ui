import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { WholesaleRoutingModule } from './wholesale-routing.module';
import { WholesaleComponent } from './wholesale.component';

@NgModule({
  declarations: [WholesaleComponent],
  imports: [
    CommonModule,
    WholesaleRoutingModule,
    SharedModule
  ]
})
export class WholesaleModule { }
