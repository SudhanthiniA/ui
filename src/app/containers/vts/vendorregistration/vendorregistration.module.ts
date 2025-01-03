import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorregistrationRoutingModule } from './vendorregistration-routing.module';
import { VendorregistrationComponent } from './vendorregistration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [VendorregistrationComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    VendorregistrationRoutingModule,
    SharedModule
  ]
})
export class VendorregistrationModule { }
