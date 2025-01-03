import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Fl9Component } from './fl9.component';
import { Addfl9Component } from './addfl9/addfl9.component';
import { Fl9RoutingModule } from './fl9-routing.module';


@NgModule({
  declarations: [Fl9Component, Addfl9Component],
  imports: [
    CommonModule,
    SharedModule,
    Fl9RoutingModule
  ]
})
export class Fl9Module { }
