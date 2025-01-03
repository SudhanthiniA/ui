import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formfl28Component } from './formfl28.component';
import { Viewfl28Component } from './viewfl28/viewfl28.component';
import { Addfl28Component } from './addfl28/addfl28.component';

const routes: Routes = [
  {
    path: 'list',
    component: Formfl28Component
  },
  {
    path: 'add',
    component: Addfl28Component
  },
  {
    path: 'view/:id',
    component: Viewfl28Component
  },
  {
    path: 'edit/:id',
    component: Addfl28Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Formfl28RoutingModule { }
