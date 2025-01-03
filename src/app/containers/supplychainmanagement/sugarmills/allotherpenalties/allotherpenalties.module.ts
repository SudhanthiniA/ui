import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {AllotherpenaltiesRoutingModule} from './allotherpenalties-routing.module';
import { AllotherpenaltiesComponent } from './allotherpenalties.component';
import { AddComponent } from './add/add.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [AllotherpenaltiesComponent, AddComponent, PaymentComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AllotherpenaltiesRoutingModule
  ]
})
export class AllotherpenaltiesModule { }
