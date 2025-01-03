import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartensComponent } from './cartens.component';
import { AddeditcartensComponent } from './addeditcartens/addeditcartens.component';
import { ViewcartensComponent } from './viewcartens/viewcartens.component';

const routes: Routes = [
  { path: 'list', component: CartensComponent },
  { path: 'add', component: AddeditcartensComponent },
  { path: 'edit/:id', component: AddeditcartensComponent },
  { path: 'view/:id', component: ViewcartensComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartensRoutingModule { }
