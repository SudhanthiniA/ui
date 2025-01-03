import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { Clb7RoutingModule } from './clb7-routing.module';
import { Clb7Component } from './clb7.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, Clb7Component],
  imports: [
    CommonModule,
    Clb7RoutingModule,
    SharedModule
  ]
})
export class Clb7Module { }
