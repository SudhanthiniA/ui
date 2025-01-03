import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Flb6FormRoutingModule } from './flb6-form-routing.module';
import { Flb6FormComponent } from './flb6-form.component';
import { Addflb6FormComponent } from './addflb6-form/addflb6-form.component';
import { Viewflb6FormComponent } from './viewflb6-form/viewflb6-form.component';

@NgModule({
  declarations: [Flb6FormComponent, Addflb6FormComponent, Viewflb6FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    Flb6FormRoutingModule
  ]
})
export class Flb6FormModule { }
