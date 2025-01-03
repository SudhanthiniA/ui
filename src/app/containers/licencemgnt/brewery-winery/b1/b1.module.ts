import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { B1RoutingModule } from './b1-routing.module';
import { Viewb1Component } from './viewb1/viewb1.component';
import { B1Component } from './b1.component';



@NgModule({
  declarations: [Viewb1Component, B1Component],
  imports: [
    CommonModule,
    SharedModule,
    B1RoutingModule
  ]
})
export class B1Module { }
