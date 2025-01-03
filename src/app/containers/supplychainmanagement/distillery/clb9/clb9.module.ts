import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { Clb9RoutingModule } from './clb9-routing.module';
import { Clb9Component } from './clb9.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, Clb9Component],
  imports: [
    CommonModule,
    Clb9RoutingModule,
    SharedModule
  ]
})
export class Clb9Module { }
