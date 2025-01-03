import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { Clb15RoutingModule } from './clb15-routing.module';
import { Clb15Component } from './clb15.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, Clb15Component],
  imports: [
    CommonModule,
    Clb15RoutingModule,
    SharedModule
  ]
})
export class Clb15Module { }
