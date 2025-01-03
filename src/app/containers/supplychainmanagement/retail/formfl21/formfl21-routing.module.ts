import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formfl21Component } from './formfl21.component';
import { Addfl21Component } from './addfl21/addfl21.component';
import { Viewfl21Component } from './viewfl21/viewfl21.component';

const routes: Routes = [
  {
    path: 'list',
    component: Formfl21Component
  },
  {
    path: 'add',
    component: Addfl21Component
  },
  {
    path: 'view/:id',
    component: Viewfl21Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Formfl21RoutingModule { }
