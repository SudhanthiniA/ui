import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { Clb10RoutingModule } from './clb10-routing.module';
import { Clb10Component } from './clb10.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, Clb10Component],
  imports: [
    CommonModule,
    Clb10RoutingModule,
    SharedModule
  ]
})
export class Clb10Module { }
