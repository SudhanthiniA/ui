import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Test10RoutingModule } from './test10-routing.module';
import { Test10Component } from './test10.component';
import { Viewtest10Component } from './viewtest10/viewtest10.component';

 
@NgModule({
  declarations: [Test10Component, Viewtest10Component],
  imports: [
    CommonModule,
    SharedModule,
    Test10RoutingModule
  ]
})
export class Test10Module { }
