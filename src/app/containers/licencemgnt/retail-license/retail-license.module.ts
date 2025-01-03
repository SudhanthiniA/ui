import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RetailLicenseRoutingModule } from './retail-license-routing.module';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { LicenseFormComponent } from './license-form/license-form.component';
import { RetailLandingComponent } from './retail-landing/retail-landing.component';

@NgModule({
  declarations: [AcknowledgementComponent, LicenseFormComponent, RetailLandingComponent],
  imports: [
    CommonModule,
    SharedModule,
    RetailLicenseRoutingModule
  ]
})
export class RetailLicenseModule { }
