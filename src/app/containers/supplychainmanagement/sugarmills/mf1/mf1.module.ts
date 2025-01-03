import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Mf1RoutingModule } from './mf1-routing.module';
import { Mf1Component } from './mf1.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [Mf1Component, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Mf1RoutingModule
  ]
})
export class Mf1Module { }
