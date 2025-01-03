import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseSharedModule } from '@appLicMgnt/license-shared.module';

import { DistilleryLicenseRoutingModule } from './distillery-license-routing.module';
import { DistilleryLandingComponent } from './distillery-landing/distillery-landing.component';
import { DistilleryLicenseFormComponent } from './distillery-license-form/distillery-license-form.component';
import { DistilleryLicenseViewComponent } from './distillery-license-view/distillery-license-view.component';

@NgModule({
  declarations: [
    DistilleryLandingComponent,
    DistilleryLicenseFormComponent,
    DistilleryLicenseViewComponent
  ],
  imports: [
    CommonModule,
    LicenseSharedModule,
    DistilleryLicenseRoutingModule
  ]
})
export class DistilleryLicenseModule { }
