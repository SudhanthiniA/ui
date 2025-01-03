import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'indentbilling',
    loadChildren: () => import('./indentrequest/indentrequest.module').then(module => module.IndentrequestModule)
  },
  {
    path: 'paymenttransaction',
    loadChildren: () => import('./paymenttransaction/paymenttransaction.module').then(module => module.PaymenttransactionModule)
  },
  {
    path: 'paymentoverviewscreen',
    loadChildren: () => import('./paymentoverviewscreen/paymentoverviewscreen.module').then(module => module.PaymentoverviewscreenModule)
  },
  {
    path: 'paymentsummary',
    loadChildren: () => import('./paymentsummary/paymentsummary.module').then(module => module.PaymentsummaryModule)
  },
  {
    path: 'purchasebreakagerefund',
    loadChildren: () => import('./purchasebreakagerefund/purchasebreakagerefund.module').then(module => module.PurchasebreakagerefundModule)

  }
  ,
  {
    path: 'salebilling',
    loadChildren: () => import('./salebilling/salebilling.module').then(module => module.SalebillingModule)
  },
  {
    path: 'salereturn',
    loadChildren: () => import('./salereturn/salereturn.module').then(module => module.SalereturnModule)
  },
  {
    path: 'salereport',
    loadChildren: () => import('./salereport/salereport.module').then(module => module.SalereportModule)
  },
  {
    path: 'alltransaction',
    loadChildren: () => import('./alltransaction/alltransaction.module').then(module => module.AlltransactionModule)
  },
  {
    path: 'expirybrandreport',
    loadChildren: () => import('./expirybrandreport/expirybrandreport.module').then(module => module.ExpirybrandreportModule)
  },
  {
    path: 'inventorystock',
    loadChildren: () => import('./inventorystock/inventorystock.module').then(module => module.InventorystockModule)
  },
  {
    path: 'purchasereport',
    loadChildren: () => import('./purchasereport/purchasereport.module').then(module => module.PurchasereportModule)
  },
  {
    path: 'daybook',
    loadChildren: () => import('./daybook/daybook.module').then(module => module.DaybookModule)
  },
  {
    path: 'salereturnreportnew',
    loadChildren: () => import('./salereturnreportnew/salereturnreportnew.module').then(module => module.SalereturnreportnewModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(module => module.PaymentModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(module => module.OrderModule)

  }
  ,
  {
    path: 'salebilling-secondinput',
    loadChildren: () => import('./salebilling-secondinput/salebilling-secondinput.module').then(module => module.SalebillingSecondinputModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
