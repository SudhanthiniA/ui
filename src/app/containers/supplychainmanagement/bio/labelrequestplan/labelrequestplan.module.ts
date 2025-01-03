import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { LabelrequestplanRoutingModule } from './labelrequestplan-routing.module';
import { LabelrequestplanComponent } from './labelrequestplan.component';
import { AddlabelrequestplanComponent } from './addlabelrequestplan/addlabelrequestplan.component';
import { ViewlabelrequestplanComponent } from './viewlabelrequestplan/viewlabelrequestplan.component';
import { ApprovallabelrequestplanComponent } from './approvallabelrequestplan/approvallabelrequestplan.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [LabelrequestplanComponent,AddlabelrequestplanComponent,ViewlabelrequestplanComponent,ApprovallabelrequestplanComponent,
    PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    LabelrequestplanRoutingModule
  ]
})
export class LabelrequestplanModule { }
