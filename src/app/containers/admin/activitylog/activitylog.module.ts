import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { ActivitylogRoutingModule } from './activitylog-routing.module';
import { ActivitylogComponent } from './activitylog.component';

@NgModule({
  declarations: [ActivitylogComponent],
  imports: [
    CommonModule,
    ActivitylogRoutingModule,
    SharedModule
  ]
})
export class ActivitylogModule { }
