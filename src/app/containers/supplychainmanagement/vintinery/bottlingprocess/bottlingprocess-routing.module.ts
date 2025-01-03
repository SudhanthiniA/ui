import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'bottlingplan',
    loadChildren: () => import('./bottlingplan/bottlingplan.module').then(module => module.BottlingplanModule)
  },
  {
    path: 'manualscanning',
    loadChildren: () => import('./manualscanning/manualscanning.module').then(module => module.ManualscanningModule)
  },
  {
    path: 'bottlingplanpredecleration',
    loadChildren: () => import('./bottlingplanpredecleration/bottlingplanpredecleration.module').then(module => module.BottlingplanpredeclerationModule)
  },
  {
    path: 'barqrwastage',
    loadChildren: () => import('./barqrwastage/barqrwastage.module').then(module => module.BarqrwastageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlingprocessRoutingModule { }
