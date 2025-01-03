import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SugarmillLicenseComponent } from './sugarmill-license.component';
import { SugarmillLicenseRoutingModule } from './sugarmill-license-routing.module';
import { SugarmillLicenseFormComponent } from './sugarmill-license-form/sugarmill-license-form.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { IndustriesinsideupComponent } from './industriesinsideup/industriesinsideup.component';
import { TreadersforexportComponent } from './treadersforexport/treadersforexport.component';
import { ViewtreadersforexportComponent } from './treadersforexport/viewtreadersforexport/viewtreadersforexport.component';

@NgModule({
  declarations: [
    SugarmillLicenseComponent,
    SugarmillLicenseFormComponent,
    AcknowledgementComponent,
    IndustriesinsideupComponent,
    TreadersforexportComponent,
    ViewtreadersforexportComponent
  ],
  imports: [
    CommonModule,
    SugarmillLicenseRoutingModule,
    SharedModule
  ]
})
export class SugarmillLicenseModule { }
