import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Test6RoutingModule } from './test6-routing.module';
import { Test6Component } from './test6.component';
import { Viewtest6Component } from './viewtest6/viewtest6.component';

 
@NgModule({
  declarations: [Test6Component, Viewtest6Component],
  imports: [
    CommonModule,
    SharedModule,
    Test6RoutingModule
  ]
})
export class Test6Module { }
