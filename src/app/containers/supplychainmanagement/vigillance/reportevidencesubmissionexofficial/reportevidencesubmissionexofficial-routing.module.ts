import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportevidencesubmissionexofficialComponent } from './reportevidencesubmissionexofficial.component';
import { AddreportevidencesubmissionexofficialComponent } from './addreportevidencesubmissionexofficial/addreportevidencesubmissionexofficial.component';
import { ViewreportevidencesubmissionexofficialComponent } from './viewreportevidencesubmissionexofficial/viewreportevidencesubmissionexofficial.component';

const routes: Routes = [
  { path: 'list', component: ReportevidencesubmissionexofficialComponent },
  { path: 'add', component: AddreportevidencesubmissionexofficialComponent },
  { path: 'view', component: ViewreportevidencesubmissionexofficialComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReportevidencesubmissionexofficialRoutingModule { }
