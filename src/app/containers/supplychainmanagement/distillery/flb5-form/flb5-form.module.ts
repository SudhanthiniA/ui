import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Flb5FormRoutingModule } from './flb5-form-routing.module';
import { Flb5FormComponent } from './flb5-form.component';
import { Addflb5FormComponent } from './addflb5-form/addflb5-form.component';
import { Viewflb5FormComponent } from './viewflb5-form/viewflb5-form.component';

@NgModule({
  declarations: [Flb5FormComponent, Addflb5FormComponent, Viewflb5FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    Flb5FormRoutingModule
  ]
})
export class Flb5FormModule { }
