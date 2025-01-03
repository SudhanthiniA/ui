import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedutyComponent } from './advanceduty.component';

import { AdvancedutyRoutingModule } from './advanceduty-routing.module';
import { SharedModule } from '@app/theme/shared/shared.module';


@NgModule({
  declarations: [AdvancedutyComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdvancedutyRoutingModule
  ]
})
export class AdvancedutyModule { }
