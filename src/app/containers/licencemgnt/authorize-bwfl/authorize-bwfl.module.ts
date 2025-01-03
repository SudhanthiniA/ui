import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseSharedModule } from '@appLicMgnt/license-shared.module';

import { AuthorizeBwflRoutingModule } from './authorize-bwfl-routing.module';
import { AuthorizeBwflLandingComponent } from './authorize-bwfl-landing/authorize-bwfl-landing.component';
import { AuthorizeBwflPersonComponent } from './authorize-bwfl-person/authorize-bwfl-person.component';
import { ViewAuthorizedBwflPersonComponent } from './view-authorized-bwfl-person/view-authorized-bwfl-person.component';


@NgModule({
  declarations: [
    AuthorizeBwflLandingComponent,
    AuthorizeBwflPersonComponent,
    ViewAuthorizedBwflPersonComponent
  ],
  imports: [
    CommonModule,
    LicenseSharedModule,
    AuthorizeBwflRoutingModule
  ]
})
export class AuthorizeBwflModule { }
