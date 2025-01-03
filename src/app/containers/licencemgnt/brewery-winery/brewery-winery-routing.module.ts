import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreweryWineryComponent } from './brewery-winery.component';

const routes: Routes = [
  {
    path : '',
    component : BreweryWineryComponent
  },
  {
    path: 'v1',
    loadChildren: () => import('./v1/v1.module').then(m => m.V1Module)
  },
  {
    path: 'v2',
    loadChildren: () => import('./v2/v2.module').then(m => m.V2Module)
  },
  {
    path: 'v3',
    loadChildren: () => import('./v3/v3.module').then(m => m.V3Module)
  },
  {
    path: 'v4',
    loadChildren: () => import('./v4/v4.module').then(m => m.V4Module)
  },
  {
    path: 'mb1',
    loadChildren: () => import('./mb1/mb1.module').then(m => m.Mb1Module)
  },
  {
    path: 'mb2',
    loadChildren: () => import('./mb2/mb2.module').then(m => m.Mb2Module)
  },
  {
    path: 'mb3',
    loadChildren: () => import('./mb3/mb3.module').then(m => m.Mb3Module)
  },
  {
    path: 'mb4',
    loadChildren: () => import('./mb4/mb4.module').then(m => m.Mb4Module)
  },
  {
    path: 'mb5',
    loadChildren: () => import('./mb5/mb5.module').then(m => m.Mb5Module)
  },
  {
    path: 'mb6',
    loadChildren: () => import('./mb6/mb6.module').then(m => m.Mb6Module)
  },
  {
    path: 'mb7',
    loadChildren: () => import('./mb7/mb7.module').then(m => m.Mb7Module)
  },
  {
    path: 'b1',
    loadChildren: () => import('./b1/b1.module').then(m => m.B1Module)
  },
  {
    path: 'b20',
    loadChildren: () => import('./b20/b20.module').then(m => m.B20Module)
  },
  {
    path: 'b19',
    loadChildren: () => import('./b19/b19.module').then(m => m.B19Module)
  },
  {
    path: 'b21',
    loadChildren: () => import('./b21/b21.module').then(m => m.B21Module)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreweryWineryRoutingModule { }
