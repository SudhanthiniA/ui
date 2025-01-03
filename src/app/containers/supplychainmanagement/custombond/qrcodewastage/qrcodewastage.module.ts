import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { QrcodewastageRoutingModule } from './qrcodewastage-routing.module';
import { QrcodewastageComponent } from './qrcodewastage.component';
import { AddqrcodewastageComponent } from './addqrcodewastage/addqrcodewastage.component';
import { ViewqrcodewastageComponent } from './viewqrcodewastage/viewqrcodewastage.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [QrcodewastageComponent, AddqrcodewastageComponent, ViewqrcodewastageComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    QrcodewastageRoutingModule
  ]
})
export class QrcodewastageModule { }
