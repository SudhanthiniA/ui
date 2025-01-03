import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletbalanceComponent } from './walletbalance.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path: 'list',
    component: WalletbalanceComponent
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
export class WalletbalanceRoutingModule { }
