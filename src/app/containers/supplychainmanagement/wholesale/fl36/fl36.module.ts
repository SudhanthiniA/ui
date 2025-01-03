import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Fl36RoutingModule } from './fl36-routing.module';
import { Fl36Component } from './fl36.component';


@NgModule({
  declarations: [Fl36Component],
  imports: [
    CommonModule,
    Fl36RoutingModule,
    SharedModule
  ]
})
export class Fl36Module { }
