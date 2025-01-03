import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {PaymentoverviewscreenRoutingModule} from './paymentoverviewscreen-routing.module';
import { PaymentoverviewscreenComponent } from './paymentoverviewscreen.component';
import { ViewComponent } from './view/view.component';
import { PaymentoverviewComponent } from './paymentoverview/paymentoverview.component';



@NgModule({
  declarations: [PaymentoverviewscreenComponent, ViewComponent,PaymentoverviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    PaymentoverviewscreenRoutingModule
  ]
})
export class PaymentoverviewscreenModule { }
