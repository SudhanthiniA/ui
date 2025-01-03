import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ConsignmentreceiptRoutingModule } from './consignmentreceipt-routing.module';
import { ConsignmentreceiptComponent } from './consignmentreceipt.component';
import { ViewconsignmentreceiptComponent } from './viewconsignmentreceipt/viewconsignmentreceipt.component';


@NgModule({
  declarations: [ConsignmentreceiptComponent, ViewconsignmentreceiptComponent],
  imports: [
    CommonModule,
    SharedModule,
    ConsignmentreceiptRoutingModule
  ]
})
export class ConsignmentreceiptModule { }
