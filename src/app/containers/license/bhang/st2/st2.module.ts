import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { St2RoutingModule } from './st2-routing.module';


import { St2Component } from './st2.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [St2Component, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    St2RoutingModule
  ]
})
export class St2Module { }
