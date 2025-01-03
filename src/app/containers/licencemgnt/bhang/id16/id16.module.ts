import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Id16RoutingModule } from './id16-routing.module';
import { Viewid16Component } from './viewid16/viewid16.component';
import { Id16Component } from './id16.component';


@NgModule({
  declarations: [Viewid16Component, Id16Component],
  imports: [
    CommonModule,
    SharedModule,
    Id16RoutingModule
  ]
})
export class Id16Module { }
