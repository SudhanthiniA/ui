import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { BrandandlabelregistrationComponent } from './brandandlabelregistration.component';
import { BrandandlabelregistrationRoutingModule } from './brandandlabelregistration-routing.module';
import { AddbrandandlabelregistrationComponent } from './addbrandandlabelregistration/addbrandandlabelregistration.component';
import { ViewbrandandlabelregistrationComponent } from './viewbrandandlabelregistration/viewbrandandlabelregistration.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [BrandandlabelregistrationComponent, AddbrandandlabelregistrationComponent, ViewbrandandlabelregistrationComponent, PaymentComponent],
  imports: [
    CommonModule,
    BrandandlabelregistrationRoutingModule,
    SharedModule
  ]
})
export class BrandandlabelregistrationModule { }
