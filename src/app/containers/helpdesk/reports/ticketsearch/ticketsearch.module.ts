import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { TicketsearchRoutingModule } from './ticketsearch-routing.module';
import { TicketsearchComponent } from './ticketsearch.component';


@NgModule({
  declarations: [TicketsearchComponent],
  imports: [
    CommonModule,
    TicketsearchRoutingModule,
    SharedModule
  ]
})
export class TicketsearchModule { }
