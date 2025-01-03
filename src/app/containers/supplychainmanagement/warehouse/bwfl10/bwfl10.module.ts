import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Bwfl10RoutingModule } from './bwfl10-routing.module';
import { Bwfl10Component } from './bwfl10.component';
import { Addbwfl10Component } from './addbwfl10/addbwfl10.component';
import { Viewbwfl10Component } from './viewbwfl10/viewbwfl10.component';

@NgModule({
  declarations: [Bwfl10Component, Addbwfl10Component, Viewbwfl10Component],
  imports: [
    CommonModule,
    SharedModule,
    Bwfl10RoutingModule
  ]
})
export class Bwfl10Module { }
