import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { TransactionlistRoutingModule } from './transactionlist-routing.module';
import { TransactionlistComponent } from './transactionlist.component';
import { TransactiondetailsComponent } from './transactiondetails/transactiondetails.component';


@NgModule({
  declarations: [TransactionlistComponent, TransactiondetailsComponent],
  imports: [
    CommonModule,
    TransactionlistRoutingModule,
    SharedModule
  ]
})
export class TransactionlistModule { }
