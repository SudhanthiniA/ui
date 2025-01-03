import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Bwfl6RoutingModule } from './bwfl6-routing.module';
import { Bwfl6Component } from './bwfl6.component';
import { Addbwfl6Component } from './addbwfl6/addbwfl6.component';
import { Viewbwfl6Component } from './viewbwfl6/viewbwfl6.component';

@NgModule({
  declarations: [Bwfl6Component, Addbwfl6Component, Viewbwfl6Component],
  imports: [
    CommonModule,
    SharedModule,
    Bwfl6RoutingModule
  ]
})
export class Bwfl6Module { }
