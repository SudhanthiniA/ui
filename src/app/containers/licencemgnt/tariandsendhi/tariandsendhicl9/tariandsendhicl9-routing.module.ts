import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tariandsendhicl9Component } from './tariandsendhicl9.component';
import { Viewtariandsendhicl9Component } from './viewtariandsendhicl9/viewtariandsendhicl9.component';

const routes: Routes = [
  {
    path : 'add',
    component : Tariandsendhicl9Component
  },
  {
    path : 'view',
    component : Viewtariandsendhicl9Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tariandsendhicl9RoutingModule { }
