import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Fl49Component } from './fl49.component';


const routes: Routes = [
  {
    path : 'add',
    component : Fl49Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl49RoutingModule { }
