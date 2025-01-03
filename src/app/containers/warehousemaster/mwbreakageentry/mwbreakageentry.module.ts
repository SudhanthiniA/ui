import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { MwbreakageentryRoutingModule } from './mwbreakageentry-routing.module';
import { MwbreakageentryComponent } from './mwbreakageentry.component';
import { AddmwbreakageentryComponent } from './addmwbreakageentry/addmwbreakageentry.component';
import { ViewmwbreakageentryComponent } from './viewmwbreakageentry/viewmwbreakageentry.component';

@NgModule({
  declarations: [MwbreakageentryComponent, AddmwbreakageentryComponent, ViewmwbreakageentryComponent],
  imports: [
    CommonModule,
    MwbreakageentryRoutingModule,
    SharedModule
  ]
})
export class MwbreakageentryModule { }
