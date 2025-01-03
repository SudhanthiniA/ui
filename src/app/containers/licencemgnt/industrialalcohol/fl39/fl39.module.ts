import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Fl39RoutingModule } from './fl39-routing.module';
import { Fl39Component } from './fl39.component';


@NgModule({
  declarations: [Fl39Component],
  imports: [
    CommonModule,
    SharedModule,
    Fl39RoutingModule
  ]
})
export class Fl39Module { }
