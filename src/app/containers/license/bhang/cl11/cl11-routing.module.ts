import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cl11Component } from './cl11.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : Cl11Component
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
export class Cl11RoutingModule { }
