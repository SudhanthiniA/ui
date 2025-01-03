import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { Test11RoutingModule } from './test11-routing.module';
import { Test11Component } from './test11.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [Test11Component, ViewComponent],
  imports: [
    CommonModule,
    Test11RoutingModule,
    SharedModule
  ]
})
export class Test11Module { }
