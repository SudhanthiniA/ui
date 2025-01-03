import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { FinancialchallandepositRoutingModule } from './financialchallandeposit-routing.module';
import { FinancialchallandepositComponent } from './financialchallandeposit.component';
import { AddfinancialchallandepositComponent } from './addfinancialchallandeposit/addfinancialchallandeposit.component';
import { ViewfinancialchallandepositComponent } from './viewfinancialchallandeposit/viewfinancialchallandeposit.component';

@NgModule({
  declarations: [FinancialchallandepositComponent, AddfinancialchallandepositComponent, ViewfinancialchallandepositComponent],
  imports: [
    CommonModule,
    SharedModule,
    FinancialchallandepositRoutingModule
  ]
})
export class FinancialchallandepositModule { }
