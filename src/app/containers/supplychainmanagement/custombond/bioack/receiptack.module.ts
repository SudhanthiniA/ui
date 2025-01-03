import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Fl36RoutingModule } from './receiptack-routing.module';
import { Fl36Component } from './receiptack.component';
import { Acknowledgementfl36Component } from './view/acknowledgementfl36.component';



@NgModule({
  declarations: [Fl36Component, Acknowledgementfl36Component,],
  imports: [
    CommonModule,
    SharedModule,
    Fl36RoutingModule
  ]
})
export class Fl36Module { }
