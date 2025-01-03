import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { Clb4RoutingModule } from './clb4-routing.module';
import { Clb4Component } from './clb4.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, Clb4Component],
  imports: [
    CommonModule,
    Clb4RoutingModule,
    SharedModule
  ]
})
export class Clb4Module { }
