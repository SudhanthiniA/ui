import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LicensetenureRoutingModule } from './licensetenure-routing.module';
import { LicensetenureComponent } from './licensetenure.component';
import { ViewlicensetenureComponent } from './viewlicensetenure/viewlicensetenure.component';
import { AddlicensetenureComponent } from './addlicensetenure/addlicensetenure.component';



@NgModule({
  declarations: [LicensetenureComponent, ViewlicensetenureComponent, AddlicensetenureComponent],
  imports: [
    CommonModule,
    LicensetenureRoutingModule,
    SharedModule
  ]
})
export class LicensetenureModule { }
