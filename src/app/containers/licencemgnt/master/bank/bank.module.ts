import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { BankRoutingModule } from './bank-routing.module';
import { BankComponent } from './bank.component';
import { ViewbankComponent } from './viewbank/viewbank.component';



@NgModule({
  declarations: [BankComponent, ViewbankComponent,],
  imports: [
    CommonModule,
    SharedModule,
    BankRoutingModule
  ]
})
export class BankModule { }
