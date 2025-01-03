import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AdvancedutyregisterRoutingModule } from './advancedutyregister-routing.module';
import { AdvancedutyregisterComponent } from './advancedutyregister.component';


@NgModule({
  declarations: [AdvancedutyregisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdvancedutyregisterRoutingModule
  ]
})
export class AdvancedutyregisterModule { }
