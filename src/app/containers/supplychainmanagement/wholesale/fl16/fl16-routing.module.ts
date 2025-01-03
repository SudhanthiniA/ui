import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Fl16Component } from './fl16.component';
import { Viewfl16Component } from './viewfl16/viewfl16.component';
import { Addfl16Component } from './addfl16/addfl16.component';

const routes: Routes = [
  {
    path: 'list',
    component: Fl16Component
  },
  {
    path: 'add',
    component: Addfl16Component
  },
  {
    path: 'view',
    component: Viewfl16Component
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl16RoutingModule { }
