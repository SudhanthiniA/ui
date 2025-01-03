import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'applicationforpermitmethylalcohl',
    loadChildren: () => import('./applicationforpermitmethylalcohl/applicationforpermitmethylalcohl.module').then(m => m.ApplicationforpermitmethylalcohlModule)
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MethylalcoholRoutingModule { }
