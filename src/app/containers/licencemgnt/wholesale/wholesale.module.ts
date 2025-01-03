import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseSharedModule } from '@appLicMgnt/license-shared.module';

import { WholesaleRoutingModule } from './wholesale-routing.module';
import { WholesaleLandingComponent } from './wholesale-landing/wholesale-landing.component';
import { WholesaleLicenseFormComponent } from './wholesale-license-form/wholesale-license-form.component';
import { WholesaleLicenseViewComponent } from './wholesale-license-view/wholesale-license-view.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    WholesaleLandingComponent,
    WholesaleLicenseFormComponent,
    WholesaleLicenseViewComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    WholesaleRoutingModule,
    LicenseSharedModule
  ]
})
export class WholesaleModule { }
