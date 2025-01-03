import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Mb4RoutingModule } from './mb4-routing.module';
import { Viewmb4Component } from './viewmb4/viewmb4.component';
import { Mb4Component } from './mb4.component';



@NgModule({
  declarations: [Viewmb4Component, Mb4Component],
  imports: [
    CommonModule,
    SharedModule,
    Mb4RoutingModule
  ]
})
export class Mb4Module { }
