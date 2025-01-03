import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { B21RoutingModule } from './b21-routing.module';
import { Viewb21Component } from './viewb21/viewb21.component';
import { B21Component } from './b21.component';



@NgModule({
  declarations: [Viewb21Component, B21Component],
  imports: [
    CommonModule,
    SharedModule,
    B21RoutingModule
  ]
})
export class B21Module { }
