import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'deo',
    loadChildren: () => import('./deo/deo.module').then(m => m.DeoModule)
  },
  {
    path: 'dec',
    loadChildren: () => import('./dec/dec.module').then(m => m.DecModule)
  },
  {
    path: 'aec',
    loadChildren: () => import('./aec/aec.module').then(m => m.AecModule)
  },
  {
    path: 'excisecommissioner',
    loadChildren: () => import('./excisecommissioner/excisecommissioner.module').then(m => m.ExcisecommissionerModule)
  },
  {
    path: 'dm',
    loadChildren: () => import('./dm/dm.module').then(m => m.DmModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenseapprovalRoutingModule { }
