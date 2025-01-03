import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockactivityRoutingModule } from './stockactivity-routing.module';
import { StockactivityComponent } from './stockactivity.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [StockactivityComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    StockactivityRoutingModule,
    SharedModule
  ]
})
export class StockactivityModule { }
