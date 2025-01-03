import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NarcoticimportRoutingModule } from './narcoticimport-routing.module';
import { NarcoticimportComponent } from './narcoticimport.component';
import { ViewnarcoticimportComponent } from './viewnarcoticimport/viewnarcoticimport.component';

@NgModule({
  declarations: [NarcoticimportComponent, ViewnarcoticimportComponent],
  imports: [
    CommonModule,
    SharedModule,
    NarcoticimportRoutingModule
  ]
})
export class NarcoticimportModule { }
