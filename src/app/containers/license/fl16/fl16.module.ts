import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { Fl16RoutingModule } from './fl16-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [AddComponent, ViewComponent],
  imports: [
    CommonModule,
    Fl16RoutingModule,
    SharedModule
  ]
})
export class Fl16Module { }
