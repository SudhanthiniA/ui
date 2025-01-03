import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Pd32FormRoutingModule } from './pd32-form-routing.module';
import { Pd32FormComponent } from './pd32-form.component';
import { Addpd32FormComponent } from './addpd32-form/addpd32-form.component';
import { Viewpd32FormComponent } from './viewpd32-form/viewpd32-form.component';

@NgModule({
  declarations: [Pd32FormComponent, Addpd32FormComponent, Viewpd32FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd32FormRoutingModule
  ]
})
export class Pd32FormModule { }
