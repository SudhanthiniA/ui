import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fl1Component } from './fl1.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { Fl1RoutingModule } from './fl1-routing.module';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [Fl1Component, ViewComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    Fl1RoutingModule
  ]
})
export class FL1Module { }
