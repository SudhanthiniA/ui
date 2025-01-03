import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Mb7RoutingModule } from './mb7-routing.module';
import { Viewmb7Component } from './viewmb7/viewmb7.component';
import { Mb7Component } from './mb7.component';



@NgModule({
  declarations: [Viewmb7Component, Mb7Component],
  imports: [
    CommonModule,
    SharedModule,
    Mb7RoutingModule
  ]
})
export class Mb7Module { }
