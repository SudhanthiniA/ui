import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { FeepenalitysubtypeRoutingModule } from './feepenalitysubtype-routing.module';
import { FeepenalitysubtypeComponent } from './feepenalitysubtype.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [FeepenalitysubtypeComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeepenalitysubtypeRoutingModule
  ]
})
export class FeepenalitysubtypeModule { }
