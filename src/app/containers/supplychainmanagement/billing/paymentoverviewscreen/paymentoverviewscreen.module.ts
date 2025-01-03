import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {PaymentoverviewscreenRoutingModule} from './paymentoverviewscreen-routing.module';
import { PaymentoverviewscreenComponent } from './paymentoverviewscreen.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [PaymentoverviewscreenComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    PaymentoverviewscreenRoutingModule
  ]
})
export class PaymentoverviewscreenModule { }
