import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddbreakageentryComponent } from './addbreakageentry/addbreakageentry.component';
import { ViewbreakageentryComponent } from './viewbreakageentry/viewbreakageentry.component';
import { BreakageentryRoutingModule } from './breakageentry-routing.module';
import { BreakageentryComponent } from './breakageentry.component'; 
import { SharedModule } from '@app/theme/shared/shared.module';


@NgModule({
  declarations: [BreakageentryComponent, AddbreakageentryComponent, ViewbreakageentryComponent],
  imports: [
    CommonModule,
    SharedModule,
    BreakageentryRoutingModule
  ]
})
export class BreakageentryModule { }


