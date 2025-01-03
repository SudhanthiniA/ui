import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { HelpdeskexecutiveRoutingModule } from './helpdeskexecutive-routing.module';
import { HelpdeskexecutiveComponent } from './helpdeskexecutive.component';
import { AddhelpdeskexecutiveComponent } from './addhelpdeskexecutive/addhelpdeskexecutive.component';
import { ViewhelpdeskexecutiveComponent } from './viewhelpdeskexecutive/viewhelpdeskexecutive.component';

@NgModule({
  declarations: [HelpdeskexecutiveComponent, AddhelpdeskexecutiveComponent, ViewhelpdeskexecutiveComponent],
  imports: [
    CommonModule,
    SharedModule,
    HelpdeskexecutiveRoutingModule
  ]
})
export class HelpdeskexecutiveModule { }
