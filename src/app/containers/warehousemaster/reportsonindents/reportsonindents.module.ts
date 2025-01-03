import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ReportsonindentsRoutingModule } from './reportsonindents-routing.module';
import { ReportsonindentsComponent } from './reportsonindents.component';

@NgModule({
  declarations: [ReportsonindentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReportsonindentsRoutingModule
  ]
})
export class ReportsonindentsModule { }
