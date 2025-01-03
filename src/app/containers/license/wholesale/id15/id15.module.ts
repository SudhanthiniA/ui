import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ViewComponent } from './view/view.component';
import { ID15Component } from './id15.component';
import { ID15RoutingModule } from './id15-routing.module';


@NgModule({
  declarations: [ ID15Component ,ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ID15RoutingModule
  ]
})
export class ID15Module { }
