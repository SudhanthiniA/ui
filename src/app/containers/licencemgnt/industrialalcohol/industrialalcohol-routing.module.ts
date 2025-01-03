import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'fl16',
    loadChildren: () => import('./fl16/fl16.module').then(module => module.Fl16Module)
  },
  {
    path: 'fl17',
    loadChildren: () => import('./fl17/fl17.module').then(module => module.Fl17Module)
  },
  {
    path: 'fl32',
    loadChildren: () => import('./fl32/fl32.module').then(module => module.Fl32Module)
  },
  {
    path: 'fl39',
    loadChildren: () => import('./fl39/fl39.module').then(module => module.Fl39Module)
  },
  {
    path: 'fl40',
    loadChildren: () => import('./fl40/fl40.module').then(module => module.Fl40Module)
  },
  {
    path: 'fl41',
    loadChildren: () => import('./fl41/fl41.module').then(module => module.Fl41Module)
  },
  {
    path: 'fl49',
    loadChildren: () => import('./fl49/fl49.module').then(module => module.Fl49Module)
  },
  {
    path: 'ds1',
    loadChildren: () => import('./ds1/ds1.module').then(module => module.Ds1Module)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustrialalcoholRoutingModule { }
