import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tariandsendhicl8Component } from './tariandsendhicl8.component';
import { Viewtariandsendhicl8Component } from './viewtariandsendhicl8/viewtariandsendhicl8.component';

const routes: Routes = [
  {
    path : 'add',
    component : Tariandsendhicl8Component
  },
  {
    path : 'view',
    component : Viewtariandsendhicl8Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tariandsendhicl8RoutingModule { }
