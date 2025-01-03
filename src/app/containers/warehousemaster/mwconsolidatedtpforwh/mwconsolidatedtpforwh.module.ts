import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MwconsolidatedtpforwhRoutingModule } from './mwconsolidatedtpforwh-routing.module';
import { MwconsolidatedtpforwhComponent } from './mwconsolidatedtpforwh.component';
import { ViewmwconsolidatedtpforwhComponent } from './viewmwconsolidatedtpforwh/viewmwconsolidatedtpforwh.component';


@NgModule({
  declarations: [MwconsolidatedtpforwhComponent, ViewmwconsolidatedtpforwhComponent],
  imports: [
    CommonModule,
    SharedModule,
    MwconsolidatedtpforwhRoutingModule
  ] 
})
export class MwconsolidatedtpforwhModule { }
