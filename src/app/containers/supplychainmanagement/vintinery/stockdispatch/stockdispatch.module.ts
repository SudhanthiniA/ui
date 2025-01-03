import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { StockdispatchComponent } from './stockdispatch.component';
import { ViewComponent } from './view/view.component';
import {StockdispatchRoutingModule} from './stockdispatch-routing.module';


@NgModule({
  declarations: [StockdispatchComponent, ViewComponent],
  imports: [
    CommonModule,
    StockdispatchRoutingModule,
    SharedModule
  ]
})
export class StockdispatchModule { }
