import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DispatchofnewnonregisteruserRoutingModule } from './dispatchofnewnonregisteruser-routing.module';
import { DispatchofnewnonregisteruserComponent } from './dispatchofnewnonregisteruser.component';
import { AdddispatchComponent } from './adddispatch/adddispatch.component';
import { ViewdispatchComponent } from './viewdispatch/viewdispatch.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [DispatchofnewnonregisteruserComponent, AdddispatchComponent, ViewdispatchComponent,PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    DispatchofnewnonregisteruserRoutingModule
  ]
})
export class DispatchofnewnonregisteruserModule { }
