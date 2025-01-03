import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { UnscheduledinspectionRoutingModule } from './unscheduledinspection-routing.module';
import { UnscheduledinspectionComponent } from './unscheduledinspection.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [UnscheduledinspectionComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    UnscheduledinspectionRoutingModule
  ]
})
export class UnscheduledinspectionModule { }
