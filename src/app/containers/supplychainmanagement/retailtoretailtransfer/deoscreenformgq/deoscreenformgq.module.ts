import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DeoscreenformgqRoutingModule } from './deoscreenformgq-routing.module'
import { DeoscreenformgqComponent } from './deoscreenformgq.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [DeoscreenformgqComponent, ViewComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    DeoscreenformgqRoutingModule
  ]
})
export class DeoscreenformgqModule { }
