import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Mf7RoutingModule } from './mf7-routing.module';
import { Mf7Component } from './mf7.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [Mf7Component, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Mf7RoutingModule
  ]
})
export class Mf7Module { }
