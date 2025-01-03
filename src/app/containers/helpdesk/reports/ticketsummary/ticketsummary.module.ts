import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { TicketsummaryRoutingModule } from './ticketsummary-routing.module';
import { TicketsummaryComponent } from './ticketsummary.component';


@NgModule({
  declarations: [TicketsummaryComponent],
  imports: [
    CommonModule,
    TicketsummaryRoutingModule,
    SharedModule
  ]
})
export class TicketsummaryModule { }
