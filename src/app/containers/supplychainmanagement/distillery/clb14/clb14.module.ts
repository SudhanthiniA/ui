import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { Clb14RoutingModule } from './clb14-routing.module';
import { Clb14Component } from './clb14.component';

@NgModule({
  declarations: [AddComponent, ViewComponent,Clb14Component],
  imports: [
    CommonModule,
    Clb14RoutingModule,
    SharedModule
  ]
})
export class Clb14Module { }
