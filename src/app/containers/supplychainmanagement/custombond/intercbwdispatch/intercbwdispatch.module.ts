import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { IntercbwdispatchRoutingModule } from './intercbwdispatch-routing.module';
import { IntercbwdispatchComponent } from './intercbwdispatch.component';
import { AddintercbwdispatchComponent } from './addintercbwdispatch/addintercbwdispatch.component';
import { ViewintercbwdispatchComponent } from './viewintercbwdispatch/viewintercbwdispatch.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [IntercbwdispatchComponent, AddintercbwdispatchComponent, ViewintercbwdispatchComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    IntercbwdispatchRoutingModule
  ]
})
export class IntercbwdispatchModule { }
