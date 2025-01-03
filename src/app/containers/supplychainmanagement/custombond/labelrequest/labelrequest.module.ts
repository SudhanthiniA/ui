import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { LabelrequestComponent } from './labelrequest.component';
import { AddlabelrequestComponent } from './addlabelrequest/addlabelrequest.component';
import { ViewlabelrequestComponent } from './viewlabelrequest/viewlabelrequest.component';
import { LabelrequestRoutingModule } from './labelrequest-routing.module';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [LabelrequestComponent, AddlabelrequestComponent, ViewlabelrequestComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    LabelrequestRoutingModule,
  ]
})
export class LabelrequestModule { }
