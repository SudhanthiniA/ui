import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { CheavyliftingandbalancereportRoutingModule } from './cheavyliftingandbalancereport-routing.module';
import { CheavyliftingandbalancereportComponent } from './cheavyliftingandbalancereport.component';

@NgModule({
  imports: [
    CommonModule,
    CheavyliftingandbalancereportRoutingModule,
    SharedModule
  ],
  providers: [],
  declarations: [CheavyliftingandbalancereportComponent]
})
export class CheavyliftingandbalancereportModule { }
