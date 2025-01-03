import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DispatchparentunitRoutingModule } from './dispatchparentunit-routing.module';
import { DispatchparentunitComponent } from './dispatchparentunit.component';
import { AdddispatchparentunitComponent } from './adddispatchparentunit/adddispatchparentunit.component';
import { ViewdispatchparentunitComponent } from './viewdispatchparentunit/viewdispatchparentunit.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [DispatchparentunitComponent, AdddispatchparentunitComponent, ViewdispatchparentunitComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    DispatchparentunitRoutingModule
  ]
})
export class DispatchparentunitModule { }
