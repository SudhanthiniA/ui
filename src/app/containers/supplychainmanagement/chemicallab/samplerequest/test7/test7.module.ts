import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Test7RoutingModule } from './test7-routing.module';
import { Test7Component } from './test7.component';
import { Viewtest7Component } from './viewtest7/viewtest7.component';

 
@NgModule({
  declarations: [Test7Component, Viewtest7Component],
  imports: [
    CommonModule,
    SharedModule,
    Test7RoutingModule
  ]
})
export class Test7Module { }
