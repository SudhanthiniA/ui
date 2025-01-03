import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'permitrequestdraftgatepass',
    loadChildren: () => import('./permitrequestdraftgatepass/permitrequestdraftgatepass.module').then(m => m.PermitrequestdraftgatepassModule)
  },
  {
    path: 'finalgatepass',
    loadChildren: () => import('./finalgatepass/finalgatepass.module').then(m => m.FinalgatepassModule)
  },
  {
    path: 'permitrequest',
    loadChildren: () => import('./permitrequest/permitrequest.module').then(m => m.PermitrequestModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl32RoutingModule { }
