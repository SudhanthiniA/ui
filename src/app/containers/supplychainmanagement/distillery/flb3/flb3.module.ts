import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Flb3RoutingModule } from './flb3-routing.module';
import { Flb3Component } from './flb3.component';
import { Addflb3Component } from './addflb3/addflb3.component';
import { Viewflb3Component } from './viewflb3/viewflb3.component';



@NgModule({
  declarations: [Flb3Component, Addflb3Component, Viewflb3Component],
  imports: [
    CommonModule,
    SharedModule,
    Flb3RoutingModule
  ]
})
export class Flb3Module { }
