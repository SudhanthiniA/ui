import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { V2RoutingModule } from './v2-routing.module';


import { V2Component } from './v2.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [V2Component, ViewComponent],
  imports: [
    CommonModule,
    V2RoutingModule,
    SharedModule
  ]
})
export class V2Module { }
