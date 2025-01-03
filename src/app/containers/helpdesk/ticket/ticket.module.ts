import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';

@NgModule({
  imports: [
    SharedModule,
    TicketRoutingModule
  ],
  providers: [DatePipe],
  declarations: []
})
export class TicketModule { }
