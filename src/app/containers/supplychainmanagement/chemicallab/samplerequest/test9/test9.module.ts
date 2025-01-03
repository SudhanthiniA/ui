import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Test9RoutingModule } from './test9-routing.module';
import { Test9Component } from './test9.component';
import { Viewtest9Component } from './viewtest9/viewtest9.component';

 
@NgModule({
  declarations: [Test9Component, Viewtest9Component],
  imports: [
    CommonModule,
    SharedModule,
    Test9RoutingModule
  ]
})
export class Test9Module { }
