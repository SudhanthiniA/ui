import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Mb3RoutingModule } from './mb3-routing.module';
import { Viewmb3Component } from './viewmb3/viewmb3.component';
import { Mb3Component } from './mb3.component';



@NgModule({
  declarations: [Viewmb3Component, Mb3Component],
  imports: [
    CommonModule,
    SharedModule,
    Mb3RoutingModule
  ]
})
export class Mb3Module { }
