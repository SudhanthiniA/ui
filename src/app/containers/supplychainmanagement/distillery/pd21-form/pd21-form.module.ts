import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Pd21FormRoutingModule } from './pd21-form-routing.module';
import { Pd21FormComponent } from './pd21-form.component';
import { Addpd21FormComponent } from './addpd21-form/addpd21-form.component';
import { Viewpd21FormComponent } from './viewpd21-form/viewpd21-form.component';



@NgModule({
  declarations: [Pd21FormComponent, Addpd21FormComponent, Viewpd21FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd21FormRoutingModule
  ]
})
export class Pd21FormModule { }
