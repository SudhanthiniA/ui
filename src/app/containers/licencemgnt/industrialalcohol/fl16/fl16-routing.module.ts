import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Fl16Component } from './fl16.component';


const routes: Routes = [
  {
    path : 'add',
    component : Fl16Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl16RoutingModule { }
