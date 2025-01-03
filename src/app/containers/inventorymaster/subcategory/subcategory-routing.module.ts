

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubcategoryComponent } from './subcategory.component';
import { ViewsubcategoryComponent } from './viewsubcategory/viewsubcategory.component';
import { AddeditsubcategoryComponent } from './addeditsubcategory/addeditsubcategory.component';

const routes: Routes = [
  {
    path: 'list',
    component: SubcategoryComponent
  },
  {
    path: 'add',
    component: AddeditsubcategoryComponent
  },
  {
    path: 'edit/:Id',
    component: AddeditsubcategoryComponent
  },
  {
    path: 'view/:Id',
    component: ViewsubcategoryComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoryRoutingModule { }
