import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Fl17Component } from './fl17.component';


const routes: Routes = [
  {
    path : 'add',
    component : Fl17Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl17RoutingModule { }
