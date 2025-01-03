import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { AdvancedutyamountRoutingModule } from './advancedutyamount-routing.module';
import { AdvancedutyamountComponent } from './advancedutyamount.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [AdvancedutyamountComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdvancedutyamountRoutingModule
  ]
})
export class AdvancedutyamountModule { }
