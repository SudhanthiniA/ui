import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import {MovementoffinishedgoodsRoutingModule} from './movementoffinishedgoods-routing.module';

import { MovementoffinishedgoodsComponent } from './movementoffinishedgoods.component';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [MovementoffinishedgoodsComponent, AddComponent, ViewComponent, PaymentComponent],
  imports: [
    CommonModule,
    MovementoffinishedgoodsRoutingModule,
    SharedModule
  ]
})
export class MovementoffinishedgoodsModule { }
