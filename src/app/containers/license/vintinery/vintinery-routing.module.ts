import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'v1',
    loadChildren: () => import('./v1/v1.module').then(module => module.V1Module)
  },
  {
    path: 'v2',
    loadChildren: () => import('./v2/v2.module').then(module => module.V2Module)
  },
  {
    path: 'stockactivity',
    loadChildren: () => import('./stockactivity/stockactivity.module').then(module => module.StockactivityModule)
  },
  {
    path: 'stockavailability',
    loadChildren: () => import('./stockavailability/stockavailability.module').then(module => module.StockavailabilityModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VintineryRoutingModule { }
