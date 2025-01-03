import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessingwastageComponent } from './processingwastage.component';
import { AddprocessingwastageComponent } from './addprocessingwastage/addprocessingwastage.component';
import { ViewprocessingwastageComponent } from './viewprocessingwastage/viewprocessingwastage.component';
import { PaymentComponent } from './payment/payment.component';
const routes: Routes = [
  {
    path : 'list',
    component : ProcessingwastageComponent
  },
  {
    path : 'add',
    component : AddprocessingwastageComponent
  },
  {
    path: 'view',
    component : ViewprocessingwastageComponent
  },
  {
    path: 'payment',
    component : PaymentComponent
  }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

// @NgModule({
//   declarations: [],
//   imports: [
//     // CommonModule
//   ]
// })
export class ProcessingwastageRoutingModule { }
