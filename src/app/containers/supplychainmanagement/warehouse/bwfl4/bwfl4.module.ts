import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { Bwfl4RoutingModule } from './bwfl4-routing.module';
import { Bwfl4Component } from './bwfl4.component';
import { Addbwfl4Component } from './addbwfl4/addbwfl4.component';
import { Viewbwfl4Component } from './viewbwfl4/viewbwfl4.component';

@NgModule({
  declarations: [Bwfl4Component, Addbwfl4Component, Viewbwfl4Component],
  imports: [
    CommonModule,
    SharedModule,
    Bwfl4RoutingModule
  ]
})
export class Bwfl4Module { }
