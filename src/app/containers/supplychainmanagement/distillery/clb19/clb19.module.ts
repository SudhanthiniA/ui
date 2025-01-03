import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { Clb19RoutingModule } from './clb19-routing.module';
import { Clb19Component } from './clb19.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, Clb19Component],
  imports: [
    CommonModule,
    Clb19RoutingModule,
    SharedModule
  ]
})
export class Clb19Module { }
