import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { Clb12RoutingModule } from './clb12-routing.module';
import { Clb12Component } from './clb12.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, Clb12Component],
  imports: [
    CommonModule,
    Clb12RoutingModule,
    SharedModule
  ]
})
export class Clb12Module { }
