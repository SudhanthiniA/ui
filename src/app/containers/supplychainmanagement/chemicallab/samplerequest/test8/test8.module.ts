import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Test8RoutingModule } from './test8-routing.module';
import { Test8Component } from './test8.component';
import { Viewtest8Component } from './viewtest8/viewtest8.component';

 
@NgModule({
  declarations: [Test8Component, Viewtest8Component],
  imports: [
    CommonModule,
    SharedModule,
    Test8RoutingModule
  ]
})
export class Test8Module { }
