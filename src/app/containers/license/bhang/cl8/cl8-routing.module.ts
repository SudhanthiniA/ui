import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cl8Component } from './cl8.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : Cl8Component
  },
  {
    path : 'view',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cl8RoutingModule { }
