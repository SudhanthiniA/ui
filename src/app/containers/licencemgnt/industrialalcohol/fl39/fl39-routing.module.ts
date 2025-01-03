import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Fl39Component } from './fl39.component';


const routes: Routes = [
  {
    path : 'add',
    component : Fl39Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl39RoutingModule { }
