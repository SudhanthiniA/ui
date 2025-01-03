import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { CsdDispatchRoutingModule } from './csd-dispatch-routing.module';
import { EditdispatchComponent } from './editdispatch/editdispatch.component';
import { CsdDispatchComponent } from  './csd-dispatch.component';
import { ViewdispatchComponent } from './viewdispatch/viewdispatch.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [EditdispatchComponent, CsdDispatchComponent, ViewdispatchComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    CsdDispatchRoutingModule
  ]
})
export class CsdDispatchModule { }
