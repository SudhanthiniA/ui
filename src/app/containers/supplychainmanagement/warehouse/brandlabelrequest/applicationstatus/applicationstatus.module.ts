import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ApplicationstatusRoutingModule } from './applicationstatus-routing.module';
import { ApplicationstatusComponent } from './applicationstatus.component';
import { ViewapplicationstatusComponent } from './viewapplicationstatus/viewapplicationstatus.component';

@NgModule({
  declarations: [ ApplicationstatusComponent, ViewapplicationstatusComponent],
  imports: [
    CommonModule,
    ApplicationstatusRoutingModule,
    SharedModule
  ]
})
export class ApplicationstatusModule { }
