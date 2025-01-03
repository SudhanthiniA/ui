import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { Tariandsendhicl8RoutingModule } from './tariandsendhicl8-routing.module';
import { Tariandsendhicl8Component } from './tariandsendhicl8.component';
import { Viewtariandsendhicl8Component } from './viewtariandsendhicl8/viewtariandsendhicl8.component';

@NgModule({
  declarations: [ Tariandsendhicl8Component, Viewtariandsendhicl8Component ],
  imports: [
    CommonModule,
    Tariandsendhicl8RoutingModule,
    SharedModule
  ]
})
export class Tariandsendhicl8Module { }
