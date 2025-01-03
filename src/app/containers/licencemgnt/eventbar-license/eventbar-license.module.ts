import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseSharedModule } from '@appLicMgnt/license-shared.module';

import { EventbarLicenseRoutingModule } from './eventbar-license-routing.module';
import { EventbarLicenseFormComponent } from './eventbar-license-form/eventbar-license-form.component';
import { EventbarLandingComponent } from './eventbar-landing/eventbar-landing.component';
import { EventbarLicenseViewComponent } from './eventbar-license-view/eventbar-license-view.component';

@NgModule({
  declarations: [EventbarLicenseFormComponent, EventbarLandingComponent, EventbarLicenseViewComponent],
  imports: [
    CommonModule,
    LicenseSharedModule,
    EventbarLicenseRoutingModule
  ]
})
export class EventbarLicenseModule { }
