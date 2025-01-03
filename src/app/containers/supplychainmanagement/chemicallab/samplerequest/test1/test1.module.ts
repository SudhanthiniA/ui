import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Test1RoutingModule } from './test1-routing.module';
import { Test1Component } from './test1.component';
import { Viewtest1Component } from './viewtest1/viewtest1.component';

 
@NgModule({
  declarations: [Test1Component, Viewtest1Component],
  imports: [
    CommonModule,
    SharedModule,
    Test1RoutingModule
  ]
})
export class Test1Module { }
