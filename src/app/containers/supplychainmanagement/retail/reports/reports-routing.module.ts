import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { SalesreportComponent } from './salesreport/salesreport.component';
import { StockreportComponent } from './stockreport/stockreport.component';
import { LiquorcategoryreportComponent } from './liquorcategoryreport/liquorcategoryreport.component';
import { SaleallocatedyearComponent } from './saleallocatedyear/saleallocatedyear.component';
import { SaleallocatedmonthComponent } from './saleallocatedmonth/saleallocatedmonth.component';
import { IndentallocatedComponent } from './indentallocated/indentallocated.component';

const routes: Routes = [
  { path: '', component: ReportsComponent },
  { path: 'salesreport', component: SalesreportComponent },
  { path: 'stockreport', component: StockreportComponent },
  { path: 'liquorcategoryreport', component: LiquorcategoryreportComponent },
  { path: 'saleallocatedyear', component: SaleallocatedyearComponent },
  { path: 'saleallocatedmonth', component: SaleallocatedmonthComponent },
  { path: 'indentallocated', component: IndentallocatedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
