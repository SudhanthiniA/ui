import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ConsignmentreceiptRoutingModule } from './consignmentreceipt-routing.module';
import { ConsignmentreceiptComponent } from './consignmentreceipt.component';
import { ViewconsignmentreceiptComponent } from './viewconsignmentreceipt/viewconsignmentreceipt.component';
import { AddeditconsignmentreceiptComponent } from './addeditconsignmentreceipt/addeditconsignmentreceipt.component';



@NgModule({
  declarations: [ ConsignmentreceiptComponent, AddeditconsignmentreceiptComponent, ViewconsignmentreceiptComponent],
  imports: [
    CommonModule,
    SharedModule,
    ConsignmentreceiptRoutingModule,
    NgbModule
  ]
})
export class ConsignmentreceiptModule { }
