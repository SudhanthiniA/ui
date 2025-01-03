import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Sw1RoutingModule } from './sw1-routing.module';
import { Viewsw1Component } from './viewsw1/viewsw1.component';
import { Sw1Component } from './sw1.component';



@NgModule({
  declarations: [Viewsw1Component, Sw1Component],
  imports: [
    CommonModule,
    SharedModule,
    Sw1RoutingModule
  ]
})
export class Sw1Module { }


