import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AdvancedutyregRoutingModule } from './entitydashboard-routing.module';
import { EntitydashboardComponent } from './entitydashboard.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [EntitydashboardComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    AdvancedutyregRoutingModule,
    SharedModule
  ]
})
export class AdvancedutyregModule { }
