import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Cl8RoutingModule } from './cl8-routing.module';
import { ViewComponent } from './view/view.component';
import { Cl8Component } from './cl8.component';


@NgModule({
  declarations: [ViewComponent, Cl8Component],
  imports: [
    CommonModule,
    SharedModule,
    Cl8RoutingModule
  ]
})
export class Cl8Module { }
