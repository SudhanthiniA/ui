import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { RetailtransferreportRoutingModule } from './retailtransferreport-routing.module';
import { RetailtransferreportComponent } from './retailtransferreport.component';
import { ViewretailtransferreportComponent } from './viewretailtransferreport/viewretailtransferreport.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewpaymentComponent } from './viewpayment/viewpayment.component';



@NgModule({
  declarations: [RetailtransferreportComponent, ViewretailtransferreportComponent, PaymentComponent, ViewpaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    RetailtransferreportRoutingModule
  ]
})
export class RetailtransferreportModule { }
