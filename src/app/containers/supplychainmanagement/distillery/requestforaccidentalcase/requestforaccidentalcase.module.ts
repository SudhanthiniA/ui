import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestforaccidentalcaseRoutingModule } from './requestforaccidentalcase-routing.module';


import { AddrequestforaccidentalcaseComponent } from './addrequestforaccidentalcase/addrequestforaccidentalcase.component';
import { ViewrequestforaccidentalcaseComponent } from './viewrequestforaccidentalcase/viewrequestforaccidentalcase.component';
import { RequestforaccidentalcaseComponent } from './requestforaccidentalcase.component';
import { SharedModule } from '@appThemeShared/shared.module';;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AddrequestforaccidentalcaseComponent, ViewrequestforaccidentalcaseComponent,  RequestforaccidentalcaseComponent],
  imports: [
    CommonModule,
    RequestforaccidentalcaseRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class RequestforaccidentalcaseModule { }
