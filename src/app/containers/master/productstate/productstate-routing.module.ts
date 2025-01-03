import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductstateComponent } from './productstate.component';
import { AddproductstateComponent } from './addproductstate/addproductstate.component';
import { ViewproductstateComponent } from './viewproductstate/viewproductstate.component';



const routes: Routes = [
  {
    path: 'list',
    component: ProductstateComponent
  },
  {
    path: 'add',
    component: AddproductstateComponent
  },
  {
    path : 'view',
    component: ViewproductstateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductstateRoutingModule { }
