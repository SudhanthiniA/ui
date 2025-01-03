import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { QueryticketsummaryRoutingModule } from './queryticketsummary-routing.module';
import { QueryticketsummaryComponent } from './queryticketsummary.component';



@NgModule({
  declarations: [QueryticketsummaryComponent],
  imports: [
    CommonModule,
    QueryticketsummaryRoutingModule,
    SharedModule
  ]
})
export class QueryticketsummaryModule { }
