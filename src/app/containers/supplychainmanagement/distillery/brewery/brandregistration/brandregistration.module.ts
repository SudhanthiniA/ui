import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddbrandregistrationComponent } from './addbrandregistration/addbrandregistration.component';
import { ViewbrandregistrationComponent } from './viewbrandregistration/viewbrandregistration.component';

import { BrandregistrationRoutingModule} from './brandregistration-routing.module';

import { BrandregistrationComponent } from './brandregistration.component';
@NgModule({
  declarations: [AddbrandregistrationComponent, ViewbrandregistrationComponent,BrandregistrationComponent],
  imports: [
    CommonModule,
    BrandregistrationRoutingModule,
    SharedModule
  ]
})
export class BrandregistrationModule { }
