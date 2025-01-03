import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ReceiptconsuptionRoutingModule } from './receiptconsuption-routing.module';
import { ReceiptconsuptionComponent } from './receiptconsuption.component';

@NgModule({
  declarations: [ReceiptconsuptionComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReceiptconsuptionRoutingModule
  ]
})
export class ReceiptconsuptionModule { }
