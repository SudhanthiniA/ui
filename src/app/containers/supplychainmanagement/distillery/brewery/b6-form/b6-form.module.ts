import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { B6FormRoutingModule } from './b6-form-routing.module';
import { B6FormComponent } from './b6-form.component';
import { Addb6FormComponent } from './addb6-form/addb6-form.component';
import { Viewb6FormComponent } from './viewb6-form/viewb6-form.component';

@NgModule({
  declarations: [B6FormComponent, Addb6FormComponent, Viewb6FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    B6FormRoutingModule
  ]
})
export class B6FormModule { }
