import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mb3Component } from './mb3.component';
import { Viewmb3Component } from './viewmb3/viewmb3.component';

const routes: Routes = [
  {
    path : 'list',
    component : Mb3Component
  },
  {
    path : 'view',
    component : Viewmb3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mb3RoutingModule { }
