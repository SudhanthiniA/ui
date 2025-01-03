import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Pd23FormRoutingModule } from './pd23-form-routing.module';
import { Pd23FormComponent } from './pd23-form.component';
import { Addpd23FormComponent } from './addpd23-form/addpd23-form.component';
import { Viewpd23FormComponent } from './viewpd23-form/viewpd23-form.component';

@NgModule({
  declarations: [Pd23FormComponent, Addpd23FormComponent, Viewpd23FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd23FormRoutingModule
  ]
})
export class Pd23FormModule { }
