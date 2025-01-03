import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { SalesreportComponent } from './salesreport/salesreport.component';
import { StockreportComponent } from './stockreport/stockreport.component';
import { LiquorcategoryreportComponent } from './liquorcategoryreport/liquorcategoryreport.component';
import { SaleallocatedyearComponent } from './saleallocatedyear/saleallocatedyear.component';
import { SaleallocatedmonthComponent } from './saleallocatedmonth/saleallocatedmonth.component';
import { IndentallocatedComponent } from './indentallocated/indentallocated.component';


@NgModule({
  declarations: [ReportsComponent, SalesreportComponent, StockreportComponent, LiquorcategoryreportComponent, SaleallocatedyearComponent, SaleallocatedmonthComponent, IndentallocatedComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule
  ]
})
export class ReportsModule { }
