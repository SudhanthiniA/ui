import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { Clb5RoutingModule } from './clb5-routing.module';
import { Clb5Component } from './clb5.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, Clb5Component],
  imports: [
    CommonModule,
    Clb5RoutingModule,
    SharedModule
  ]
})
export class Clb5Module { }
