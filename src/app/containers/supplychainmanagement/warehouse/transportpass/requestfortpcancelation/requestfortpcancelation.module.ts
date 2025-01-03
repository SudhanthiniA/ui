import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RequestfortpcancelationRoutingModule } from './requestfortpcancelation-routing.module';
import { RequestfortpcancelationComponent } from './requestfortpcancelation.component';
import { AddrequestfortpcancelationComponent } from './addrequestfortpcancelation/addrequestfortpcancelation.component';
import { ViewrequestfortpcancelationComponent } from './viewrequestfortpcancelation/viewrequestfortpcancelation.component';


@NgModule({
  declarations: [RequestfortpcancelationComponent, AddrequestfortpcancelationComponent, ViewrequestfortpcancelationComponent],
  imports: [
    CommonModule,
    RequestfortpcancelationRoutingModule,
    SharedModule
  ]
})
export class RequestfortpcancelationModule { }
