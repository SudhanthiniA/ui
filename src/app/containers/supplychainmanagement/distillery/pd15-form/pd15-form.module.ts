import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Pd15FormRoutingModule } from './pd15-form-routing.module';
import { Pd15FormComponent } from './pd15-form.component';
import { Addpd15FormComponent } from './addpd15-form/addpd15-form.component';
import { Viewpd15FormComponent } from './viewpd15-form/viewpd15-form.component';

@NgModule({
  declarations: [Pd15FormComponent, Addpd15FormComponent, Viewpd15FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd15FormRoutingModule
  ]
})
export class Pd15FormModule { }
