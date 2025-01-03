import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { BlendingprocessRoutingModule } from './blendingprocess-routing.module';
import { BlendingprocessComponent } from './blendingprocess.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, BlendingprocessComponent],
  imports: [
    CommonModule,
    BlendingprocessRoutingModule,
    SharedModule
  ]
})
export class BlendingprocessModule { }
