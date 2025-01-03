import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BrandregistrationRoutingModule } from './brandregistration-routing.module';
import { BrandregistrationComponent } from './brandregistration.component';
import { AddbrandregistrationComponent } from './addbrandregistration/addbrandregistration.component';
import { ViewbrandregistrationComponent } from './viewbrandregistration/viewbrandregistration.component';

@NgModule({
  declarations: [BrandregistrationComponent, AddbrandregistrationComponent, ViewbrandregistrationComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrandregistrationRoutingModule
  ]
})
export class BrandregistrationModule { }
