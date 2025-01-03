import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Test2RoutingModule } from './test2-routing.module';
import { Test2Component } from './test2.component';
import { Viewtest2Component } from './viewtest2/viewtest2.component';

 
@NgModule({
  declarations: [Test2Component, Viewtest2Component],
  imports: [
    CommonModule,
    SharedModule,
    Test2RoutingModule
  ]
})
export class Test2Module { }
