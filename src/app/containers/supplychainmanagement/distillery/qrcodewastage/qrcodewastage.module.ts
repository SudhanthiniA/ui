import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { QrcodewastageRoutingModule } from './qrcodewastage-routing.module';
import { QrcodewastageComponent } from './qrcodewastage.component';
import { AddqrcodewastageComponent } from './addqrcodewastage/addqrcodewastage.component';
import { ViewqrcodewastageComponent } from './viewqrcodewastage/viewqrcodewastage.component';
import { PaymentscreenComponent } from './paymentscreen/paymentscreen.component';

@NgModule({
  declarations: [QrcodewastageComponent, AddqrcodewastageComponent, ViewqrcodewastageComponent, PaymentscreenComponent],
  imports: [
    CommonModule,
    SharedModule,
    QrcodewastageRoutingModule
  ]
})
export class QrcodewastageModule { }
