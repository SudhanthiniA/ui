import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Flb11FormRoutingModule } from './flb11-form-routing.module';
import { Flb11FormComponent } from './flb11-form.component';
import { Addflb11FormComponent } from './addflb11-form/addflb11-form.component';
import { Viewflb11FormComponent } from './viewflb11-form/viewflb11-form.component';



@NgModule({
  declarations: [Flb11FormComponent, Addflb11FormComponent, Viewflb11FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    Flb11FormRoutingModule
  ]
})
export class Flb11FormModule { }
