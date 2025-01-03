import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DamageproductsComponent } from './damageproducts.component';
import { AdddamageproductsComponent } from './adddamageproducts/adddamageproducts.component';
import { ViewdamageproductsComponent } from './viewdamageproducts/viewdamageproducts.component';

const routes: Routes = [
  {
    path: 'list',
    component: DamageproductsComponent
  },
  {
    path: 'add',
    component: AdddamageproductsComponent
  },
  {
    path: 'view',
    component: ViewdamageproductsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DamageproductsRoutingModule { }
