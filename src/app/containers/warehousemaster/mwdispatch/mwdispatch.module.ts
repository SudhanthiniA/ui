import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MwdispatchRoutingModule } from './mwdispatch-routing.module';
import { MwdispatchComponent } from './mwdispatch.component';
import { ViewmwdispatchComponent } from './viewmwdispatch/viewmwdispatch.component';
import { EditmwdispatchComponent } from './editmwdispatch/editmwdispatch.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [MwdispatchComponent, ViewmwdispatchComponent, EditmwdispatchComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    MwdispatchRoutingModule
  ] 
})
export class MwdispatchModule { }
