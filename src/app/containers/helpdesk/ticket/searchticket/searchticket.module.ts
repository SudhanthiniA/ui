import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { SearchticketRoutingModule } from './searchticket-routing.module';
import { SearchticketComponent } from './searchticket.component';

import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { TicketdetailsactionComponent } from './ticketdetailsaction/ticketdetailsaction.component';


@NgModule({
  declarations: [TicketdetailsComponent, SearchticketComponent, TicketdetailsactionComponent],
  imports: [
    CommonModule,
    SearchticketRoutingModule,
    SharedModule
    
  ]
})
export class SearchticketModule { }
