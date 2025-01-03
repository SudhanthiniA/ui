import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Pd30FormRoutingModule } from './pd30-form-routing.module';
import { Pd30FormComponent } from './pd30-form.component';
import { Addpd30FormComponent } from './addpd30-form/addpd30-form.component';
import { Viewpd30FormComponent } from './viewpd30-form/viewpd30-form.component';

@NgModule({
  declarations: [Pd30FormComponent, Addpd30FormComponent, Viewpd30FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd30FormRoutingModule
  ]
})
export class Pd30FormModule { }
