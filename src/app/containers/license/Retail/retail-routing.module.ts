import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'retailrenewal',
    loadChildren: () => import('./retailrenewal/retailrenewal.module').then(module => module.RetailrenewalModule)
  },
  {
    path: 'elottery',
    loadChildren: () => import('./e-lottery/elottery.module').then(module => module.ElotteryModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailRoutingModule { }
