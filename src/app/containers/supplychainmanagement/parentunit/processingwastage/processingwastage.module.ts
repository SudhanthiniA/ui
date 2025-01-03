import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ProcessingwastageRoutingModule } from './processingwastage-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';
import { ProcessingwastageComponent } from './processingwastage.component';



@NgModule({
  declarations: [ProcessingwastageComponent, AddComponent, ViewComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProcessingwastageRoutingModule
  ]
})
export class ProcessingwastageModule { }
