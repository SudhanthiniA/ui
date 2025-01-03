import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummaryreportComponent } from './summaryreport.component';


const routes: Routes = [
  { path: 'list', component: SummaryreportComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryreportRoutingModule { }
