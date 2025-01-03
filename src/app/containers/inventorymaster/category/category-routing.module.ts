import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { AddeditcategoryComponent } from './addeditcategory/addeditcategory.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';


const routes: Routes = [
  {
    path: 'list',
    component: CategoryComponent
  },
  {
    path: 'add',
    component: AddeditcategoryComponent
  },
  {
    path : 'edit/:Id',
    component: AddeditcategoryComponent
  },
  {
    path : 'view/:Id',
    component : ViewcategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
