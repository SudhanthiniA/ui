import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Bwfl9RoutingModule } from './bwfl9-routing.module';
import { Bwfl9Component } from './bwfl9.component';
import { Addbwfl9Component } from './addbwfl9/addbwfl9.component';
import { Viewbwfl9Component } from './viewbwfl9/viewbwfl9.component';

@NgModule({
  declarations: [Bwfl9Component, Addbwfl9Component, Viewbwfl9Component],
  imports: [
    CommonModule,
    SharedModule,
    Bwfl9RoutingModule
  ]
})
export class Bwfl9Module { }
