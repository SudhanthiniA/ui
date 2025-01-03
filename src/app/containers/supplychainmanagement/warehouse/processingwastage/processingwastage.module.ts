import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ProcessingwastageRoutingModule } from './processingwastage-routing.module';
import { AddprocessingwastageComponent } from './addprocessingwastage/addprocessingwastage.component';
import { ViewprocessingwastageComponent } from './viewprocessingwastage/viewprocessingwastage.component';
import { PaymentComponent } from './payment/payment.component';
import { ProcessingwastageComponent } from './processingwastage.component';



@NgModule({
  declarations: [ProcessingwastageComponent, AddprocessingwastageComponent, ViewprocessingwastageComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProcessingwastageRoutingModule
  ]
})
export class ProcessingwastageModule { }
