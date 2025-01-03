import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BankRoutingModule } from './bank-routing.module';
import { BankComponent } from './bank.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component'; 

@NgModule({
  declarations: [BankComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BankRoutingModule
  ]
})
export class BankModule { }
