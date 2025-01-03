import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bio1Component } from './bio1.component';
import { Viewbio1Component } from './viewbio1/viewbio1.component';

const routes: Routes = [
  { path: 'add', component: Bio1Component },
  { path: 'view', component: Viewbio1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bio1RoutingModule { }
