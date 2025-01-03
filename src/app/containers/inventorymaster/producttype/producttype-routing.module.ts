
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ProducttypeComponent } from './producttype.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProducttypeComponent
  },
  {
    path: 'add',
    component: AddproductComponent
  },
  {
    path: 'edit/:Id',
    component: AddproductComponent
  },
  {
    path: 'view/:Id',
    component: ViewproductComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducttypeRoutingModule { }
