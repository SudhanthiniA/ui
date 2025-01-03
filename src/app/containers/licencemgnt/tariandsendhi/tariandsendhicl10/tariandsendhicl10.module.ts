import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { Tariandsendhicl10RoutingModule } from './tariandsendhicl10-routing.module';
import { Tariandsendhicl10Component } from './tariandsendhicl10.component';
import { Viewtariandsendhicl10Component } from './viewtariandsendhicl10/viewtariandsendhicl10.component';


@NgModule({
  declarations: [ Tariandsendhicl10Component, Viewtariandsendhicl10Component ],
  imports: [
    CommonModule,
    Tariandsendhicl10RoutingModule,
    SharedModule
  ]
})
export class Tariandsendhicl10Module { }
