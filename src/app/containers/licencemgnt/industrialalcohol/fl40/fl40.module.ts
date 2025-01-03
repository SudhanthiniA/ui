import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Fl40RoutingModule } from './fl40-routing.module';
import { Fl40Component } from './fl40.component';


@NgModule({
  declarations: [Fl40Component],
  imports: [
    CommonModule,
    SharedModule,
    Fl40RoutingModule
  ]
})
export class Fl40Module { }
