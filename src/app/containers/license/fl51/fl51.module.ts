import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import {Fl51RoutingModule} from './fl51-routing.module';
import { Fl51Component } from './fl51.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [Fl51Component, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Fl51RoutingModule
  ]
})
export class Fl51Module { }
