import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'masteradmin',
    loadChildren: () => import('./masteradmin/masteradmin.module').then(m => m.MasteradminModule)
  },
  {
    path: 'mgqmgr',
    loadChildren: () => import('./mgqmgr/mgqmgr.module').then(m => m.MgqmgrModule)
  },
  {
    path: 'lmfee',
    loadChildren: () => import('./lmfee/lmfee.module').then(m => m.LmfeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
