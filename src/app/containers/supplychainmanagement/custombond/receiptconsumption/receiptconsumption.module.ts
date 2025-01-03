import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ReceiptconsumptionComponent } from './receiptconsumption.component';
import { ReceiptconsumptionRoutingModule } from './receiptconsumption-routing.module';

@NgModule({
  declarations: [ReceiptconsumptionComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReceiptconsumptionRoutingModule

  ]
})
export class ReceiptconsumptionModule { }
