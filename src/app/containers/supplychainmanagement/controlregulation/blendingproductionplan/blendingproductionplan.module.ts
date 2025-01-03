import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BlendingproductionplanRoutingModule } from './blendingproductionplan-routing.module';
import { BlendingproductionplanComponent } from './blendingproductionplan.component';
// import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [BlendingproductionplanComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BlendingproductionplanRoutingModule
  ]
})
export class BlendingproductionplanModule { }
