import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchasereportComponent } from './purchasereport.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : PurchasereportComponent
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
export class PurchasereportRoutingModule { }
