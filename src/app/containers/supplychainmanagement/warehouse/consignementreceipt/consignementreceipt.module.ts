import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ConsignementreceiptRoutingModule } from './consignementreceipt-routing.module';
import { ConsignementreceiptComponent } from './consignementreceipt.component';


@NgModule({
  declarations: [ConsignementreceiptComponent],
  imports: [
    CommonModule,
    ConsignementreceiptRoutingModule,
    SharedModule
  ]
})
export class ConsignementreceiptModule { }
