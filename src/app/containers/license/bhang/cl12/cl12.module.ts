import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Cl12RoutingModule } from './cl12-routing.module';
import { ViewComponent } from './view/view.component';
import { Cl12Component } from './cl12.component';


@NgModule({
  declarations: [ViewComponent, Cl12Component],
  imports: [
    CommonModule,
    SharedModule,
    Cl12RoutingModule
  ]
})
export class Cl12Module { }
