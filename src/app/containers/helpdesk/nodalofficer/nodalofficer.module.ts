import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { NodalofficerRoutingModule } from './nodalofficer-routing.module';
import { NodalofficerComponent } from './nodalofficer.component';
import { ViewnodalofficerComponent } from './viewnodalofficer/viewnodalofficer.component';

@NgModule({
  declarations: [NodalofficerComponent, ViewnodalofficerComponent],
  imports: [
    CommonModule,
    SharedModule,
    NodalofficerRoutingModule
  ]
})
export class NodalofficerModule { }
