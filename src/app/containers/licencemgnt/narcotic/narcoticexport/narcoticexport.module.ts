import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NarcoticexportRoutingModule } from './narcoticexport-routing.module';
import { NarcoticexportComponent } from './narcoticexport.component';
import { ViewnarcoticexportComponent } from './viewnarcoticexport/viewnarcoticexport.component';

@NgModule({
  declarations: [NarcoticexportComponent, ViewnarcoticexportComponent ],
  imports: [
    CommonModule,
    SharedModule,
    NarcoticexportRoutingModule
  ]
})
export class NarcoticexportModule { }
