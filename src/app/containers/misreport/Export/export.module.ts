import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ExportRoutingModule } from './export-routing.module';
import { ExportorderdispatchComponent } from './exportorderdispatch/exportorderdispatch.component';
import { DistilleryeoireportComponent } from './distilleryeoireport/distilleryeoireport.component';

@NgModule({
  declarations: [ExportorderdispatchComponent, DistilleryeoireportComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExportRoutingModule
  ]
})
export class ExportModule { }
