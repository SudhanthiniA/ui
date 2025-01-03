import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PurchasereturnComponent } from './purchasereturn.component';
import { ViewpurchasereturnComponent } from './viewpurchasereturn/viewpurchasereturn.component';

const routes: Routes = [
  {
    path : 'list',
    component : PurchasereturnComponent
  },
  {
    path : 'view/:id',
    component : ViewpurchasereturnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasereturnRoutingModule { }
