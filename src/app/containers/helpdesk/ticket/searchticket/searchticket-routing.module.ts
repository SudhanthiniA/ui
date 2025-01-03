import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchticketComponent } from './searchticket.component';

import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { TicketdetailsactionComponent } from './ticketdetailsaction/ticketdetailsaction.component';

const routes: Routes = [
  { path: '', component: SearchticketComponent },
  { path: 'ticketdetails/:Id', component: TicketdetailsComponent },
  { path: 'ticketdetailsaction', component: TicketdetailsactionComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchticketRoutingModule { }
