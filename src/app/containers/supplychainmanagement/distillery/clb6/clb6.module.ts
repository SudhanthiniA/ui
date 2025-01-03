import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { Clb6RoutingModule } from './clb6-routing.module';
import { Clb6Component } from './clb6.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, Clb6Component],
  imports: [
    CommonModule,
    Clb6RoutingModule,
    SharedModule
  ]
})
export class Clb6Module { }
