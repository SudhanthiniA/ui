import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Id15RoutingModule } from './id15-routing.module';
import { Viewid15Component } from './viewid15/viewid15.component';
import { Id15Component } from './id15.component';


@NgModule({
  declarations: [Viewid15Component, Id15Component],
  imports: [
    CommonModule,
    SharedModule,
    Id15RoutingModule
  ]
})
export class Id15Module { }
