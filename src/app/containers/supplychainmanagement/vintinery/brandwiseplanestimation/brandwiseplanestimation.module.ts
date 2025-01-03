import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BrandwiseplanestimationRoutingModule  } from './brandwiseplanestimation-routing.module';
import { BrandwiseplanestimationComponent } from './brandwiseplanestimation.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [BrandwiseplanestimationComponent, AddComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrandwiseplanestimationRoutingModule
  ]
})
export class BrandwiseplanestimationModule { }
