import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { Clb13RoutingModule } from './clb13-routing.module';
import { Clb13Component } from './clb13.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, Clb13Component],
  imports: [
    CommonModule,
    Clb13RoutingModule,
    SharedModule
  ]
})
export class Clb13Module { }
