import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Pd27FormRoutingModule } from './pd27-form-routing.module';
import { Pd27FormComponent } from './pd27-form.component';
import { Addpd27FormComponent } from './addpd27-form/addpd27-form.component';
import { Viewpd27FormComponent } from './viewpd27-form/viewpd27-form.component';


@NgModule({
  declarations: [Pd27FormComponent, Addpd27FormComponent, Viewpd27FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd27FormRoutingModule
  ]
})
export class Pd27FormModule { }
