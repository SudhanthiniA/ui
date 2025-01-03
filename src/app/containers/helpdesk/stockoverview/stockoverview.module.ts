import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockoverviewRoutingModule } from './stockoverview-routing.module';
import { StockoverviewComponent } from './stockoverview.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { UnmappedviewComponent } from './unmappedview/unmappedview.component';

@NgModule({
  declarations: [StockoverviewComponent, AddComponent, ViewComponent, UnmappedviewComponent],
  imports: [
    CommonModule,
    StockoverviewRoutingModule,
    SharedModule
  ]
})
export class StockoverviewModule { }
