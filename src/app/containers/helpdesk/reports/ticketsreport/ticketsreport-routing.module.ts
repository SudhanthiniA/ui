import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketsreportComponent } from './ticketsreport.component';


const routes: Routes = [
  { path: '', component: TicketsreportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsreportRoutingModule { }
