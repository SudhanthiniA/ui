import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MakepaymentRoutingModule } from './makepayment-routing.module';
import { MakepaymentComponent } from './makepayment.component';
import { ViewmakepaymentComponent } from './viewmakepayment/viewmakepayment.component';
import { AddpaymentComponent } from './addpayment/addpayment.component';

@NgModule({
  declarations: [ MakepaymentComponent, ViewmakepaymentComponent, AddpaymentComponent],
  imports: [
    CommonModule,
    MakepaymentRoutingModule,
    SharedModule
  ]
})
export class MakepaymentModule { }
