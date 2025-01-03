import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';


import { Fl39RoutingModule } from './fl39-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [AddComponent, ViewComponent],
  imports: [
    Fl39RoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class Fl39Module { }
