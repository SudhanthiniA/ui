import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment.component';

import {PaymentRoutingModule} from './payment-routing.module';
import { BottlingPlanComponent } from './bottling-plan/bottling-plan.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, PaymentComponent, BottlingPlanComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    SharedModule
  ]
})
export class PaymentModule { }
