import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { Fl17RoutingModule } from './fl17-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [AddComponent, ViewComponent],
  imports: [
    CommonModule,
    Fl17RoutingModule,
    SharedModule
  ]
})
export class Fl17Module { }
