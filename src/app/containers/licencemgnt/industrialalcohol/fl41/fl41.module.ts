import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Fl41RoutingModule } from './fl41-routing.module';
import { Fl41Component } from './fl41.component';


@NgModule({
  declarations: [Fl41Component],
  imports: [
    CommonModule,
    SharedModule,
    Fl41RoutingModule
  ]
})
export class Fl41Module { }
