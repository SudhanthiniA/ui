import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { StockoutRoutingModule } from './stockout-routing.module';
import { StockoutComponent } from './stockout.component';
import { AddshelfsaleComponent } from './addshelfsale/addshelfsale.component';
import { ViewshelfsaleComponent } from './viewshelfsale/viewshelfsale.component';

@NgModule({
  declarations: [StockoutComponent, AddshelfsaleComponent, ViewshelfsaleComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockoutRoutingModule
  ]
})
export class StockoutModule { }
