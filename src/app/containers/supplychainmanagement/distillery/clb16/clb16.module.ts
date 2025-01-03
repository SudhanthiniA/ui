import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { Clb16RoutingModule } from './clb16-routing.module';
import { Clb16Component } from './clb16.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, Clb16Component],
  imports: [
    CommonModule,
    Clb16RoutingModule,
    SharedModule
  ]
})
export class Clb16Module { }
