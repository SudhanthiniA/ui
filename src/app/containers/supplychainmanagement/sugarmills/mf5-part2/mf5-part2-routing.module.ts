import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditMf5part2Component } from './addedit-mf5part2/addedit-mf5part2.component';

import { Mf5Part2Component } from './mf5-part2.component';
import { ViewMf5part2Component } from './view-mf5part2/view-mf5part2.component';

const routes: Routes = [
  { path: 'list', component: Mf5Part2Component },
  { path: 'add', component: AddeditMf5part2Component },
  { path: 'edit/:Id', component: AddeditMf5part2Component },
  { path: 'view/:Id', component: ViewMf5part2Component },
  { path: 'preview', component: ViewMf5part2Component },
  {
    path: 'inspectionpart2',
    loadChildren: () => import('./inspectionmf5part2/inspectionmf5part2.module').then(m => m.Inspectionmf5part2Module)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf5Part2RoutingModule { }
