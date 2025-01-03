import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockinRoutingModule } from './stockin-routing.module';
import { StockinComponent } from './stockin.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PreviewComponent } from './preview/preview.component';


@NgModule({
  declarations: [StockinComponent, AddComponent, ViewComponent, PreviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockinRoutingModule
  ]
})
export class StockinModule { }
