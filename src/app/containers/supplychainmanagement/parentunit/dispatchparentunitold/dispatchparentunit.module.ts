import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DispatchparentunitRoutingModule } from './dispatchparentunit-routing.module';
import { DispatchparentunitComponent } from './dispatchparentunit.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [DispatchparentunitComponent, AddComponent, ViewComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    DispatchparentunitRoutingModule
  ]
})
export class DispatchparentunitModule { }
