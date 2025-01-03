import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { RetailtransactionComponent } from './retailtransaction.component';
import { ViewComponent } from './view/view.component';
import {RetailtransactionRoutingModule} from './retailtransaction-routing.module';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [RetailtransactionComponent, ViewComponent, PaymentComponent],
  imports: [
    CommonModule,
    RetailtransactionRoutingModule,
    SharedModule
  ]
})
export class RetailtransactionModule { }
