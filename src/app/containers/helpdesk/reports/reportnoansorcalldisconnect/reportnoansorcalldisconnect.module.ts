import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { ReportnoansorcalldisconnectRoutingModule } from './reportnoansorcalldisconnect-routing.module';
import { ReportnoansorcalldisconnectComponent } from './reportnoansorcalldisconnect.component';


@NgModule({
  declarations: [ReportnoansorcalldisconnectComponent],
  imports: [
    CommonModule,
    ReportnoansorcalldisconnectRoutingModule,
    SharedModule
  ]
})
export class ReportnoansorcalldisconnectModule { }
