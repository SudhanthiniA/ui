import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AccidentalrequestRoutingModule } from './accidentalrequest-routing.module';
import { AccidentalrequestComponent } from './accidentalrequest.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [PaymentComponent,AccidentalrequestComponent, AddComponent, ViewComponent, AcknowledgementComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccidentalrequestRoutingModule
  ]
})
export class AccidentalrequestModule { }
