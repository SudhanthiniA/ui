import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { StatusComponent } from './status.component';
import { AddeditstatusComponent } from './addeditstatus/addeditstatus.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    StatusComponent, 
    AddeditstatusComponent, 
    ViewstatusComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StatusRoutingModule
  ]
})
export class StatusModule { }
