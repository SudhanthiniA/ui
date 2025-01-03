import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LicenseapplicenseregRoutingModule } from './licenseapplicensereg-routing.module';
import { LicenseapplicenseregComponent } from './licenseapplicensereg.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [LicenseapplicenseregComponent, ViewComponent],
  imports: [
    CommonModule,
    LicenseapplicenseregRoutingModule,
    SharedModule
  ]
})
export class LicenseapplicenseregModule { }
