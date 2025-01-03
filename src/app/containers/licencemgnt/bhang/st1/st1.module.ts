import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { St1RoutingModule } from './st1-routing.module';
import { Viewst1Component } from './viewst1/viewst1.component';
import { St1Component } from './st1.component';


@NgModule({
  declarations: [Viewst1Component, St1Component],
  imports: [
    CommonModule,
    SharedModule,
    St1RoutingModule
  ]
})
export class St1Module { }
