import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Formfl30RoutingModule } from './formfl30-routing.module';
import { Formfl30Component } from './formfl30.component';
import { Addformfl30Component } from './addformfl30/addformfl30.component';
import { Viewformfl30Component } from './viewformfl30/viewformfl30.component';


@NgModule({
  declarations: [Formfl30Component, Addformfl30Component, Viewformfl30Component],
  imports: [
    CommonModule,
    SharedModule,
    Formfl30RoutingModule
  ]
})
export class Formfl30Module { }
