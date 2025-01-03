import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Pd8FormRoutingModule } from './pd8-form-routing.module';
import { Pd8FormComponent } from './pd8-form.component';
import { Addpd8FormComponent } from './addpd8-form/addpd8-form.component';
import { Viewpd8FormComponent } from './viewpd8-form/viewpd8-form.component';

@NgModule({
  declarations: [
    Pd8FormComponent, 
    Addpd8FormComponent, 
    Viewpd8FormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    Pd8FormRoutingModule
  ]
})
export class Pd8FormModule { }
