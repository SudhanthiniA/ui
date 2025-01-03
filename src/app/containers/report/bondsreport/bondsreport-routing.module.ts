import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'bondwiseregistration',
    loadChildren: () => import('./bondwiseregistration/bondwiseregistration.module')
      .then(m => m.BondwiseregistrationModule)
  },
  {
    path: 'bondapplicationtrackingdetails',
    loadChildren: () => import('./bondapplicationtrackingdetails/bondapplicationtrackingdetails.module')
      .then(m => m.BondapplicationtrackingdetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BondsreportRoutingModule { }
