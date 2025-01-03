import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Pd18FormRoutingModule } from './pd18-form-routing.module';
import { Pd18FormComponent } from './pd18-form.component';
import { Addpd18FormComponent } from './addpd18-form/addpd18-form.component';
import { Viewpd18FormComponent } from './viewpd18-form/viewpd18-form.component';

@NgModule({
  declarations: [Pd18FormComponent, Addpd18FormComponent, Viewpd18FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd18FormRoutingModule
  ]
})
export class Pd18FormModule { }
