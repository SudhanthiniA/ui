import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Fl32Pd25Component } from './fl32-pd25.component';
import { Addfl32Pd25Component } from './addfl32-pd25/addfl32-pd25.component';
import { Viewfl32Pd25Component } from './viewfl32-pd25/viewfl32-pd25.component';

const routes: Routes = [
  {
    path : 'list',
    component : Fl32Pd25Component
  },
  {
    path: 'add',
    component : Addfl32Pd25Component
  },
  {
    path: 'view',
    component : Viewfl32Pd25Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl32Pd25RoutingModule { }
