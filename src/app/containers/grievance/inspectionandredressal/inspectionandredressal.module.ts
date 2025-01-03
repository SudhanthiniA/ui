import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { InspectionandredressalComponent } from './inspectionandredressal.component';
import { InspectionandredressalRoutingModule } from './inspectionandredressal-routing.module';
import { ViewinspectionandredressalComponent } from './viewinspectionandredressal/viewinspectionandredressal.component';


@NgModule({
  declarations: [InspectionandredressalComponent, ViewinspectionandredressalComponent],
  imports: [
    CommonModule,
    SharedModule,
    InspectionandredressalRoutingModule
  ]
})
export class InspectionandredressalModule { }
