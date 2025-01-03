import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Flid3Component } from './flid3.component';
import { Viewflid3Component } from './viewflid3/viewflid3.component';
import { Flid3RoutingModule } from './flid3-routing.module';



@NgModule({
  declarations: [Flid3Component, Viewflid3Component],
  imports: [
    CommonModule,
    SharedModule,
    Flid3RoutingModule
  ]
})
export class Flid3Module { }
