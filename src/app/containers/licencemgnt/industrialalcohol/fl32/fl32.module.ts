import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Fl32RoutingModule } from './fl32-routing.module';
import { Fl32Component } from './fl32.component';


@NgModule({
  declarations: [Fl32Component],
  imports: [
    CommonModule,
    SharedModule,
    Fl32RoutingModule
  ]
})
export class Fl32Module { }
