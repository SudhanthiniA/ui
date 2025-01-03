import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { Tariandsendhicl11RoutingModule } from './tariandsendhicl11-routing.module';
import { Tariandsendhicl11Component } from './tariandsendhicl11.component';
import { Viewtariandsendhicl11Component } from './viewtariandsendhicl11/viewtariandsendhicl11.component';


@NgModule({
  declarations: [ Tariandsendhicl11Component, Viewtariandsendhicl11Component ],
  imports: [
    CommonModule,
    Tariandsendhicl11RoutingModule,
    SharedModule
  ]
})
export class Tariandsendhicl11Module { }
