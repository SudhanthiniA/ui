import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { Clb17RoutingModule } from './clb17-routing.module';
import { Clb17Component } from './clb17.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, Clb17Component],
  imports: [
    CommonModule,
    Clb17RoutingModule,
    SharedModule
  ]
})
export class Clb17Module { }
