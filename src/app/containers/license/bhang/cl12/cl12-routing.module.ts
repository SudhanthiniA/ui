import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cl12Component } from './cl12.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : Cl12Component
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
export class Cl12RoutingModule { }
