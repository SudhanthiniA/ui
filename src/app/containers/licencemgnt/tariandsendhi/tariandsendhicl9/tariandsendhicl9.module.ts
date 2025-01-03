import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { Tariandsendhicl9RoutingModule } from './tariandsendhicl9-routing.module';
import { Tariandsendhicl9Component } from './tariandsendhicl9.component';
import { Viewtariandsendhicl9Component } from './viewtariandsendhicl9/viewtariandsendhicl9.component';


@NgModule({
  declarations: [ Tariandsendhicl9Component, Viewtariandsendhicl9Component ],
  imports: [
    CommonModule,
    Tariandsendhicl9RoutingModule,
    SharedModule
  ]
})
export class Tariandsendhicl9Module { }
