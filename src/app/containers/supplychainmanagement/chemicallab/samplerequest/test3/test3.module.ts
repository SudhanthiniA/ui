import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Test3RoutingModule } from './test3-routing.module';
import { Test3Component } from './test3.component';
import { Viewtest3Component } from './viewtest3/viewtest3.component';

 
@NgModule({
  declarations: [Test3Component, Viewtest3Component],
  imports: [
    CommonModule,
    SharedModule,
    Test3RoutingModule
  ]
})
export class Test3Module { }
