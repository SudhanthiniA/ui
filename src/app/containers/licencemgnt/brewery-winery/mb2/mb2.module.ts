import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Mb2RoutingModule } from './mb2-routing.module';
import { Viewmb2Component } from './viewmb2/viewmb2.component';
import { Mb2Component } from './mb2.component';



@NgModule({
  declarations: [Viewmb2Component, Mb2Component],
  imports: [
    CommonModule,
    SharedModule,
    Mb2RoutingModule
  ]
})
export class Mb2Module { }
