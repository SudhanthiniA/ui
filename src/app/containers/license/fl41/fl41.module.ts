import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Fl41RoutingModule } from './fl41-routing.module';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [ViewComponent, AddComponent],
  imports: [
    CommonModule,
    Fl41RoutingModule,
    SharedModule
  ]
})
export class Fl41Module { }
