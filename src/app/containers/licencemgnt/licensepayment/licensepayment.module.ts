import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LicensepaymentRoutingModule } from './licensepayment-routing.module';
import { LicensepaymentComponent } from './licensepayment.component';
import { ViewlicensepaymentComponent } from './viewlicensepayment/viewlicensepayment.component';
import { PaymentacknowledgementComponent } from './paymentacknowledgement/paymentacknowledgement.component';

@NgModule({
  declarations: [LicensepaymentComponent, ViewlicensepaymentComponent, PaymentacknowledgementComponent],
  imports: [
    CommonModule,
    SharedModule,
    LicensepaymentRoutingModule
  ]
})
export class LicensepaymentModule { }
