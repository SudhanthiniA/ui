import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { PrefermentationRoutingModule } from './prefermentation-routing.module';
import { PrefermentationComponent } from './prefermentation.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, PrefermentationComponent],
  imports: [
    CommonModule,
    PrefermentationRoutingModule,
    SharedModule
  ]
})
export class PrefermentationModule { }
