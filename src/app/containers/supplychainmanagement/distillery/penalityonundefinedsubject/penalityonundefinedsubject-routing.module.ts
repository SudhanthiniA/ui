import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PenalityonundefinedsubjectComponent } from './penalityonundefinedsubject.component';
import { AddbottleboxingComponent } from './addbottleboxing/addbottleboxing.component';
import { ViewbottleboxingComponent } from './viewbottleboxing/viewbottleboxing.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path : 'list',
    component: PenalityonundefinedsubjectComponent
  },
  {
    path : 'payment',
    component: PaymentComponent
  },
  {
    path: 'add',
    component: AddbottleboxingComponent
  },
  {
    path: 'edit/:Id',
    component: AddbottleboxingComponent
  },
  {
    path: 'view/:Id',
    component: ViewbottleboxingComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenalityonundefinedsubjectRoutingModule { }
