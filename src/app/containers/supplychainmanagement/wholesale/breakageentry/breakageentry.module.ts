import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BreakageentryRoutingModule } from './breakageentry-routing.module';
import { BreakageentryComponent } from './breakageentry.component';
import { AddbreakageentryComponent } from './addbreakageentry/addbreakageentry.component';
import { ViewbreakageentryComponent } from './viewbreakageentry/viewbreakageentry.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [BreakageentryComponent, AddbreakageentryComponent, ViewbreakageentryComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    BreakageentryRoutingModule
  ]
})
export class BreakageentryModule { }
