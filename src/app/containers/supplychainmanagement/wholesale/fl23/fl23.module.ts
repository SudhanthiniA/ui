import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Fl23RoutingModule } from './fl23-routing.module';
import { Fl23Component } from './fl23.component';


@NgModule({
  declarations: [Fl23Component],
  imports: [
    CommonModule,
    Fl23RoutingModule,
    SharedModule
  ]
})
export class Fl23Module { }
