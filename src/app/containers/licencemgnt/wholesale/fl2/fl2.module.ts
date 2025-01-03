import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Fl2RoutingModule } from './fl2-routing.module';
import { Viewfl2Component } from './viewfl2/viewfl2.component';
import { Fl2Component } from './fl2.component';

@NgModule({
  declarations: [Viewfl2Component, Fl2Component],
  imports: [
    CommonModule,
    SharedModule,
    Fl2RoutingModule
  ]
})
export class Fl2Module { }
