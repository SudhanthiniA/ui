import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { ReportticketsummaryRoutingModule } from './reportticketsummary-routing.module';
import { ReportticketsummaryComponent } from './reportticketsummary.component';

@NgModule({
  declarations: [ReportticketsummaryComponent],
  imports: [
    CommonModule,
    ReportticketsummaryRoutingModule,
    SharedModule
  ]
})
export class ReportticketsummaryModule { }
