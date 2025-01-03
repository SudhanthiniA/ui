import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { St3RoutingModule } from './st3-routing.module';
import { Viewst3Component } from './viewst3/viewst3.component';
import { St3Component } from './st3.component';


@NgModule({
  declarations: [Viewst3Component, St3Component],
  imports: [
    CommonModule,
    SharedModule,
    St3RoutingModule
  ]
})
export class St3Module { }
