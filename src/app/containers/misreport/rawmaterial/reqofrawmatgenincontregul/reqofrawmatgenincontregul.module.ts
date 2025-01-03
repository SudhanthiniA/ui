import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ReqofrawmatgenincontregulRoutingModule } from './reqofrawmatgenincontregul-routing.module';
import { ReqofrawmatgenincontregulComponent } from './reqofrawmatgenincontregul.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ReqofrawmatgenincontregulComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReqofrawmatgenincontregulRoutingModule
  ]
})
export class ReqofrawmatgenincontregulModule { }
