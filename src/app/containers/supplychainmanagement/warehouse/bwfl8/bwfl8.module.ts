import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Bwfl8RoutingModule } from './bwfl8-routing.module';
import { Bwfl8Component } from './bwfl8.component';
import { Addbwfl8Component } from './addbwfl8/addbwfl8.component';
import { Viewbwfl8Component } from './viewbwfl8/viewbwfl8.component';

@NgModule({
  declarations: [Bwfl8Component, Addbwfl8Component, Viewbwfl8Component],
  imports: [
    CommonModule,
    SharedModule,
    Bwfl8RoutingModule
  ]
})
export class Bwfl8Module { }
