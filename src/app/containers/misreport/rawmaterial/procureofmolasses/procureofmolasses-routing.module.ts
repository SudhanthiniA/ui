import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcureofmolassesComponent } from './procureofmolasses.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: ProcureofmolassesComponent },
  { path: 'view', component: ViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcureofmolassesRoutingModule { }
