import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntercbwdispatchComponent } from './intercbwdispatch.component';
import { AddintercbwdispatchComponent } from './addintercbwdispatch/addintercbwdispatch.component';
import { ViewintercbwdispatchComponent } from './viewintercbwdispatch/viewintercbwdispatch.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'list', component: IntercbwdispatchComponent},
  { path: 'add', component: AddintercbwdispatchComponent},
  {path: 'view', component:ViewintercbwdispatchComponent},
  {path: 'payment', component:PaymentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntercbwdispatchRoutingModule { }
