import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { Clb18RoutingModule } from './clb18-routing.module';
import { Clb18Component } from './clb18.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, Clb18Component],
  imports: [
    CommonModule,
    Clb18RoutingModule,
    SharedModule
  ]
})
export class Clb18Module { }
