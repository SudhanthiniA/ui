import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { B14Component } from './b14.component';
import { B14RoutingModule } from './b14-routing.module';
import { Addb14Component } from './addb14/addb14.component';
import { Viewb14Component } from './viewb14/viewb14.component';



@NgModule({
  declarations: [Addb14Component, Viewb14Component,B14Component],
  imports: [
    CommonModule,
    B14RoutingModule,
    SharedModule
  ]
})
export class B14Module { }
