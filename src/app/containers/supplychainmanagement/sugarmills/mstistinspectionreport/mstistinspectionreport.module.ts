import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { MstistinspectionreportComponent } from './mstistinspectionreport.component';
import { AddmstistinspectionComponent } from './addmstistinspection/addmstistinspection.component';
import { ViewmstistinspectionComponent } from './viewmstistinspection/viewmstistinspection.component';
import { MstistinspectionreportRoutingModule } from './mstistinspectionreport-routing.module';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [MstistinspectionreportComponent, AddmstistinspectionComponent, ViewmstistinspectionComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    MstistinspectionreportRoutingModule
  ]
})
export class MstistinspectionreportModule { }
