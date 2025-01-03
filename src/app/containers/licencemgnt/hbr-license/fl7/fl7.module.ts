import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseSharedModule } from '@appLicMgnt/license-shared.module';

import { Fl7RoutingModule } from './fl7-routing.module';
import { Viewfl7Component } from './viewfl7/viewfl7.component';


@NgModule({
  declarations: [
    Viewfl7Component
  ],
  imports: [
    CommonModule,
    LicenseSharedModule,
    Fl7RoutingModule
  ]
})
export class Fl7Module { }
