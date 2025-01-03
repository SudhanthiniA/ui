import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Fl32Component } from './fl32.component';


const routes: Routes = [
  {
    path : 'add',
    component : Fl32Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl32RoutingModule { }
