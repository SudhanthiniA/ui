import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Hm1RoutingModule } from './hm1-routing.module';
import { Hm1Component } from './hm1.component';
import { Viewhm1Component } from './viewhm1/viewhm1.component';


@NgModule({
  declarations: [Hm1Component, Viewhm1Component],
  imports: [
    CommonModule,
    SharedModule,
    Hm1RoutingModule
  ]
})
export class Hm1Module { }

