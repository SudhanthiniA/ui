import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Clb5declarationComponent } from './clb5declaration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : Clb5declarationComponent
  },
  {
    path : 'add',
    component : AddComponent
  },
  // {
  //   path : 'edit/:id',
  //   component : AddComponent
  // },
  {
    path : 'view',
    component : ViewComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Clb5declarationRoutingModule { }
