import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Id16Component } from './id16.component';
import { Viewid16Component } from './viewid16/viewid16.component';

const routes: Routes = [
  {
    path : 'list',
    component : Id16Component
  },
  {
    path : 'view',
    component : Viewid16Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Id16RoutingModule { }
