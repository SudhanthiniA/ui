import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ReceiptconsumptionComponent } from './receiptconsumption.component';

const routes: Routes = [

  {
    path: 'list',
    component: ReceiptconsumptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptconsumptionRoutingModule { }
