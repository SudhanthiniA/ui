import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TransportpassRoutingModule } from './receiptack-routing.module';
import { ReceiptackComponent } from './receiptack.component';
import { ParentunitComponent } from './parentunit/parentunit.component';
import { BwhtrasnportpassComponent } from './bwhtrasnportpass/bwhtrasnportpass.component';
import { ViewrequisitionoftransportpassComponent } from './bwhtrasnportpass/viewrequisitionoftransportpass/viewrequisitionoftransportpass.component';
import { WholesaleComponent } from './wholesale/wholesale.component';
import { RetailgbrComponent } from './retailhbr/retailgbr.component';

@NgModule({
  declarations: [RetailgbrComponent,WholesaleComponent,ReceiptackComponent, ParentunitComponent, BwhtrasnportpassComponent,ViewrequisitionoftransportpassComponent],
  imports: [
    CommonModule,
    TransportpassRoutingModule,
    SharedModule
  ]
})
export class ReceiptackModule { }
