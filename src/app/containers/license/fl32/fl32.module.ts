import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { Fl32RoutingModule } from './fl32-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [AddComponent, ViewComponent],
  imports: [
    CommonModule,
    Fl32RoutingModule,
    SharedModule
  ]
})
export class Fl32Module { }
