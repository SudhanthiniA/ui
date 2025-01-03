import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AdvancedutyregisterRoutingModule } from './advancedutyregister-routing.module';
import { AdvancedutyregisterComponent } from './advancedutyregister.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [AdvancedutyregisterComponent,AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdvancedutyregisterRoutingModule
  ]
})
export class AdvancedutyregisterModule { }
