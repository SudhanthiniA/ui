import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Bwfl5RoutingModule } from './bwfl5-routing.module';
import { Bwfl5Component } from './bwfl5.component';
import { Addbwfl5Component } from './addbwfl5/addbwfl5.component';
import { Viewbwfl5Component } from './viewbwfl5/viewbwfl5.component';

@NgModule({
  declarations: [Bwfl5Component, Addbwfl5Component, Viewbwfl5Component],
  imports: [
    CommonModule,
    SharedModule,
    Bwfl5RoutingModule
  ]
})
export class Bwfl5Module { }
