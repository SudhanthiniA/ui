import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { B20RoutingModule } from './b20-routing.module';
import { Viewb20Component } from './viewb20/viewb20.component';
import { B20Component } from './b20.component';



@NgModule({
  declarations: [Viewb20Component, B20Component],
  imports: [
    CommonModule,
    SharedModule,
    B20RoutingModule
  ]
})
export class B20Module { }
