import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { MolassesdispatchreportRoutingModule } from './molassesdispatchreport-routing.module';
import { MolassesdispatchreportComponent } from './molassesdispatchreport.component';

@NgModule({
  declarations: [MolassesdispatchreportComponent],
  imports: [
    CommonModule,
    SharedModule,
    MolassesdispatchreportRoutingModule
  ]
})
export class MolassesdispatchreportModule { }
