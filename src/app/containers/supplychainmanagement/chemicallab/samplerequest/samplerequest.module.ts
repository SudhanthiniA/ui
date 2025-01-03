import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SamplerequestRoutingModule } from './samplerequest-routing.module';
import { SamplerequestComponent } from './samplerequest.component';
import { AddrequestComponent } from './addrequest/addrequest.component';
import { ViewrequestComponent } from './viewrequest/viewrequest.component';
import { ApprovallistComponent } from './approvallist/approvallist.component';
import { ApprovalviewComponent } from './approvalview/approvalview.component';
import { AcceptancelistComponent } from './acceptancelist/acceptancelist.component';
import { AcceptanceviewComponent } from './acceptanceview/acceptanceview.component';
import { PaymentComponent } from './payment/payment.component';


 
@NgModule({
  declarations: [AcceptancelistComponent,AcceptanceviewComponent,SamplerequestComponent, AddrequestComponent, ViewrequestComponent, ApprovallistComponent, ApprovalviewComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    SamplerequestRoutingModule
  ]
})
export class SamplerequestModule { }
