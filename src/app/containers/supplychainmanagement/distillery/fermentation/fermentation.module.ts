import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { FermentationRoutingModule } from './fermentation-routing.module';
import { FermentationComponent } from './fermentation.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, FermentationComponent],
  imports: [
    CommonModule,
    FermentationRoutingModule,
    SharedModule
  ]
})
export class FermentationModule { }
