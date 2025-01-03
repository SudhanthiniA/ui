import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'activitylog',
    loadChildren: () => import('./activitylog/activitylog.module').then(m => m.ActivitylogModule)
  },
  {
    path: 'logingactivitylog',
    loadChildren: () => import('./logingactivitylog/logingactivitylog.module').then(m => m.LogingactivitylogModule)
  },
  {
    path: 'userwiseactivitylog',
    loadChildren: () => import('./userwiseactivitylog/userwiseactivitylog.module').then(m => m.UserwiseactivitylogModule)
  },
  {
    path: 'transactionpayment',
    loadChildren: () => import('./transactionpayment/transactionpayment.module').then(m => m.TransactionpaymentModule)
  },
  {
    path: 'appcommunication',
    loadChildren: () => import('./appcommunication/appcommunication.module').then(m => m.AppcommunicationModule)
  },
  {
    path: 'sms',
    loadChildren: () => import('./sms/sms.module').then(m => m.SmsModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./email/email.module').then(m => m.EmailModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
