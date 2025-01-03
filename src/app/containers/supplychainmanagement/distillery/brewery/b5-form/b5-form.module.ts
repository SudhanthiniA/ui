import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { B5FormRoutingModule } from './b5-form-routing.module';
import { B5FormComponent } from './b5-form.component';
import { Addb5FormComponent } from './addb5-form/addb5-form.component';
import { Viewb5FormComponent } from './viewb5-form/viewb5-form.component';

@NgModule({
  declarations: [B5FormComponent, Addb5FormComponent, Viewb5FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    B5FormRoutingModule
  ]
})
export class B5FormModule { }
