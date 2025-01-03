import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Fl2Component } from './fl2.component';
import { Viewfl2Component } from './viewfl2/viewfl2.component';

const routes: Routes = [
  {
    path : 'add',
    component : Fl2Component
  },
  {
    path : 'view',
    component : Viewfl2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl2RoutingModule { }
