import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DispatchRoutingModule } from './dispatch-routing.module';
import { DispatchComponent } from './dispatch.component';
import { ViewdispatchComponent } from './viewdispatch/viewdispatch.component';
import { EditdispatchComponent } from './editdispatch/editdispatch.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [DispatchComponent, ViewdispatchComponent, EditdispatchComponent, PaymentComponent],
  imports: [
    CommonModule,
    DispatchRoutingModule,
    SharedModule
  ]
})
export class DispatchModule { }
