import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockworklistRoutingModule } from './stockworklist-routing.module';
import { StockworklistComponent } from './stockworklist.component';


@NgModule({
  declarations: [StockworklistComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockworklistRoutingModule
  ]
})
export class StockworklistModule { }
