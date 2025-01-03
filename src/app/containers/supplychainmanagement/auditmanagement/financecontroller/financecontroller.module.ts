import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AdvancedutyregRoutingModule } from './financecontroller-routing.module';
import { FinancecontrollerComponent } from './financecontroller.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [FinancecontrollerComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    AdvancedutyregRoutingModule,
    SharedModule
  ]
})
export class AdvancedutyregModule { }
