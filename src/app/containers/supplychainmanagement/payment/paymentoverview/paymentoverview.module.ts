import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { PaymentoverviewRoutingModule } from './paymentoverview-routing.module';
import { PaymentoverviewComponent } from './paymentoverview.component';
import { ViewComponent } from './view/view.component';
import { DetailviewComponent } from './detailview/detailview.component';

@NgModule({
  declarations: [PaymentoverviewComponent, ViewComponent, DetailviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    PaymentoverviewRoutingModule
  ]
})
export class PaymentoverviewModule { }