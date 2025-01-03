import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseSharedModule } from '@appLicMgnt/license-shared.module';

import { RegistrationofunitsoutsideupforcsdsupplyRoutingModule } from './registrationofunitsoutsideupforcsdsupply-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    RegistrationofunitsoutsideupforcsdsupplyRoutingModule,
    LicenseSharedModule
  ]
})
export class RegistrationofunitsoutsideupforcsdsupplyModule { }
