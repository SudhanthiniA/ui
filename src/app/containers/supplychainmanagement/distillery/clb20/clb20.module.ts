import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { Clb20RoutingModule } from './clb20-routing.module';
import { Clb20Component } from './clb20.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, Clb20Component],
  imports: [
    CommonModule,
    Clb20RoutingModule,
    SharedModule
  ]
})
export class Clb20Module { }
