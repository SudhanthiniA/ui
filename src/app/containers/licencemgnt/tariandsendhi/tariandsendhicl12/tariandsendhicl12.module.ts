import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { Tariandsendhicl12RoutingModule } from './tariandsendhicl12-routing.module';
import { Tariandsendhicl12Component } from './tariandsendhicl12.component';
import { Viewtariandsendhicl12Component } from './viewtariandsendhicl12/viewtariandsendhicl12.component';


@NgModule({
  declarations: [ Tariandsendhicl12Component, Viewtariandsendhicl12Component ],
  imports: [
    CommonModule,
    Tariandsendhicl12RoutingModule,
    SharedModule
  ]
})
export class Tariandsendhicl12Module { }
