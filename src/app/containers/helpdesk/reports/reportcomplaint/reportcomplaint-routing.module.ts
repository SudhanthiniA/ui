import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportcomplaintComponent } from './reportcomplaint.component';

const routes: Routes = [
  { path: '', component: ReportcomplaintComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportcomplaintRoutingModule { }
