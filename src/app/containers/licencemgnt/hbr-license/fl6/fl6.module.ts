import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Fl6RoutingModule } from './fl6-routing.module'; 
import { Fl6Component } from './fl6.component';
import { Viewfl6Component } from './viewfl6/viewfl6.component';

@NgModule({
  declarations: [Viewfl6Component, Fl6Component],
  imports: [
    CommonModule,
    SharedModule,
    Fl6RoutingModule
  ]
})
export class Fl6Module { }
