import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Fl6Component } from './fl6.component';
import { Viewfl6Component } from './viewfl6/viewfl6.component';

const routes: Routes = [
  {
    path : 'add',
    component : Fl6Component
  },
  {
    path : 'view',
    component : Viewfl6Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl6RoutingModule { }
