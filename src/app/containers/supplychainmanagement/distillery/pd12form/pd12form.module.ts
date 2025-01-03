import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Pd12formRoutingModule } from './pd12form-routing.module';
import { Pd12formComponent } from './pd12form.component';
import { Addpd12formComponent } from './addpd12form/addpd12form.component';
import { Viewpd12formComponent } from './viewpd12form/viewpd12form.component';


@NgModule({
  declarations: [Pd12formComponent, Addpd12formComponent, Viewpd12formComponent],
  imports: [
    CommonModule,
    Pd12formRoutingModule,
    SharedModule
  ]
})
export class Pd12formModule { }
