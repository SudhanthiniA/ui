import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { B19RoutingModule } from './b19-routing.module';
import { Viewb19Component } from './viewb19/viewb19.component';
import { B19Component } from './b19.component';



@NgModule({
  declarations: [Viewb19Component, B19Component],
  imports: [
    CommonModule,
    SharedModule,
    B19RoutingModule
  ]
})
export class B19Module { }
