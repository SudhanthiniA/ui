import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseSharedModule } from '@appLicMgnt/license-shared.module';

import { BwflRoutingModule } from './bwfl-routing.module';
import { BwflLicenseViewComponent } from './bwfl-license-view/bwfl-license-view.component';
import { BwflLandingComponent } from './bwfl-landing/bwfl-landing.component';
import { BwflLicenseFormComponent } from './bwfl-license-form/bwfl-license-form.component';
import { Bwfl2a2b2c2dComponent } from './bwfl2a2b2c2d/bwfl2a2b2c2d.component';

@NgModule({
  declarations: [
    BwflLicenseViewComponent,
    BwflLandingComponent,
    BwflLicenseFormComponent,
    Bwfl2a2b2c2dComponent
  ],
  imports: [
    CommonModule,
    BwflRoutingModule,
    LicenseSharedModule
  ]
})
export class BwflModule { }
