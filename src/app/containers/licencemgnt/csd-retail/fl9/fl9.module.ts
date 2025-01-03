import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Fl9RoutingModule } from './fl9-routing.module';
import { Fl9Component } from './fl9.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [Fl9Component, ViewComponent],
  imports: [
    CommonModule,
    Fl9RoutingModule,
    SharedModule
  ]
})
export class Fl9Module { }
