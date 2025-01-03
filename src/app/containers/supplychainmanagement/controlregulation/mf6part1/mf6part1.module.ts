import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Mf6part1RoutingModule } from './mf6part1-routing.module';
import { Mf6part1Component } from './mf6part1.component';
import { Viewmf6part1Component } from './viewmf6part1/viewmf6part1.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [Mf6part1Component, Viewmf6part1Component, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    Mf6part1RoutingModule
  ]
})
export class Mf6part1Module { }
