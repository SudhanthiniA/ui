import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Cl9RoutingModule } from './cl9-routing.module';
import { Viewcl9Component } from './viewcl9/viewcl9.component';
import { Cl9Component } from './cl9.component';


@NgModule({
  declarations: [Viewcl9Component, Cl9Component],
  imports: [
    CommonModule,
    SharedModule,
    Cl9RoutingModule
  ]
})
export class Cl9Module { }
