import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {PaymentmisRoutingModule} from './paymentmis-routing.module';
import { PaymentmisComponent } from './paymentmis.component';
import { ViewpaymentmisComponent } from './viewpaymentmis/viewpaymentmis.component';
import { SubviewpaymentmisComponent } from './subviewpaymentmis/subviewpaymentmis.component';
import { Sub1viewpaymentmisComponent } from './sub1viewpaymentmis/sub1viewpaymentmis.component';
import { Sub2viewpaymentmisComponent } from './sub2viewpaymentmis/sub2viewpaymentmis.component';



@NgModule({
  declarations: [PaymentmisComponent, ViewpaymentmisComponent, SubviewpaymentmisComponent, Sub1viewpaymentmisComponent, Sub2viewpaymentmisComponent],
  imports: [
    CommonModule,
    SharedModule,
    PaymentmisRoutingModule
  ]
})
export class PaymentmisModule { }
