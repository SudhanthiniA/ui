import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { B4FormRoutingModule } from './b4-form-routing.module';
import { B4FormComponent } from './b4-form.component';
import { Addb4FormComponent } from './addb4-form/addb4-form.component';
import { Viewb4FormComponent } from './viewb4-form/viewb4-form.component';



@NgModule({
  declarations: [B4FormComponent, Addb4FormComponent, Viewb4FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    B4FormRoutingModule
  ]
})
export class B4FormModule { }
