import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { St1RoutingModule } from './st1-routing.module';


import { St1Component } from './st1.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [St1Component, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    St1RoutingModule
  ]
})
export class St1Module { }
