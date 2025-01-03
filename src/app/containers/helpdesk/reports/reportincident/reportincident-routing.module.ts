import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportincidentComponent } from './reportincident.component';

const routes: Routes = [
  { path: '', component: ReportincidentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportincidentRoutingModule { }
