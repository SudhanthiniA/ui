import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LiquorsupplytypeRoutingModule } from './liquorsupplytype-routing.module';
import { LiquorsupplytypeComponent } from './liquorsupplytype.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [LiquorsupplytypeComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    LiquorsupplytypeRoutingModule
  ]
})
export class LiquorsupplytypeModule { }