import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'aecapprovalviewonly',
    loadChildren: () => import('./aecapprovalviewonly/aecapprovalviewonly.module').then(module => module.AecapprovalviewonlyModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AecRoutingModule { }
