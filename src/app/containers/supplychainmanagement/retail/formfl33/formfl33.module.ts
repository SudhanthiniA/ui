import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Formfl33RoutingModule } from './formfl33-routing.module';
import { Formfl33Component } from './formfl33.component';
import { Viewformfl33Component } from './viewformfl33/viewformfl33.component';
import { Addformfl33Component } from './addformfl33/addformfl33.component';


@NgModule({
  declarations: [Formfl33Component, Viewformfl33Component, Addformfl33Component],
  imports: [
    CommonModule,
    Formfl33RoutingModule,
    SharedModule
  ]
})
export class Formfl33Module { }
