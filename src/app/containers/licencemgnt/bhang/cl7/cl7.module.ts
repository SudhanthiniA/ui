import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Cl7RoutingModule } from './cl7-routing.module';
import { Viewcl7Component } from './viewcl7/viewcl7.component';
import { Cl7Component } from './cl7.component';


@NgModule({
  declarations: [Viewcl7Component, Cl7Component],
  imports: [
    CommonModule,
    SharedModule,
    Cl7RoutingModule
  ]
})
export class Cl7Module { }
