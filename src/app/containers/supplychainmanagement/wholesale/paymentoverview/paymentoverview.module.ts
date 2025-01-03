import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { PaymentoverviewRoutingModule } from './paymentoverview-routing.module';
import { PaymentoverviewComponent } from './paymentoverview.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [PaymentoverviewComponent,  ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    PaymentoverviewRoutingModule
  ]
})
export class PaymentoverviewModule { }
