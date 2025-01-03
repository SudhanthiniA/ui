import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AdvancedutyregRoutingModule } from './advancedutyreg-routing.module';
import { AdvancedutyregComponent } from './advancedutyreg.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [AdvancedutyregComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    AdvancedutyregRoutingModule,
    SharedModule
  ]
})
export class AdvancedutyregModule { }
