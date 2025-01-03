import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockadjustmentRoutingModule } from './stockadjustment-routing.module';
import { StockadjustmentComponent } from './stockadjustment.component';
import { ViewstockadjustmentComponent } from './viewstockadjustment/viewstockadjustment.component';
import { AddstockadjustmentComponent } from './addstockadjustment/addstockadjustment.component';


@NgModule({
  declarations: [StockadjustmentComponent, ViewstockadjustmentComponent, AddstockadjustmentComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockadjustmentRoutingModule
  ]
})
export class StockadjustmentModule { }
