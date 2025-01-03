import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseSharedModule } from '@appLicMgnt/license-shared.module';

import { Fl8RoutingModule } from './fl8-routing.module';

import { Fl8Component } from './fl8.component';
import { Viewfl8Component } from './viewfl8/viewfl8.component';


@NgModule({
  declarations: [
    Fl8Component,
    Viewfl8Component
  ],
  imports: [
    CommonModule,
    LicenseSharedModule,
    Fl8RoutingModule
  ]
})
export class Fl8Module { }
