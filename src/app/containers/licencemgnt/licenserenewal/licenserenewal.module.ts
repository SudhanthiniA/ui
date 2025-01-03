import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LicenserenewalRoutingModule } from './licenserenewal-routing.module';
import { LicenserenewalComponent } from './licenserenewal.component';
// import { ViewLicenserenewalComponent } from './viewlicenserenewal/viewlicenserenewal.component';
// import { PaymentacknowledgementComponent } from './paymentacknowledgement/paymentacknowledgement.component';

@NgModule({
  declarations: [LicenserenewalComponent],
  imports: [
    CommonModule,
    SharedModule,
    LicenserenewalRoutingModule
  ]
})
export class LicenserenewalModule { }
