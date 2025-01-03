import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Mb1RoutingModule } from './mb1-routing.module';
import { Viewmb1Component } from './viewmb1/viewmb1.component';
import { Mb1Component } from './mb1.component';



@NgModule({
  declarations: [Viewmb1Component, Mb1Component],
  imports: [
    CommonModule,
    SharedModule,
    Mb1RoutingModule
  ]
})
export class Mb1Module { }
