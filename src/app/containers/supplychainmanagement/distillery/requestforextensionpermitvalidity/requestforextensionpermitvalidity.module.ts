import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestforextensionpermitvalidityRoutingModule } from './requestforextensionpermitvalidity-routing.module';

import { AddrequestforextensionpermitvalidityComponent } from './addrequestforextensionpermitvalidity/addrequestforextensionpermitvalidity.component';
import { ViewrequestforextensionpermitvalidityComponent } from './viewrequestforextensionpermitvalidity/viewrequestforextensionpermitvalidity.component';
import { RequestforextensionpermitvalidityComponent } from './requestforextensionpermitvalidity.component';
import { SharedModule } from '@appThemeShared/shared.module';;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AddrequestforextensionpermitvalidityComponent, ViewrequestforextensionpermitvalidityComponent,  RequestforextensionpermitvalidityComponent],
  imports: [
    CommonModule,
    RequestforextensionpermitvalidityRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class RequestforextensionpermitvalidityModule { }
