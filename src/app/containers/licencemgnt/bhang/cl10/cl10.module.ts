import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Cl10RoutingModule } from './cl10-routing.module';
import { Viewcl10Component } from './viewcl10/viewcl10.component';
import { Cl10Component } from './cl10.component';


@NgModule({
  declarations: [Viewcl10Component, Cl10Component],
  imports: [
    CommonModule,
    SharedModule,
    Cl10RoutingModule
  ]
})
export class Cl10Module { }
