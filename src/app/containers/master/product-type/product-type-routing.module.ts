import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductTypeComponent } from './product-type.component';
import { AddEditProductTypeComponent } from './add-edit-product-type/add-edit-product-type.component';
import { ViewProductTypeComponent } from './view-product-type/view-product-type.component';

const routes: Routes = [
  { path: 'list', component: ProductTypeComponent },
  { path: 'add', component: AddEditProductTypeComponent },
  { path: 'edit/:id', component: AddEditProductTypeComponent },
  { path: 'view', component: ViewProductTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductTypeRoutingModule { }
