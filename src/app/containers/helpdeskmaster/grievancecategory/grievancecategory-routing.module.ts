import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrievancecategoryComponent } from './grievancecategory.component';
import { AddgrievancecategoryComponent } from './addgrievancecategory/addgrievancecategory.component';
import { ViewgrievancecategoryComponent } from './viewgrievancecategory/viewgrievancecategory.component';

const routes: Routes = [
  {
    path: 'list',
    component: GrievancecategoryComponent
  },
  {
    path: 'add',
    component: AddgrievancecategoryComponent
  },
  {
    path: 'view',
    component: ViewgrievancecategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrievancecategoryRoutingModule { }
