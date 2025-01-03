import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Fl33RoutingModule } from './fl33-routing.module';
import { Fl33Component } from './fl33.component';
import { Viewformfl33Component } from './viewformfl33/viewformfl33.component';
import { Addformfl33Component } from './addformfl33/addformfl33.component';


@NgModule({
  declarations: [Fl33Component, Viewformfl33Component, Addformfl33Component],
  imports: [
    CommonModule,
    Fl33RoutingModule,
    SharedModule
  ]
})
export class Fl33Module { }
