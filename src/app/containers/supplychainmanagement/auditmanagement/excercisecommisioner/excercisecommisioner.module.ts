import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AdvancedutyregRoutingModule } from './excercisecommisioner-routing.module';
import { ExcercisecommisionerComponent } from './excercisecommisioner.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ExcercisecommisionerComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    AdvancedutyregRoutingModule,
    SharedModule
  ]
})
export class AdvancedutyregModule { }
