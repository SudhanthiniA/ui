import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { BoxingComponent } from './boxing.component';
import { AddboxingComponent } from './addboxing/addboxing.component';
import { ViewboxingComponent } from './viewboxing/viewboxing.component';
import { BoxingRoutingModule } from './boxing-routing.module';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [BoxingComponent, AddboxingComponent, ViewboxingComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    BoxingRoutingModule
  ]
})
export class BoxingModule { }
