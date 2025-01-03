import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationstatusRoutingModule } from './applicationstatus-routing.module';
import { ApplicationstatusComponent } from './applicationstatus.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { ViewapplicationstatusComponent } from './viewapplicationstatus/viewapplicationstatus.component';
import { AddeditapplicationstatusComponent } from './addeditapplicationstatus/addeditapplicationstatus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ApplicationstatusComponent, AddeditapplicationstatusComponent, ViewapplicationstatusComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    ApplicationstatusRoutingModule
  ]
})
export class ApplicationstatusModule { }
