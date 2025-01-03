import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

import { Pd29FormRoutingModule } from './pd29-form-routing.module';
import { Pd29FormComponent } from './pd29-form.component';
import { Addpd29FormComponent } from './addpd29-form/addpd29-form.component';
import { Viewpd29FormComponent } from './viewpd29-form/viewpd29-form.component';



@NgModule({
  declarations: [Pd29FormComponent, Addpd29FormComponent, Viewpd29FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd29FormRoutingModule
  ]
})
export class Pd29FormModule { }
