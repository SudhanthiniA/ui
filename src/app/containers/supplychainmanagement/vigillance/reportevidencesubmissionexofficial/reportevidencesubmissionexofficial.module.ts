import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ReportevidencesubmissionexofficialRoutingModule } from './reportevidencesubmissionexofficial-routing.module';
import { ReportevidencesubmissionexofficialComponent } from './reportevidencesubmissionexofficial.component';
import { AddreportevidencesubmissionexofficialComponent } from './addreportevidencesubmissionexofficial/addreportevidencesubmissionexofficial.component';
import { ViewreportevidencesubmissionexofficialComponent } from './viewreportevidencesubmissionexofficial/viewreportevidencesubmissionexofficial.component';

@NgModule({
  declarations: [ReportevidencesubmissionexofficialComponent, AddreportevidencesubmissionexofficialComponent, ViewreportevidencesubmissionexofficialComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReportevidencesubmissionexofficialRoutingModule
  ]
})

export class ReportevidencesubmissionexofficialModule { }
