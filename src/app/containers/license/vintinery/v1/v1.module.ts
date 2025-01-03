import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { V1RoutingModule } from './v1-routing.module';
import { V1Component } from './v1.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [V1Component, ViewComponent],
  imports: [
    CommonModule,
    V1RoutingModule,
    SharedModule
  ]
})
export class V1Module { }
