import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Pd2RoutingModule } from './pd2-routing.module';
import { Pd2Component } from './pd2.component';
import { Addpd2Component } from './addpd2/addpd2.component';
import { Viewpd2Component } from './viewpd2/viewpd2.component';

  

@NgModule({
  declarations: [Pd2Component, Addpd2Component, Viewpd2Component],
  imports: [
    CommonModule,
    SharedModule,
    Pd2RoutingModule
  ]
})
export class Pd2Module { }
