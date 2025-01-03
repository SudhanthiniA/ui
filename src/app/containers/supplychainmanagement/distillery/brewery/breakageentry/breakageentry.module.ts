import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { BreakageentryRoutingModule } from './breakageentry-routing.module';
import { BreakageentryComponent } from './breakageentry.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [BreakageentryComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BreakageentryRoutingModule
  ]
})
export class BreakageentryModule { }
