import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ListComponent } from './list/list.component';
import { StockoverviewRoutingModule } from './stockoverview-routing.module';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockoverviewRoutingModule
  ]
})
export class StockoverviewModule { }
