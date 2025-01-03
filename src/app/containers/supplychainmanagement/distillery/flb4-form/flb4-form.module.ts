import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Flb4FormRoutingModule } from './flb4-form-routing.module';
import { Flb4FormComponent } from './flb4-form.component';
import { Addflb4FormComponent } from './addflb4-form/addflb4-form.component';
import { Viewflb4FormComponent } from './viewflb4-form/viewflb4-form.component';

@NgModule({
  declarations: [Flb4FormComponent, Addflb4FormComponent, Viewflb4FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    Flb4FormRoutingModule
  ]
})
export class Flb4FormModule { }
