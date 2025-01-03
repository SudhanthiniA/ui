import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { Clb8RoutingModule } from './clb8-routing.module';
import { Clb8Component } from './clb8.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, Clb8Component],
  imports: [
    CommonModule,
    Clb8RoutingModule,
    SharedModule
  ]
})
export class Clb8Module { }
