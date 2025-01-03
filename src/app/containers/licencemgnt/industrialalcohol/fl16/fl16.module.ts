import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Fl16RoutingModule } from './fl16-routing.module';
import { Fl16Component } from './fl16.component';

@NgModule({
  declarations: [Fl16Component],
  imports: [
    CommonModule,
    SharedModule,
    Fl16RoutingModule
  ]
})
export class Fl16Module { }
