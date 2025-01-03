import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ResourcestatusRoutingModule } from './resourcestatus-routing.module';
import { ResourcestatusComponent } from './resourcestatus.component';

@NgModule({
  declarations: [ResourcestatusComponent],
  imports: [
    CommonModule,
    ResourcestatusRoutingModule,
    SharedModule
  ]
})
export class ResourcestatusModule { }
