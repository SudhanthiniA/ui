import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LicensefeelicregRoutingModule } from './licensefeelicreg-routing.module';
import { LicensefeelicregComponent } from './licensefeelicreg.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [LicensefeelicregComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    LicensefeelicregRoutingModule
  ]
})
export class LicensefeelicregModule { }
