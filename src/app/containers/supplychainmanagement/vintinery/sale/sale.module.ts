import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@appThemeShared/shared.module';
import { SaleComponent } from './sale.component';
import {SaleRoutingModule} from './sale-routing.module';
import { BillsummaryComponent } from './billsummary/billsummary.component';


@NgModule({
  declarations: [SaleComponent, BillsummaryComponent],
  imports: [
    CommonModule,
    SharedModule,
    SaleRoutingModule
  ]
})
export class SaleModule { }
