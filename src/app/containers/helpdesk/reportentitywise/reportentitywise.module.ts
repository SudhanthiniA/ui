import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { ReportentitywiseRoutingModule } from './reportentitywise-routing.module';
import { ReportentitywiseComponent } from './reportentitywise.component';

@NgModule({
  declarations: [ReportentitywiseComponent],
  imports: [
    CommonModule,
    ReportentitywiseRoutingModule,
    SharedModule
  ]
}) 
export class ReportentitywiseModule { }
