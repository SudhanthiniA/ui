import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { LogingactivitylogRoutingModule } from './logingactivitylog-routing.module';
import { LogingactivitylogComponent } from './logingactivitylog.component';


@NgModule({
  declarations: [LogingactivitylogComponent],
  imports: [
    CommonModule,
    LogingactivitylogRoutingModule,
    SharedModule
  ]
})
export class LogingactivitylogModule { }
