import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AecapprovalviewonlyComponent } from './aecapprovalviewonly.component';
import { ViewComponent } from './view/view.component';
const routes: Routes = [
  {
    path: 'list',
    component: AecapprovalviewonlyComponent
  },
  {
    path: 'view',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AecapprovalviewonlyRoutingModule { }
