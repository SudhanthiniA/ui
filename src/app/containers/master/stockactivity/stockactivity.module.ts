import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockactivityComponent } from './stockactivity.component';
import { AddstockactivityComponent } from './addstockactivity/addstockactivity.component';
import { ViewstockactivityComponent } from './viewstockactivity/viewstockactivity.component';
import { StockactivityRoutingModule } from './stockactivity-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';



@NgModule({
  declarations: [StockactivityComponent, AddstockactivityComponent, ViewstockactivityComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockactivityRoutingModule
  ]
})
export class StockactivityModule { }
