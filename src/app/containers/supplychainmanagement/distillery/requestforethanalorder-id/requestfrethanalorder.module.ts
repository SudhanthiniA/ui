import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestforethanalorderRoutingModule } from './requestforethanalorder-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RequestforethanalorderIDComponent } from './requestforethanalorder-id.component';
import { AddrequestforethanalComponent } from './addrequestforethanal/addrequestforethanal.component';
import { ViewrequestforethanalComponent } from './viewrequestforethanal/viewrequestforethanal.component';
import { PaymentComponent } from './payment/payment.component';
import { ApprovalrequestforeodComponent } from './approvalrequestforeod/approvalrequestforeod.component';

@NgModule({
  declarations: [RequestforethanalorderIDComponent, AddrequestforethanalComponent, ViewrequestforethanalComponent, PaymentComponent, ApprovalrequestforeodComponent],
  imports: [
    CommonModule,
    RequestforethanalorderRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class RequestfrethanalorderModule { }
