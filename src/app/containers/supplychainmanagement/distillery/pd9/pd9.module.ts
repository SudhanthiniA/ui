import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Pd9RoutingModule } from './pd9-routing.module';
import { Pd9Component } from './pd9.component';
import { Addpd9Component } from './addpd9/addpd9.component';
import { Viewpd9Component } from './viewpd9/viewpd9.component';


@NgModule({
  declarations: [Pd9Component, Addpd9Component, Viewpd9Component],
  imports: [
    CommonModule,
    Pd9RoutingModule,
    SharedModule
  ]
})
export class Pd9Module { }
