import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LicensestatusRoutingModule } from './licensestatus-routing.module';
import { LicensestatusComponent } from './licensestatus.component';

@NgModule({
  declarations: [LicensestatusComponent],
  imports: [
    CommonModule,
    SharedModule,
    LicensestatusRoutingModule
  ]
})
export class LicensestatusModule { }
