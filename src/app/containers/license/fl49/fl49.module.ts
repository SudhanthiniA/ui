import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';


import { Fl49RoutingModule } from './fl49-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [AddComponent, ViewComponent],
  imports: [
    Fl49RoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class Fl49Module { }
