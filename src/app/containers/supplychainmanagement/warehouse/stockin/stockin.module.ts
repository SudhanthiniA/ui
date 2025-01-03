import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockinRoutingModule } from './stockin-routing.module';
import { StockinComponent } from './stockin.component';
import { AddstockinComponent } from './addstockin/addstockin.component';
import { ViewstockinComponent } from './viewstockin/viewstockin.component';
import { PreviewstockinComponent } from './previewstockin/previewstockin.component';


@NgModule({
  declarations: [StockinComponent, AddstockinComponent, ViewstockinComponent, PreviewstockinComponent],
  imports: [
    CommonModule,
    StockinRoutingModule,
    SharedModule
  ]
})
export class StockinModule { }
