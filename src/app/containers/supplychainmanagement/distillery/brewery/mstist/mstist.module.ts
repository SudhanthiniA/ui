import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { MstistRoutingModule } from './mstist-routing.module';
import { MstistComponent } from './mstist.component';
import { AddmstistComponent } from './addmstist/addmstist.component';
import { ViewmstistComponent } from './viewmstist/viewmstist.component';
import { VerificationmstistComponent } from './verificationmstist/verificationmstist.component';
import { ReportComponent } from './report/report.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [MstistComponent, AddmstistComponent, ViewmstistComponent, VerificationmstistComponent, ReportComponent, PaymentComponent],
  imports: [
    CommonModule,
    MstistRoutingModule,
    SharedModule
  ]
})
export class MstistModule { }
