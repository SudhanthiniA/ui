import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketsearchComponent } from './ticketsearch.component';


const routes: Routes = [
  { path: '', component: TicketsearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsearchRoutingModule { }
