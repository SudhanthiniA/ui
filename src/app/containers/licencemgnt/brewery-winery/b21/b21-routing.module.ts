import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { B21Component } from './b21.component';
import { Viewb21Component } from './viewb21/viewb21.component';

const routes: Routes = [
  {
    path : 'list',
    component : B21Component
  },
  {
    path : 'view',
    component : Viewb21Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B21RoutingModule { }
