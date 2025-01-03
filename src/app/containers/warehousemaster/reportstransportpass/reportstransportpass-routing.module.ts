import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportstransportpassComponent } from './reportstransportpass.component';

const routes: Routes = [
  { path: 'list', component: ReportstransportpassComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportstransportpassRoutingModule { }
