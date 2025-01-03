import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LiquordetaildescRoutingModule } from './liquordetaildesc-routing.module';
import { LiquordetaildescComponent } from './liquordetaildesc.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [LiquordetaildescComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    LiquordetaildescRoutingModule,
    SharedModule
  ]
})
export class LiquordetaildescModule { }
