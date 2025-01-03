import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';
import { PaymentRoutingModule } from './payment-routing.module';



@NgModule({
  imports: [
    SharedModule,
    PaymentRoutingModule
  ],
  providers: [DatePipe],
  declarations: []
})
export class PaymentModule { }
