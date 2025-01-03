import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { InspectionreportRoutingModule } from './inspectionreport-routing.module';
import { InspectionreportComponent } from './inspectionreport.component';
import { ViewinspectionreportComponent } from './viewinspectionreport/viewinspectionreport.component';
import { AddeditinspectionreportComponent } from './addeditinspectionreport/addeditinspectionreport.component';

@NgModule({
  declarations: [
    InspectionreportComponent, 
    ViewinspectionreportComponent, 
    AddeditinspectionreportComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InspectionreportRoutingModule
  ]
})
export class InspectionreportModule { }
