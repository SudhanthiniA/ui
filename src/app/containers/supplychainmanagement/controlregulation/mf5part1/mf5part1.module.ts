import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Mf5part1RoutingModule } from './mf5part1-routing.module';
import { Mf5part1Component } from './mf5part1.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [Mf5part1Component, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Mf5part1RoutingModule
  ]
})
export class Mf5part1Module { }
