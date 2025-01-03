import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForeclosureofenapurchaseorderComponent } from './foreclosureofenapurchaseorder.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : ForeclosureofenapurchaseorderComponent
  },
  {
    path: 'view',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForeclosureofenapurchaseorderRoutingModule { }
