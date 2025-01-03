import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewlicenserenewalparentunitComponent } from './viewlicenserenewalparentunit/viewlicenserenewalparentunit.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { LicenserenewalparentunitRoutingModule } from './licenserenewalparentunit-routing.module';
import { LicenserenewalparentunitComponent } from './licenserenewalparentunit.component';

@NgModule({
  declarations: [LicenserenewalparentunitComponent, ViewlicenserenewalparentunitComponent],
  imports: [
    CommonModule,
    SharedModule,
    LicenserenewalparentunitRoutingModule
  ]
})
export class LicenserenewalparentunitModule { }

