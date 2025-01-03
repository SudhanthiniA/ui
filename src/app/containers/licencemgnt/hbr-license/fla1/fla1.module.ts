import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseSharedModule } from '@appLicMgnt/license-shared.module';

import { Fla1RoutingModule } from './fla1-routing.module';

import { Fla1Component } from './fla1.component';
import { Viewfla1Component } from './viewfla1/viewfla1.component';


@NgModule({
  declarations: [
    Fla1Component,
    Viewfla1Component
  ],
  imports: [
    CommonModule,
    LicenseSharedModule,
    Fla1RoutingModule
  ]
})
export class Fla1Module { }
