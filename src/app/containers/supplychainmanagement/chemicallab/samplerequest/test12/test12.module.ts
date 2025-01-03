import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { Test12RoutingModule } from './test12-routing.module';
import { Test12Component } from './test12.component';
import { Viewtest12Component } from './viewtest12/viewtest12.component';

@NgModule({
  declarations: [Test12Component, Viewtest12Component],
  imports: [
    CommonModule,
    Test12RoutingModule,
    SharedModule
  ]
})
export class Test12Module { }
