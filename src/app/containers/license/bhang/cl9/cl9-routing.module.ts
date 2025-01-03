import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cl9Component } from './cl9.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : Cl9Component
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
export class Cl9RoutingModule { }
