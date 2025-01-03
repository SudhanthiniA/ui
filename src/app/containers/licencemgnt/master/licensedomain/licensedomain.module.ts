import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { LicensedomainRoutingModule } from './licensedomain-routing.module';
import { LicensedomainComponent } from './licensedomain.component';
import { ViewlicensedomainComponent } from './viewlicensedomain/viewlicensedomain.component';



@NgModule({
  declarations: [LicensedomainComponent, ViewlicensedomainComponent,],
  imports: [
    CommonModule,
    SharedModule,
    LicensedomainRoutingModule
  ]
})
export class LicensedomainModule { }
