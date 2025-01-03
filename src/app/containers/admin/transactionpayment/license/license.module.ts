import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LicenseRoutingModule } from './license-routing.module';
import { LicenseComponent } from './license.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [LicenseComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    LicenseRoutingModule
  ]
})
export class LicenseModule { }
