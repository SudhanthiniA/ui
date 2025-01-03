import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MwstockinRoutingModule } from './mwstockin-routing.module';
import { MwstockinComponent } from './mwstockin.component';
import { AddmwstockinComponent } from './addmwstockin/addmwstockin.component';
import { ViewmmwstockinComponent } from './viewmmwstockin/viewmmwstockin.component';
import { PreviewmwstockinComponent } from './previewmwstockin/previewmwstockin.component';

@NgModule({
  declarations: [MwstockinComponent, AddmwstockinComponent, ViewmmwstockinComponent, PreviewmwstockinComponent],
  imports: [
    CommonModule,
    SharedModule,
    MwstockinRoutingModule
  ]
})
export class MwstockinModule { }
