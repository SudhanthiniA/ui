import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ReceiptandconsumptionreportRoutingModule } from './receiptandconsumptionreport-routing.module';
import { ReceiptandconsumptionreportComponent } from './receiptandconsumptionreport.component';

@NgModule({
  declarations: [ReceiptandconsumptionreportComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReceiptandconsumptionreportRoutingModule
  ]
})
export class ReceiptandconsumptionreportModule { }
