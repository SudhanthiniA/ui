import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AdvanceDutyRoutingModule } from './advance-duty-routing.module';
import { AdvanceDutyComponent } from './advance-duty.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [AdvanceDutyComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdvanceDutyRoutingModule
  ]
})

export class AdvanceDutyModule { }
