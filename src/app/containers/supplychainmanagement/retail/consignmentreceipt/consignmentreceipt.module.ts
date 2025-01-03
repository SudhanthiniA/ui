import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { ConsignmentreceiptRoutingModule } from './consignmentreceipt-routing.module';
import { ConsignmentreceiptComponent } from './consignmentreceipt.component';


@NgModule({
  declarations: [ConsignmentreceiptComponent],
  imports: [
    CommonModule,
    SharedModule,
    ConsignmentreceiptRoutingModule
  ]
})
export class ConsignmentreceiptModule { }
