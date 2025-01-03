import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseSharedModule } from '@appLicMgnt/license-shared.module';

import { HBRLicenseRoutingModule } from './hbr-license-routing.module';
import { HbrLicenseFormComponent } from './hbr-license-form/hbr-license-form.component';
import { HBRLandingComponent } from './hbr-landing/hbr-landing.component';
import { HbrLicenseViewComponent } from './hbr-license-view/hbr-license-view.component';
import { AddhbrlicenseComponent } from './addhbrlicense/addhbrlicense.component';
import { ViewhbrlicenseComponent } from './viewhbrlicense/viewhbrlicense.component';
import { Fl6Component } from './fl6/fl6.component';
import { Fl7Component } from './fl7/fl7.component';
import { Fl7aComponent } from './fl7a/fl7a.component';
import { Fl8Component } from './fl8/fl8.component';
import { Fla1Component } from './fla1/fla1.component';

@NgModule({
  declarations: [
    HbrLicenseFormComponent,
    HBRLandingComponent,
    HbrLicenseViewComponent,
    AddhbrlicenseComponent,
    ViewhbrlicenseComponent,
    Fl6Component,
    Fl7Component,
    Fl7aComponent,
    Fl8Component,
    Fla1Component
  ],
  imports: [
    CommonModule,
    LicenseSharedModule,
    HBRLicenseRoutingModule
  ]
})
export class HBRLicenseModule { }
