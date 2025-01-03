import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LiquorsubtypeRoutingModule } from './liquorsubtype-routing.module';
import { LiquorsubtypeComponent } from './liquorsubtype.component';
import { AddliquorsubtypeComponent } from './addliquorsubtype/addliquorsubtype.component';
import { ViewliquorsubtypeComponent } from './viewliquorsubtype/viewliquorsubtype.component';

@NgModule({
  declarations: [LiquorsubtypeComponent, AddliquorsubtypeComponent, ViewliquorsubtypeComponent],
  imports: [
    CommonModule,
    SharedModule,
    LiquorsubtypeRoutingModule
  ]
})
export class LiquorsubtypeModule { }
