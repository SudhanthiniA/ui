import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulerComponent } from './scheduler.component';
import { SchedulerRoutingModule } from './scheduler-routing.module';
import { SharedModule } from '@app/theme/shared/shared.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [SchedulerComponent,AddComponent,ViewComponent],
  imports: [
    CommonModule,
    SchedulerRoutingModule,
    SharedModule
  ]
})
export class SchedulerModule { }
