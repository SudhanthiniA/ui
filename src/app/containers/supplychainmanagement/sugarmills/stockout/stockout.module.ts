import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { StockoutRoutingModule } from './stockout-routing.module';
import { StockoutComponent } from './stockout.component';
import { AddeditstockoutComponent } from './addeditstockout/addeditstockout.component';
import { ViewstockoutComponent } from './viewstockout/viewstockout.component';

@NgModule({
  declarations: [
    StockoutComponent, 
    AddeditstockoutComponent, 
    ViewstockoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StockoutRoutingModule
  ]
})
export class StockoutModule { }