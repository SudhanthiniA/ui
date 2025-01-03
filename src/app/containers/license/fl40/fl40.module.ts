import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Fl40RoutingModule } from './fl40-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [AddComponent, ViewComponent],
  imports: [
    CommonModule,
    Fl40RoutingModule,
    SharedModule
  ]
})
export class Fl40Module { }
