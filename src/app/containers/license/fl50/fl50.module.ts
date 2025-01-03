import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import {Fl50RoutingModule} from './fl50-routing.module';
import { Fl50Component } from './fl50.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [Fl50Component, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Fl50RoutingModule
  ]
})
export class Fl50Module { }
