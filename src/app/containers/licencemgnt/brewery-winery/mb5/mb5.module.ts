import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Mb5RoutingModule } from './mb5-routing.module';
import { Viewmb5Component } from './viewmb5/viewmb5.component';
import { Mb5Component } from './mb5.component';



@NgModule({
  declarations: [Viewmb5Component, Mb5Component],
  imports: [
    CommonModule,
    SharedModule,
    Mb5RoutingModule
  ]
})
export class Mb5Module { }
