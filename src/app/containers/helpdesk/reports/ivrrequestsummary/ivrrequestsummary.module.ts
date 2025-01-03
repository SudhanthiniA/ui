import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { IvrrequestsummaryRoutingModule } from './ivrrequestsummary-routing.module';
import { IvrrequestsummaryComponent } from './ivrrequestsummary.component';



@NgModule({
  declarations: [IvrrequestsummaryComponent],
  imports: [
    CommonModule,
    IvrrequestsummaryRoutingModule,
    SharedModule
  ]
})
export class IvrrequestsummaryModule { }
