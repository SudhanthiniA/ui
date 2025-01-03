import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { PredeclarationRoutingModule } from './predeclaration-routing.module';
import { PredeclarationComponent } from './predeclaration.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, PredeclarationComponent],
  imports: [
    CommonModule,
    PredeclarationRoutingModule,
    SharedModule
  ]
})
export class PredeclarationModule { }
