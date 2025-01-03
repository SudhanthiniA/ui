import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Fl9aRoutingModule } from './fl9a-routing.module';
import { Fl9aComponent } from './fl9a.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [Fl9aComponent, ViewComponent],
  imports: [
    CommonModule,
    Fl9aRoutingModule,
    SharedModule
  ]
})
export class Fl9aModule { }
