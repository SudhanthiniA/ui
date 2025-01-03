import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { QrcodewastageRoutingModule } from './qrcodewastage-routing.module';
import { QrcodewastageComponent } from './qrcodewastage.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [QrcodewastageComponent, AddComponent, ViewComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    QrcodewastageRoutingModule
  ]
})
export class QrcodewastageModule { }
