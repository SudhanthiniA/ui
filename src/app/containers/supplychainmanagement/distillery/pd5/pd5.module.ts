import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Pd5RoutingModule } from './pd5-routing.module';
import { Pd5Component } from './pd5.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [Pd5Component, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    Pd5RoutingModule,
    SharedModule
  ]
})
export class Pd5Module { }
