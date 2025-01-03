import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'consignmentreceipt',
    loadChildren: () => import('./consignmentreceipt/consignmentreceipt.module').then(module => module.ConsignmentreceiptModule)
  },
  {
    path: 'indentrequest',
    loadChildren: () => import('./indentrequest/indentrequest.module').then(module => module.IndentrequestModule)
  },
  {
    path: 'dispatch',
    loadChildren: () => import('./dispatch/dispatch.module').then(module => module.DispatchModule)
  },
  {
    path: 'transportgeneration',
    loadChildren: () => import('./transportgeneration/transportgeneration.module').then(module => module.TransportgenerationModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BondsRoutingModule { }
