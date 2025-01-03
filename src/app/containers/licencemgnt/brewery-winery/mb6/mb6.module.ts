import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Mb6RoutingModule } from './mb6-routing.module';
import { Viewmb6Component } from './viewmb6/viewmb6.component';
import { Mb6Component } from './mb6.component';



@NgModule({
  declarations: [Viewmb6Component, Mb6Component],
  imports: [
    CommonModule,
    SharedModule,
    Mb6RoutingModule
  ]
})
export class Mb6Module { }
