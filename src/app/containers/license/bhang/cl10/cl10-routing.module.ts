import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cl10Component } from './cl10.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : Cl10Component
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
export class Cl10RoutingModule { }
