import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';


import { FL9RoutingModule } from './fl9-routing.module';
import { Fl9Component } from './fl9.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [Fl9Component, AddComponent, ViewComponent],
  imports: [
    FL9RoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class FL9Module { }
