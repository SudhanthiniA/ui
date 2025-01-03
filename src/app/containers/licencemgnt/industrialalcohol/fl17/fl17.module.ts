import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Fl17RoutingModule } from './fl17-routing.module';
import { Fl17Component } from './fl17.component';


@NgModule({
  declarations: [Fl17Component],
  imports: [
    CommonModule,
    SharedModule,
    Fl17RoutingModule
  ]
})
export class Fl17Module { }
