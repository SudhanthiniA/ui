import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { TicketsreportRoutingModule } from './ticketsreport-routing.module';
import { TicketsreportComponent } from './ticketsreport.component';

@NgModule({
  declarations: [TicketsreportComponent],
  imports: [
    CommonModule,
    TicketsreportRoutingModule,
    SharedModule
  ]
})
export class TicketsreportModule { }
