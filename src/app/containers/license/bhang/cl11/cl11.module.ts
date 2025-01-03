import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Cl11RoutingModule } from './cl11-routing.module';
import { ViewComponent } from './view/view.component';
import { Cl11Component } from './cl11.component';


@NgModule({
  declarations: [ViewComponent, Cl11Component],
  imports: [
    CommonModule,
    SharedModule,
    Cl11RoutingModule
  ]
})
export class Cl11Module { }
