import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Fl9Component } from './fl9.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'add',
    component : Fl9Component
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
export class Fl9RoutingModule { }
