import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Fl7cRoutingModule } from './fl7c-routing.module';
import { Fl7cComponent } from './fl7c.component';


@NgModule({
  declarations: [Fl7cComponent],
  imports: [
    CommonModule,
    Fl7cRoutingModule,
    SharedModule
  ]
})
export class Fl7cModule { }
