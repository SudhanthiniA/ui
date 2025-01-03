import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { Tariandsendhicl7RoutingModule } from './tariandsendhicl7-routing.module';
import { Tariandsendhicl7Component } from './tariandsendhicl7.component';
import { Viewtariandsendhicl7Component } from './viewtariandsendhicl7/viewtariandsendhicl7.component';

@NgModule({
  declarations: [ Tariandsendhicl7Component, Viewtariandsendhicl7Component ],
  imports: [
    CommonModule,
    Tariandsendhicl7RoutingModule,
    SharedModule
  ]
})
export class Tariandsendhicl7Module { }
