import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketsummaryComponent } from './ticketsummary.component';


const routes: Routes = [
  { path: '', component: TicketsummaryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsummaryRoutingModule { }
