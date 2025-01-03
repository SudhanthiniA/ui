import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AccidentalcaserequestRoutingModule } from './accidentalcaserequest-routing.module';
import { AccidentalcaserequestComponent } from './accidentalcaserequest.component';
import { AddaccidentalcaserequestComponent } from './addaccidentalcaserequest/addaccidentalcaserequest.component';
import { ViewaccidentalcaserequestComponent } from './viewaccidentalcaserequest/viewaccidentalcaserequest.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [AccidentalcaserequestComponent, AddaccidentalcaserequestComponent, ViewaccidentalcaserequestComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccidentalcaserequestRoutingModule
  ]
})
export class AccidentalcaserequestModule { }
