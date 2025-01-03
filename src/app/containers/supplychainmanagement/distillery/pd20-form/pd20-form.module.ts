import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Pd20FormRoutingModule } from './pd20-form-routing.module';
import { Pd20FormComponent } from './pd20-form.component';
import { Addpd20FormComponent } from './addpd20-form/addpd20-form.component';
import { Viewpd20FormComponent } from './viewpd20-form/viewpd20-form.component';


@NgModule({
  declarations: [Pd20FormComponent, Addpd20FormComponent, Viewpd20FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd20FormRoutingModule
  ]
})
export class Pd20FormModule { }
