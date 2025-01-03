import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Fl9Component } from './fl9.component';
import { Addfl9Component } from './addfl9/addfl9.component';

const routes: Routes = [

  {
    path: 'list',
    component: Fl9Component
  },
  {
    path: 'add',
    component: Addfl9Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl9RoutingModule { }
