import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalereturnreportnewComponent } from './salereturnreportnew.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : SalereturnreportnewComponent
  },
  {
    path : 'view',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalereturnreportnewRoutingModule { }
