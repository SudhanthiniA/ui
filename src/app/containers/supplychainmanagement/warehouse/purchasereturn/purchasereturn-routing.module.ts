import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchasereturnComponent } from './purchasereturn.component';
import { ViewpurchasereturnComponent } from './viewpurchasereturn/viewpurchasereturn.component';
import { AddpurchasereturnComponent } from './addpurchasereturn/addpurchasereturn.component';

const routes: Routes = [
  {
    path: 'list',
    component: PurchasereturnComponent
  },
  {
    path: 'add',
    component: AddpurchasereturnComponent
  },
  {
    path: 'view',
    component: ViewpurchasereturnComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasereturnRoutingModule { }
