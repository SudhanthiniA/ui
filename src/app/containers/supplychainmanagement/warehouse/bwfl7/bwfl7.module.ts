import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Bwfl7RoutingModule } from './bwfl7-routing.module';
import { Bwfl7Component } from './bwfl7.component';
import { Addbwfl7Component } from './addbwfl7/addbwfl7.component';
import { Viewbwfl7Component } from './viewbwfl7/viewbwfl7.component';

@NgModule({
  declarations: [Bwfl7Component, Addbwfl7Component, Viewbwfl7Component],
  imports: [
    CommonModule,
    SharedModule,
    Bwfl7RoutingModule
  ]
})
export class Bwfl7Module { }
