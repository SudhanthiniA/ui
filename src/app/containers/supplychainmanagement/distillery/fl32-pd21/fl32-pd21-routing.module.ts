import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Fl32Pd21Component } from './fl32-pd21.component';
import { Addfl32Pd21Component } from './addfl32-pd21/addfl32-pd21.component';
import { Viewfl32Pd21Component } from './viewfl32-pd21/viewfl32-pd21.component';

const routes: Routes = [
  {
    path : 'list',
    component : Fl32Pd21Component
  },
  {
    path: 'add',
    component : Addfl32Pd21Component
  },
  {
    path: 'view',
    component : Viewfl32Pd21Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl32Pd21RoutingModule { }
