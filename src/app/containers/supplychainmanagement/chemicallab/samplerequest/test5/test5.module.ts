import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Test5RoutingModule } from './test5-routing.module';
import { Test5Component } from './test5.component';
import { Viewtest5Component } from './viewtest5/viewtest5.component';

 
@NgModule({
  declarations: [Test5Component, Viewtest5Component],
  imports: [
    CommonModule,
    SharedModule,
    Test5RoutingModule
  ]
})
export class Test5Module { }
