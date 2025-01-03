import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ShiftconfigurationRoutingModule } from './shiftconfiguration-routing.module';
import { ShiftconfigurationComponent } from './shiftconfiguration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ShiftconfigurationComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    ShiftconfigurationRoutingModule,
    SharedModule
  ]
})
export class ShiftconfigurationModule { }
