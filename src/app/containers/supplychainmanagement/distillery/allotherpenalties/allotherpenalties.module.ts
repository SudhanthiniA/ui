import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';
import { SharedModule } from '@appThemeShared/shared.module';
import {AllotherpenaltiesRoutingModule} from './allotherpenalties-routing.module'
import { AllotherpenaltiesComponent } from './allotherpenalties.component';


@NgModule({
  declarations: [AllotherpenaltiesComponent, AddComponent, ViewComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    AllotherpenaltiesRoutingModule
  ]
})
export class AllotherpenaltiesModule { }
