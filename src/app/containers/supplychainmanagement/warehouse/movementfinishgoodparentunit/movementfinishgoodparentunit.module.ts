import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MovementfinishgoodparentunitRoutingModule } from './movementfinishgoodparentunit-routing.module';

import { MovementfinishgoodparentunitComponent } from './movementfinishgoodparentunit.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [MovementfinishgoodparentunitComponent, AddComponent, ViewComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    MovementfinishgoodparentunitRoutingModule
  ]
})
export class MovementfinishgoodparentunitModule { }
