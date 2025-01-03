import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Pd13FormRoutingModule } from './pd13-form-routing.module';
import { Pd13FormComponent } from './pd13-form.component';
import { Addpd13FormComponent } from './addpd13-form/addpd13-form.component';
import { Viewpd13FormComponent } from './viewpd13-form/viewpd13-form.component';


@NgModule({
  declarations: [Pd13FormComponent, Addpd13FormComponent, Viewpd13FormComponent],
  imports: [
    CommonModule,
    Pd13FormRoutingModule,
    SharedModule
  ]
})
export class Pd13FormModule { }
