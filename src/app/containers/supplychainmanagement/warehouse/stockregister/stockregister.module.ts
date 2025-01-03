import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockregisterRoutingModule } from './stockregister-routing.module';
import { StockregisterComponent } from './stockregister.component';
import { AddstockregisterComponent } from './addstockregister/addstockregister.component';


@NgModule({
  declarations: [StockregisterComponent, AddstockregisterComponent],
  imports: [
    CommonModule,
    StockregisterRoutingModule,
    SharedModule
  ]
})
export class StockregisterModule { }
