import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Pd4FormRoutingModule } from './pd4-form-routing.module';
import { Pd4FormComponent } from './pd4-form.component';
import { Addpd4FormComponent } from './addpd4-form/addpd4-form.component';
import { Viewpd4FormComponent } from './viewpd4-form/viewpd4-form.component';


@NgModule({
  declarations: [Pd4FormComponent, Addpd4FormComponent, Viewpd4FormComponent],
  imports: [
    CommonModule,
    Pd4FormRoutingModule,
    SharedModule
  ]
})
export class Pd4FormModule { }
