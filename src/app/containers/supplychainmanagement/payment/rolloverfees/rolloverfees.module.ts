import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { RolloverfeesRoutingModule } from './rolloverfees-routing.module';
import { RolloverfeesComponent } from './rolloverfees.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [RolloverfeesComponent, AddComponent, ViewComponent, PaymentComponent],
  imports: [
    CommonModule,
    RolloverfeesRoutingModule,
    SharedModule
  ]
})
export class RolloverfeesModule { }
