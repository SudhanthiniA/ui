import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Flb36RoutingModule } from './flb36-routing.module';
import { Flb36Component } from './flb36.component';
import { Addflb36Component } from './addflb36/addflb36.component';
import { Viewflb36Component } from './viewflb36/viewflb36.component';



@NgModule({
  declarations: [Flb36Component, Addflb36Component, Viewflb36Component],
  imports: [
    CommonModule,
    SharedModule,
    Flb36RoutingModule
  ]
})
export class Flb36Module { }
