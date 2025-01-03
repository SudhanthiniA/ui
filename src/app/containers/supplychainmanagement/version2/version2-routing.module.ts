import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'bottlingindentmanagement',
    loadChildren: () => import('./bottlingindentmanagement/bottlingindentmanagement.module').then(module => module.BottlingindentmanagementModule)
  },
  {
    path: 'bottlingtransportpassmgmt',
    loadChildren: () => import('./bottlingtransportpassmgmt/bottlingtransportpassmgmt.module').then(module => module.BottlingtransportpassmgmtModule)
  },
  {
    path: 'stockin',
    loadChildren: () => import('./stockin/stockin.module').then(module => module.StockinModule)
  },
  {
    path: 'dispatch',
    loadChildren: () => import('./dispatch/dispatch.module').then(module => module.DispatchModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Version2RoutingModule { }
