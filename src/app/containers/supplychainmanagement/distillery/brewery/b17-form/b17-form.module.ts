import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { B17FormRoutingModule } from './b17-form-routing.module';
import { B17FormComponent } from './b17-form.component';
import { Addb17FormComponent } from './addb17-form/addb17-form.component';
import { Viewb17FormComponent } from './viewb17-form/viewb17-form.component';



@NgModule({
  declarations: [B17FormComponent, Addb17FormComponent, Viewb17FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    B17FormRoutingModule
  ]
})
export class B17FormModule { }
