import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Test4RoutingModule } from './test4-routing.module';
import { Test4Component } from './test4.component';
import { Viewtest4Component } from './viewtest4/viewtest4.component';

 
@NgModule({
  declarations: [Test4Component, Viewtest4Component],
  imports: [
    CommonModule,
    SharedModule,
    Test4RoutingModule
  ]
})
export class Test4Module { }
