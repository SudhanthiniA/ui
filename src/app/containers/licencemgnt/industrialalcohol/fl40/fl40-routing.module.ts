import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Fl40Component } from './fl40.component';


const routes: Routes = [
  {
    path : 'add',
    component : Fl40Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl40RoutingModule { }
