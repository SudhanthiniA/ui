import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Cl8RoutingModule } from './cl8-routing.module';
import { Viewcl8Component } from './viewcl8/viewcl8.component';
import { Cl8Component } from './cl8.component';


@NgModule({
  declarations: [Viewcl8Component, Cl8Component],
  imports: [
    CommonModule,
    SharedModule,
    Cl8RoutingModule
  ]
})
export class Cl8Module { }
