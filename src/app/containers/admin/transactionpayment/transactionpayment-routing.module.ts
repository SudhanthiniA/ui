import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'license',
    loadChildren: () => import('./license/license.module').then(module => module.LicenseModule)
  },
  {
    path: 'walletbalance',
    loadChildren: () => import('./walletbalance/walletbalance.module').then(module => module.WalletbalanceModule)
  },
{
    path: 'advancedutyamount',
    loadChildren: () => import('./advancedutyamount/advancedutyamount.module').then(module => module.AdvancedutyamountModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionpaymentRoutingModule { }
