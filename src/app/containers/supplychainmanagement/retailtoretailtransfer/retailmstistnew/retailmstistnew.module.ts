import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { RetailmstistnewComponent } from './retailmstistnew.component';
import { ViewComponent } from './view/view.component';
import { RetailistmstnewRoutingModule } from './retailistmstnew-routing.module';
import { AddComponent } from './add/add.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [RetailmstistnewComponent, ViewComponent, AddComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    RetailistmstnewRoutingModule
  ]
})
export class RetailmstistnewModule { }
