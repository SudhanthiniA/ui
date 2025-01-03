import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SpiritimportorderRoutingModule } from './spiritimportorder-routing.module';
import { SpiritimportorderComponent } from './spiritimportorder.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [SpiritimportorderComponent, AddComponent, ViewComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    SpiritimportorderRoutingModule
  ]
})
export class SpiritimportorderModule { }
