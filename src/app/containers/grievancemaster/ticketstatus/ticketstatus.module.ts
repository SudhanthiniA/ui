import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { TicketstatusRoutingModule } from './ticketstatus-routing.module';
import { TicketstatusComponent } from './ticketstatus.component';
import { AddticketstatusComponent } from './addticketstatus/addticketstatus.component';
import { ViewticketstatusComponent } from './viewticketstatus/viewticketstatus.component';




@NgModule({
  declarations: [TicketstatusComponent, AddticketstatusComponent, ViewticketstatusComponent],
  imports: [
    CommonModule,
    TicketstatusRoutingModule,
    SharedModule
  ]
})
export class TicketstatusModule { }
