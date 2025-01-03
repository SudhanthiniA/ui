import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Id16RoutingModule } from './id16-routing.module';
import { ViewComponent } from './view/view.component';
import { Id16Component } from './id16.component';


@NgModule({
  declarations: [ViewComponent, Id16Component],
  imports: [
    CommonModule,
    SharedModule,
    Id16RoutingModule
  ]
})
export class Id16Module { }
