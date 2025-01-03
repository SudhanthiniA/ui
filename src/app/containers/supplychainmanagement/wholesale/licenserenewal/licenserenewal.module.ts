import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LicenserenewalRoutingModule } from './licenserenewal-routing.module';
import { LicenserenewalComponent } from './licenserenewal.component';
import { AddlicenseComponent } from './addlicense/addlicense.component';
import { ViewlicenserenewalComponent } from './viewlicenserenewal/viewlicenserenewal.component';


@NgModule({
  declarations: [LicenserenewalComponent, AddlicenseComponent, ViewlicenserenewalComponent],
  imports: [
    CommonModule,
    SharedModule,
    LicenserenewalRoutingModule
  ]
})
export class LicenserenewalModule { }
