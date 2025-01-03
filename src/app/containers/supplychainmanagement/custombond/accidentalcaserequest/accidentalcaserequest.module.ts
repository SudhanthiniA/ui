import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AckComponent } from './ack/ack.component';
import { AccidentalcaserequestRoutingModule } from './accidentalcaserequest-routing.module';
import { AccidentalcaserequestComponent } from './accidentalcaserequest.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [AccidentalcaserequestComponent, AddComponent, ViewComponent, AckComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccidentalcaserequestRoutingModule
  ]
})
export class AccidentalcaserequestModule { }
