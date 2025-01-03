import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Fl17Component } from './fl17.component';
import { Viewfl17Component } from './viewfl17/viewfl17.component';
import { Addfl17Component } from './addfl17/addfl17.component';

const routes: Routes = [
  {
    path: 'list',
    component: Fl17Component
  },
  {
    path: 'add',
    component: Addfl17Component
  },
  {
    path: 'view',
    component: Viewfl17Component
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl17RoutingModule { }
