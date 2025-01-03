import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { St4RoutingModule } from './st4-routing.module';
import { Viewst4Component } from './viewst4/viewst4.component';
import { St4Component } from './st4.component';


@NgModule({
  declarations: [Viewst4Component, St4Component],
  imports: [
    CommonModule,
    SharedModule,
    St4RoutingModule
  ]
})
export class St4Module { }
