import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ReportemailRoutingModule } from './reportemail-routing.module';
import { ReportemailComponent } from './reportemail.component';

@NgModule({
  declarations: [ReportemailComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReportemailRoutingModule
  ]
})
export class ReportemailModule { }
